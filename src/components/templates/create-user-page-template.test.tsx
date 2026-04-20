import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CreateUserPageTemplate } from "@/components/templates/create-user-page-template";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

vi.mock("@/hooks/useRegisterUser", () => ({
  useRegisterUser: () => ({
    reset: vi.fn(),
    mutate: vi.fn(),
    isPending: false,
    error: null,
  }),
}));

describe("CreateUserPageTemplate", () => {
  it("should render hero section and create user form", () => {
    render(<CreateUserPageTemplate />);

    expect(screen.getByRole("heading", { name: /tempo justo/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /crie sua conta/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /justiça social através da economia solidária\. onde o valor está no saber compartilhar\./i,
      ),
    ).toBeInTheDocument();
  });
});
