import axios from "axios";

const apiPort = process.env.NEXT_PUBLIC_API_PORT ?? "3333";
const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? `http://localhost:${apiPort}`;

export const httpClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
