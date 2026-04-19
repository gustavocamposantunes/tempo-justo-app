import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { CookiesProvider } from "react-cookie";
import { describe, expect, it } from "vitest";

import { LoginPageTemplate } from "@/components/templates/login-page-template";

const renderWithProviders = (ui: React.ReactNode) => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>{ui}</CookiesProvider>
    </QueryClientProvider>,
  );
};

describe("LoginPageTemplate layout", () => {
  it("should render both main interface sections", () => {
    renderWithProviders(<LoginPageTemplate />);

    expect(
      screen.getByText(/justiça social através da economia solidária/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /acesse sua conta/i }),
    ).toBeInTheDocument();
  });

  it("should render the primary login action", () => {
    renderWithProviders(<LoginPageTemplate />);

    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });
});
