import { isAxiosError } from "axios";

import { InvalidCredentialsError, InternalServerError } from "@/lib/errors";

import { httpClient } from "../lib/http";

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
    const response = await httpClient.post<LoginResponse>(
      "/auth/login",
      credentials
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new InvalidCredentialsError();
      }
      throw new InternalServerError(error.response?.data?.message || "Erro ao fazer o login");
    }
    throw error;
  }
};