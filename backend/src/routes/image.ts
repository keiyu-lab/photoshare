import express from 'express';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { verifyJwt } from '../middleware/jwt';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import { PrismaClient } from '../generated/prisma/client';

dotenv.config();
const router = express.Router();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

const upload = multer({ storage: multer.memoryStorage() });
const prisma = new PrismaClient();

/**
 * アップロード用の署名付きURLを発行
 */
router.post('/upload', verifyJwt, upload.single('image'), async (req: any, res) => {
  const userId = req.user.sub;
  const file = req.file;
  const albumId = req.body.albumId || '';
  
  if (!file) return res.status(400).json({ error: 'ファイルがありません' });

  const key = `${userId}/${albumId}/${uuidv4()}-${file.originalname}`;

  try {
      const command = new PutObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME!,
          Key: key,
          ContentType: file.mimetype,
      });

      const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 * 5 }); // 5分有効

      const res_upload = await fetch(signedUrl, {
          method: 'PUT',
          headers: {
              'Content-Type': file.mimetype,
          },
          body: file.buffer,
      });

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

      res.json({ photo });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create upload URL' });
  }
});

/**
 * ダウンロード（表示）用の署名付きURLを発行
 */
router.get('/view/:id', verifyJwt, async (req: any, res) => {
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
        uploader: true
      },
    });

    const signedUrls = await Promise.all(
      photos.map(async (photo) => {
        const command = new GetObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME!,
          Key: photo.s3_key,
        });

        const url = await getSignedUrl(s3, command, { expiresIn: 60 * 60 }); // 1時間有効

        return {
          id: photo.id,
          name: photo.name,
          url: url,
          meta: photo.meta,
          uploader: photo.uploader
        }
      })
    )

    res.json(signedUrls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create view URL' });
  }
});

export default router;
