"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CookiesProvider>
  );
}
