import axios from "axios";

import { InvalidCredentialsError, InternalServerError } from "@/lib/errors";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const loginUser = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>("/api/auth/login", credentials);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new InvalidCredentialsError();
      }
      throw new InternalServerError(error.response?.data?.message || "Erro ao fazer o login");
    }
    throw error;
  }
};