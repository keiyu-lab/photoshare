export interface Album {
  id: string;
  name: string;
  parentAlbumId: string | null;
  ownerUserId: string;
  children?: Album[];
}

export interface Photo {
  id: string;
  albumId: string;
  s3Key: string;
  uploadedByUserId: string;
  createdAt?: string;
  tags: string[];
}
