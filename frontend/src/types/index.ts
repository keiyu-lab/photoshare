export interface AlbumType {
  id: string;
  name: string;
  parent_album_id: string | null; // APIのスネークケースに合わせる
  owner_user_id: string;          // APIのスネークケースに合わせる
  children?: AlbumType[];
  userPermission: 'owner' | 'write' | 'read'; // 必須フィールドに変更
  isShared: boolean;              // 必須フィールドに変更
  sharedWith?: SharedUser[];
  owner?: UserType;
  role?: 'owner' | 'write' | 'read'; // /shared エンドポイント用
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