import { Response } from 'express';
import { ApiResponse } from '../types';

export const sendSuccess = <T>(res: Response, data: T, message?: string) => {
  const response: ApiResponse<T> = { data };
  if (message) response.message = message;
  res.json(response);
};

export const sendError = (res: Response, status: number, error: string) => {
  const response: ApiResponse = { error };
  res.status(status).json(response);
};
