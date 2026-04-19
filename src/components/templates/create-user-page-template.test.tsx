import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CreateUserPageTemplate } from "@/components/templates/create-user-page-template";

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
