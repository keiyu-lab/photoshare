export interface AlbumType {
  id: string;
  name: string;
  parentAlbumId: string | null;
  ownerUserId: string;
  children?: AlbumType[];
}

export interface Photo {
  id: string;
  albumId: string;
  s3Key: string;
  uploadedByUserId: string;
  createdAt?: string;
  tags: string[];
}
