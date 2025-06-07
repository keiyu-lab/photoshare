import { PrismaClient } from '../generated/prisma/client';
import { getS3Url } from '../middleware/aws';
interface SearchResult {
  photo: any;
  similarity: number;
}

const prisma = new PrismaClient();


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
  limit: number = 20,
  albumId: string
): Promise<SearchResult[]> {
  try {
    // ユーザーの写真と埋め込みを取得
    const photosWithEmbeddings = await prisma.photo.findMany({
      where: {
        uploaded_by_user_id: userId,
        album_id: albumId,
        embedding: {
          isNot: null
        },
        is_deleted: false
      },
      include: {
        embedding: true,
        uploader: true 
      }
    });

    // 類似度を計算してソート
    const results: SearchResult[] = photosWithEmbeddings
      .map(photo => ({
        photo,
        similarity: cosineSimilarity(queryVector, photo.embedding!.vector)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit);

    // 署名付きURLを生成（フロントエンドにはURLも渡さないと）
    const resultsWithUrls = await Promise.all(
      results.map(async (result) => {

        const url = await getS3Url(result.photo);

        return {
          ...result,
          photo: {
            ...result.photo,
            url: url
          }
        };
      })
    );

    console.log("ベクトル検索結果：", resultsWithUrls);

    return resultsWithUrls;
  } catch (error) {
    console.error('Error searching similar photos:', error);
    throw error;
  }
}