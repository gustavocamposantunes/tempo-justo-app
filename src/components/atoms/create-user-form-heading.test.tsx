import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CreateUserFormHeading } from "@/components/atoms/create-user-form-heading";

describe("CreateUserFormHeading", () => {
  it("should render heading and description", () => {
    render(<CreateUserFormHeading />);

    expect(screen.getByRole("heading", { name: /crie sua conta/i })).toBeInTheDocument();
    expect(
      screen.getByText(/preencha os dados para começar a compartilhar seu tempo\./i),
    ).toBeInTheDocument();
  });
});
