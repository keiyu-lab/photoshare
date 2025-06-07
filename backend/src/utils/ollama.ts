//utils/ollama.ts
import axios from 'axios';

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

// Bufferを直接受け取る
export async function llavaDescribeImage(imageBuffer: Buffer, mimeType: string): Promise<string> {
  try {
    const base64Image = imageBuffer.toString('base64');

    const response = await axios.post(`${OLLAMA_BASE_URL}/api/generate`, {
      model: 'llava:13b',
      prompt: 'Describe this image in detail within 2 sentences for search purposes.',
      images: [base64Image],
      stream: false
    }, {
      timeout: 600000 // 600秒のタイムアウト
    });

    return response.data.response;
  } catch (error) {
    console.error('Error describing image with LLaVA:', error);
    throw error;
  }
}

export async function vectorizeText(text: string): Promise<number[]> {
  try {
    const response = await axios.post(`${OLLAMA_BASE_URL}/api/embeddings`, {
      model: 'nomic-embed-text', // 512次元埋め込みモデル
      prompt: text
    }, {
      timeout: 30000 // 30秒のタイムアウト
    });

    // 512次元に調整（念のため）
    const embedding = response.data.embedding;
    if (embedding.length !== 512) {
      // パディング
      if (embedding.length < 512) {
        return [...embedding, ...new Array(512 - embedding.length).fill(0)];
      } else {
        return embedding.slice(0, 512);
      }
    }
    
    return embedding;
  } catch (error) {
    console.error('Error vectorizing text:', error);
    throw error;
  }
}