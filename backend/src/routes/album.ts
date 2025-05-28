import express from 'express';
import { PrismaClient } from '../generated/prisma/client';
import { verifyJwt } from '../middleware/jwt';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const router = express.Router();
const prisma = new PrismaClient();

// アルバム一覧
router.get('/', verifyJwt, async (req: any, res) => {
  const userId = req.user.sub;
  try {
    const albums = await prisma.album.findMany({
      where: { owner_user_id: userId, is_deleted: false },
    });
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch albums' });
  }
});

// アルバム作成
router.post('/', verifyJwt, async (req: any, res) => {
  const userId = req.user.sub;
  const { name, parent_album_id } = req.body;

  if (!name) return res.status(400).json({ error: 'Album name is required' });

  try {
    const album = await prisma.album.create({
      data: {
        name,
        parent_album_id: parent_album_id || null,
        owner_user_id: userId,
      },
    });
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create album' });
  }
});

// アルバム削除（再帰的）
router.delete('/:id', verifyJwt, async (req: any, res) => {
  const userId = req.user.sub;
  const albumId = req.params.id;

  try {
    const album = await prisma.album.findUnique({
      where: { id: albumId },
    });

    if (!album || album.owner_user_id !== userId) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await softDeleteAlbumAndChildren(albumId);
    res.json({ message: 'Album and its sub-albums deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete album' });
  }
});


export async function softDeleteAlbumAndChildren(albumId: string): Promise<void> {
  await prisma.album.update({
    where: { id: albumId },
    data: { is_deleted: true },
  });

  const children = await prisma.album.findMany({
    where: {
      parent_album_id: albumId,
      is_deleted: false,
    },
  });

  for (const child of children) {
    await softDeleteAlbumAndChildren(child.id);
  }
}

// アルバム名変更
router.put('/:id/rename', verifyJwt, async (req: any, res) => {
  const userId = req.user.sub;
  const albumId = req.params.id;
  const { name } = req.body;

  if (!name) return res.status(400).json({ error: 'Album name is required' });

  try {
    const album = await prisma.album.findUnique({ where: { id: albumId } });

    if (!album || album.owner_user_id !== userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const updated = await prisma.album.update({
      where: { id: albumId },
      data: { name },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to rename album' });
  }
});

// アルバム親変更
router.put('/:id/move', verifyJwt, async (req: any, res) => {
  const userId = req.user.sub;
  const albumId = req.params.id;
  const { parentAlbumId } = req.body;

  if (!parentAlbumId) return res.status(400).json({ error: 'New Parent Id is required' });

  try {
    const album = await prisma.album.findUnique({ where: { id: albumId } });

    if (!album || album.owner_user_id !== userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const updated = await prisma.album.update({
      where: { id: albumId },
      data: { parent_album_id: parentAlbumId },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update parent album' });
  }
});

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

export default router;

