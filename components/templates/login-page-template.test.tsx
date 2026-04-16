import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LoginPageTemplate } from "@/components/templates/login-page-template";

describe("LoginPageTemplate layout", () => {
  it("should render both main interface sections", () => {
    render(<LoginPageTemplate />);

    expect(
      screen.getByText(/justiça social através da economia solidária/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /acesse sua conta/i }),
    ).toBeInTheDocument();
  });

  it("should render the primary login action", () => {
    render(<LoginPageTemplate />);

    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });
});
