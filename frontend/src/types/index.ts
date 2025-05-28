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
  uploader: UserType;
  createdAt?: string;
}

export interface UserType {
  id: string 
  name: string
  email: string
}