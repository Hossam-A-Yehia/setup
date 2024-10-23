// hooks/useLogin.ts
import { useMutation } from '@tanstack/react-query';
import { LoginRequest, LoginResponse } from '../types/Auth';
import { login } from '../services/authServices';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: login, // Use mutationFn to specify the mutation function
  });
};
