import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CreateUserFormCard } from "@/components/organisms/create-user-form-card";

describe("CreateUserFormCard", () => {
  it("should render fields and submit action", () => {
    render(<CreateUserFormCard />);

    expect(screen.getByRole("heading", { name: /crie sua conta/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^senha$/i, { selector: "input" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /criar conta/i })).toBeInTheDocument();
  });

  it("should show validation messages on empty submit", async () => {
    render(<CreateUserFormCard />);

    fireEvent.click(screen.getByRole("button", { name: /criar conta/i }));

    expect(await screen.findByText(/nome é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/e-mail é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/senha é obrigatória/i)).toBeInTheDocument();
  });

  it("should render login redirect link", () => {
    render(<CreateUserFormCard />);

    expect(screen.getByRole("link", { name: /entrar/i })).toHaveAttribute("href", "/");
  });
});
