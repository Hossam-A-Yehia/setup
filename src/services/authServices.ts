// services/authServices.ts
import { LoginRequest, LoginResponse } from '../types/Auth';
import apiClient from './apiClient';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/auth/login', data);
  return response.data;
};
