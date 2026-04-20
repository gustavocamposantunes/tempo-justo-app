import { isAxiosError } from "axios";
import { describe, it, expect, vi, beforeEach } from "vitest";

import {
  InternalServerError,
  InvalidCredentialsError,
  UserAlreadyExistsError,
} from "@/lib/errors";

import { loginUser, LoginRequest, registerUser, RegisterUserRequest } from "./auth.service";
import { httpClient } from "../lib/http";

import type { AxiosError } from "axios";

vi.mock("axios", () => ({
  isAxiosError: vi.fn(),
}));

vi.mock("../lib/http", () => ({
  httpClient: {
    post: vi.fn(),
  },
}));

const mockedIsAxiosError = vi.mocked(isAxiosError);
const mockedHttpClient = vi.mocked(httpClient);

describe("auth.service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should throw InvalidCredentialsError on 401 response", async () => {
    const credentials: LoginRequest = {
      email: "test@example.com",
      password: "wrongpassword",
    };

    const mockError = new Error("Unauthorized") as AxiosError;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockError.response = { status: 401 } as any;
    mockedIsAxiosError.mockReturnValue(true);
    mockedHttpClient.post.mockRejectedValue(mockError);

    await expect(loginUser(credentials)).rejects.toThrow(InvalidCredentialsError);
  });

  it("should throw InternalServerError on other HTTP errors", async () => {
    const credentials: LoginRequest = {
      email: "test@example.com",
      password: "password123",
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockError = new Error("Server Error") as any;
    mockError.response = {
      status: 500,
      data: { message: "Database connection failed" },
    };
    mockedIsAxiosError.mockReturnValue(true);
    mockedHttpClient.post.mockRejectedValue(mockError);

    await expect(loginUser(credentials)).rejects.toThrow(InternalServerError);
  });

  it("should throw InternalServerError with default message when no error message provided", async () => {
    const credentials: LoginRequest = {
      email: "test@example.com",
      password: "password123",
    };

    const mockError = new Error("Server Error") as AxiosError;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockError.response = { status: 500, data: {} } as any;
    mockedIsAxiosError.mockReturnValue(true);
    mockedHttpClient.post.mockRejectedValue(mockError);

    await expect(loginUser(credentials)).rejects.toThrow("Erro ao fazer o login");
  });

  it("should re-throw non-axios errors", async () => {
    const credentials: LoginRequest = {
      email: "test@example.com",
      password: "password123",
    };

    const mockError = new Error("Network error");
    mockedIsAxiosError.mockReturnValue(false);
    mockedHttpClient.post.mockRejectedValue(mockError);

    await expect(loginUser(credentials)).rejects.toThrow("Network error");
  });

  it("should return login response on successful login", async () => {
    const credentials: LoginRequest = {
      email: "test@example.com",
      password: "password123",
    };

    const mockResponse = {
      data: {
        token: "mock-token",
        user: {
          id: "user-123",
          email: "test@example.com",
          name: "Test User",
        },
      },
    };

    mockedHttpClient.post.mockResolvedValue(mockResponse);

    const result = await loginUser(credentials);

    expect(mockedHttpClient.post).toHaveBeenCalledWith(
      "/auth/login",
      credentials
    );
    expect(result).toEqual(mockResponse.data);
  });

  it("should throw UserAlreadyExistsError on 409 response while registering", async () => {
    const userData: RegisterUserRequest = {
      name: "John Doe",
      email: "test@example.com",
      password: "password123",
    };

    const mockError = new Error("Conflict") as AxiosError;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockError.response = { status: 409 } as any;
    mockedIsAxiosError.mockReturnValue(true);
    mockedHttpClient.post.mockRejectedValue(mockError);

    await expect(registerUser(userData)).rejects.toThrow(UserAlreadyExistsError);
  });

  it("should return register response on successful registration", async () => {
    const userData: RegisterUserRequest = {
      name: "John Doe",
      email: "test@example.com",
      password: "password123",
    };

    const mockResponse = {
      data: {
        id: "user-123",
        name: "John Doe",
        email: "test@example.com",
      },
    };

    mockedHttpClient.post.mockResolvedValue(mockResponse);

    const result = await registerUser(userData);

    expect(mockedHttpClient.post).toHaveBeenCalledWith("/auth/register", userData);
    expect(result).toEqual(mockResponse.data);
  });
});
