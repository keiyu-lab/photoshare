import express, {Response} from 'express';
import { verifyJwt } from '../middleware/jwt';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import { PrismaClient } from '../generated/prisma/client';
import { AuthenticatedRequest } from '../types';
import { imageQueue } from '../types/bullmq';
import { getS3Url, getUploadUrl } from '../middleware/aws';

dotenv.config();
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });
const prisma = new PrismaClient();

/**
 * アップロード用の署名付きURLを発行
 */
router.post('/', verifyJwt, upload.single('image'), async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.sub;
  const file = req.file;
  const albumId = req.body.albumId || '';
  
  if (!file) return res.status(400).json({ error: 'ファイルがありません' });

  const key = `${userId}/${albumId}/${uuidv4()}-${file.originalname}`;

  try {
      const signedUrl = await getUploadUrl(file, key); 

      const res_upload = await fetch(signedUrl, {
          method: 'PUT',
          headers: {
              'Content-Type': file.mimetype,
          },
          body: file.buffer,
      });

      if (!res_upload.ok) {
        throw new Error('S3 upload failed');
      }
    
      // dbに格納
      const photo = await prisma.photo.create({
          data: {
              album_id: albumId || null,
              name: file.originalname,
              meta: null,
              s3_key: key,
              uploaded_by_user_id: userId,
          },
      });
      
      // ベクトル化ジョブをキューに追加
      await imageQueue.add('process-image', {
        photoId: photo.id,
        imageBuffer: file.buffer.toString('base64'), // Base64エンコードして送信
        mimeType: file.mimetype
      }, {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 5000,
        },
      });

      res.json({ photo });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create upload URL' });
  }
});

router.post('/search', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.sub;
  const { query, limit = 20, albumId } = req.body;
  
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  try {
    // クエリをベクトル化
    const { vectorizeText } = require('../utils/ollama');
    const queryVector = await vectorizeText(query);
    
    // 類似画像を検索
    const { searchSimilarPhotos } = require('../utils/vectorSearch');
    const results = await searchSimilarPhotos(queryVector, userId, limit, albumId);
    
    // フロント側の型に合うように調整
    const formattedResults = results.map(result => ({
      id: result.photo.id,
      albumId: result.photo.album_id,
      url: result.photo.url,
      name: result.photo.name,
      meta: result.photo.meta,
      uploader: {
        id: result.photo.uploader.id,
        name: result.photo.uploader.name || '',
        email: result.photo.uploader.email
      },
      createdAt: result.photo.created_at,
      similarity: result.similarity
    }));
    
    res.json({ 
      query,
      results: formattedResults
    });
    
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

/**
 * ダウンロード（表示）用の署名付きURLを発行
 */
router.get('/:id', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const albumId = req.params.id;

  try {
    const photos = await prisma.photo.findMany({
      where: {
        album_id: albumId,
        is_deleted: false,
      },
      select: {
        id: true,
        name: true,
        s3_key: true,
        meta: true,
        uploader: true,
        created_at: true
      },
    });

    const signedUrls = await Promise.all(
      photos.map(async (photo) => {
        const url = await getS3Url(photo);

        return {
          id: photo.id,
          name: photo.name,
          url: url,
          meta: photo.meta,
          uploader: photo.uploader,
          createdAt: photo.created_at
        }
      })
    )

    res.json(signedUrls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create view URL' });
  }
});

router.delete('/:id', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const photoId = req.params.id;
    try {
      // 論理削除
      await prisma.photo.update({
        where: { id: photoId },
        data: { is_deleted: true },
      });

      // S3からは削除しない。後で完全に削除する機能をつける。また、アルバムと写真も復元できる機能を付けたい
    res.status(200).json({ message: 'Photo deleted' });
  }catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete photo from db' });
  }
});

router.put('/:id/move', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const photoId = req.params.id;
  const {targetAlbumId} = req.body;
  console.log(targetAlbumId)
  try {
    await prisma.photo.update({
      where: { id: photoId },
      data: { album_id: targetAlbumId},
    });
    res.status(200).json({ message: 'Photo moved' });
  }catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to move photo' });
  }
});

export default router;
