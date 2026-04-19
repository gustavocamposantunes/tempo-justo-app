import { useEffect } from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";

import { CreateUserPasswordField } from "@/components/molecules/create-user-password-field";
import type { CreateUserFormData } from "@/lib/schemas/create-user";

type RenderOptions = {
  passwordErrorMessage?: string;
};

function CreateUserPasswordFieldTestWrapper({ passwordErrorMessage }: RenderOptions) {
  const methods = useForm<CreateUserFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!passwordErrorMessage) return;

    methods.setError("password", {
      type: "manual",
      message: passwordErrorMessage,
    });
  }, [methods, passwordErrorMessage]);

  return (
    <FormProvider {...methods}>
      <CreateUserPasswordField />
    </FormProvider>
  );
}

describe("CreateUserPasswordField", () => {
  it("should render password input", () => {
    render(<CreateUserPasswordFieldTestWrapper />);

    const passwordInput = screen.getByLabelText(/^senha$/i, { selector: "input" });

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should toggle password visibility", () => {
    render(<CreateUserPasswordFieldTestWrapper />);

    const passwordInput = screen.getByLabelText(/^senha$/i, { selector: "input" });
    const toggleButton = screen.getByRole("button", { name: /mostrar senha/i });

    expect(passwordInput).toHaveAttribute("type", "password");
    expect(toggleButton).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute("type", "text");
    expect(screen.getByRole("button", { name: /ocultar senha/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("should render password validation message", () => {
    render(<CreateUserPasswordFieldTestWrapper passwordErrorMessage="Senha inválida" />);

    expect(screen.getByText(/senha inválida/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^senha$/i, { selector: "input" })).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });
});
