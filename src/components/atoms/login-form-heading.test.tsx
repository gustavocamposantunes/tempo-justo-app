import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LoginFormHeading } from "@/components/atoms/login-form-heading";

describe("LoginFormHeading", () => {
  it("should render heading and helper description", () => {
    render(<LoginFormHeading />);

    expect(screen.getByRole("heading", { name: /acesse sua conta/i })).toBeInTheDocument();
    expect(
      screen.getByText(/conecte-se para continuar sua jornada de colaboração\./i),
    ).toBeInTheDocument();
  });
});
