import { Worker } from 'bullmq';
import { PrismaClient } from '../generated/prisma/client';
import { llavaDescribeImage, vectorizeText } from './ollama';

const prisma = new PrismaClient();

export const imageWorker = new Worker(
  'image-processing',
  async (job) => {
    const { photoId, imageBuffer, mimeType } = job.data;
    
    try {
      console.log(`Processing photo: ${photoId}`);
      
      // 画像バッファに変換
      const buffer = Buffer.from(imageBuffer, 'base64');
      
      // llavaで画像の説明取得（バッファを直接送信）
      const description = await llavaDescribeImage(buffer, mimeType);
      console.log(`Generated description: ${description}`);
      
      // テキストをベクトル化
      const vector = await vectorizeText(description);
      console.log(`Generated vector of length: ${vector.length}`);
      
      // データベースに埋め込みを保存
      await prisma.photoEmbedding.create({
        data: {
          photo_id: photoId,
          description: description,
          vector: vector
        }
      });
      
      console.log(`Successfully processed photo: ${photoId}`);
      
    } catch (error) {
      console.error(`Error processing photo ${photoId}:`, error);
      throw error;
    }
  },
  { 
    connection: { 
      host: process.env.REDIS_HOST || 'localhost', 
      port: Number(process.env.REDIS_PORT) || 6379 
    },
    concurrency: 2 // 並行処理数はとりあえず2個まで（ハードウェア制限が厳しい）
  }
);