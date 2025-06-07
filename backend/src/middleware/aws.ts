import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

export const getS3Url = async (photo: any) => {
    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: photo.s3_key,
      ResponseContentDisposition: `attachment; filename=${photo.name}`,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 60 * 60 });// 1時間有効
    
    return url;
}

export const getUploadUrl = async (file: Express.Multer.File, key: string) => {
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
        ContentType: file.mimetype,
    });
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 * 5 }); // 5分有効
    
    return signedUrl;
}