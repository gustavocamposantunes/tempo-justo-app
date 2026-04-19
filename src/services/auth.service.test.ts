import axios from "axios";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { InvalidCredentialsError, InternalServerError } from "@/lib/errors";

import { loginUser, LoginRequest } from "./auth.service";

import type { AxiosError } from "axios";

vi.mock("axios");

const mockedAxios = vi.mocked(axios);

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedAxios.isAxiosError = vi.fn().mockReturnValue(true) as any;
    mockedAxios.post.mockRejectedValue(mockError);

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedAxios.isAxiosError = vi.fn().mockReturnValue(true) as any;
    mockedAxios.post.mockRejectedValue(mockError);

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedAxios.isAxiosError = vi.fn().mockReturnValue(true) as any;
    mockedAxios.post.mockRejectedValue(mockError);

    await expect(loginUser(credentials)).rejects.toThrow("Erro ao fazer o login");
  });

  it("should re-throw non-axios errors", async () => {
    const credentials: LoginRequest = {
      email: "test@example.com",
      password: "password123",
    };

    const mockError = new Error("Network error");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedAxios.isAxiosError = vi.fn().mockReturnValue(false) as any;
    mockedAxios.post.mockRejectedValue(mockError);

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

    mockedAxios.post.mockResolvedValue(mockResponse);

    const result = await loginUser(credentials);

    expect(mockedAxios.post).toHaveBeenCalledWith("/api/auth/login", credentials);
    expect(result).toEqual(mockResponse.data);
  });
});
