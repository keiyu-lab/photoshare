export interface AlbumType {
  id: string;
  name: string;
  parent_album_id: string | null;
  owner_user_id: string;         
  children?: AlbumType[];
  userPermission: 'owner' | 'write' | 'read'; 
  isShared: boolean;              
  sharedWith?: SharedUser[];
  owner?: UserType;
  role?: 'owner' | 'write' | 'read';
  _count?: {
    photos: number;
    sub_albums: number;
  };
  created_at?: string;
  updated_at?: string;
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

export interface SharedUser {
  userId: string;
  email: string;
  name?: string;
  permission: 'write' | 'read';
  sharedAt: string;
}