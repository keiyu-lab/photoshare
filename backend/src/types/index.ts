import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user: {
    sub: string;
    email?: string;
  };
  file?: Express.Multer.File;
}

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

export interface CreateAlbumRequest {
  name: string;
  parent_album_id?: string;
}

export interface RenameAlbumRequest {
  name: string;
}

export interface MoveAlbumRequest {
  parentAlbumId: string;
}

export interface MovePhotoRequest {
  targetAlbumId: string;
}

export interface UserSyncRequest {
  cognito_sub: string;
  email: string;
}
