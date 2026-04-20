import axios from "axios";

const apiPort = process.env.NEXT_PUBLIC_API_PORT ?? "3333";
const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? `http://localhost:${apiPort}`;
const requestTimeout = Number(process.env.NEXT_PUBLIC_API_TIMEOUT_MS ?? "10000");

const getCookieValue = (cookieName: string): string | undefined => {
  if (typeof document === "undefined") {
    return undefined;
  }

  const match = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${cookieName}=`));

  return match?.split("=")[1];
};

export const httpClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: requestTimeout,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  const token = getCookieValue("tempo-justo-token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      error.message = "Tempo limite da requisição excedido";
    }

    return Promise.reject(error);
  }
);
