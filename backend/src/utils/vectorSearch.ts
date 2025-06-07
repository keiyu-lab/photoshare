// utils/vectorSearch.ts
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

interface SearchResult {
  photo: any;
  similarity: number;
}

// コサイン類似度を計算
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    throw new Error('Vector dimensions must match');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  const magnitude = Math.sqrt(normA) * Math.sqrt(normB);
  return magnitude === 0 ? 0 : dotProduct / magnitude;
}

export async function searchSimilarPhotos(
  queryVector: number[], 
  userId: string, 
  limit: number = 20
): Promise<SearchResult[]> {
  try {
    // ユーザーの写真と埋め込みを取得
    const photosWithEmbeddings = await prisma.photo.findMany({
      where: {
        uploaded_by_user_id: userId,
        embedding: {
          isNot: null
        }
      },
      include: {
        embedding: true
      }
    });

    // 類似度を計算してソート
    const results: SearchResult[] = photosWithEmbeddings
      .map(photo => ({
        photo,
        similarity: cosineSimilarity(queryVector, photo.embedding!.vector)
      }))
      .sort((a, b) => b.similarity - a.similarity) // 降順でソート
      .slice(0, limit);

    return results;
  } catch (error) {
    console.error('Error searching similar photos:', error);
    throw error;
  }
}