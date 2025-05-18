import express from 'express';
import AWS from 'aws-sdk';
import multer from 'multer';
import { verifyJwt } from '../middleware/jwt';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
const router = express.Router();

// S3設定
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// multer設定（メモリに保持）
const upload = multer({ storage: multer.memoryStorage() });

// POST
router.post('/upload', verifyJwt, upload.single('image'), async (req: any, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const userId = req.user.sub;
  const albumId = req.body.albumId || 'default'; // フォルダ分けしたい場合
  const file = req.file;

  const key = `${userId}/${albumId}/${uuidv4()}-${file.originalname}`;

  try {
    const result = await s3
      .upload({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read', // または private
      })
      .promise();

    res.status(200).json({ url: result.Location });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

export default router;