import { isAxiosError } from "axios";

import {
  InternalServerError,
  InvalidCredentialsError,
  UserAlreadyExistsError,
} from "@/lib/errors";

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

export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  id: string;
  name: string;
  email: string;
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

export const registerUser = async (
  userData: RegisterUserRequest
): Promise<RegisterUserResponse> => {
  try {
    const response = await httpClient.post<RegisterUserResponse>(
      "/auth/register",
      userData
    );

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 409) {
        throw new UserAlreadyExistsError();
      }

      throw new InternalServerError(
        error.response?.data?.message || "Erro ao criar conta"
      );
    }

    throw error;
  }
};