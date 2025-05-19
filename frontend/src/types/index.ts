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
  url: string;
  name: string;
  meta?: string;
  uploader: User;
  createdAt?: string;
}

export interface User {
  id: string 
  name: string
  email: string
}