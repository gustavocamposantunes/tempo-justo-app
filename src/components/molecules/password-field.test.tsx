import { useEffect } from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";

import { PasswordField } from "@/components/molecules/password-field";
import type { LoginFormData } from "@/lib/schemas/login";

type RenderOptions = {
  passwordErrorMessage?: string;
};

function PasswordFieldTestWrapper({ passwordErrorMessage }: RenderOptions) {
  const methods = useForm<LoginFormData>({
    defaultValues: {
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
      <PasswordField />
    </FormProvider>
  );
}

describe("PasswordField", () => {
  it("should render password input and forgot password link", () => {
    render(<PasswordFieldTestWrapper />);

    const passwordInput = screen.getByLabelText(/^senha$/i, { selector: "input" });

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(screen.getByRole("link", { name: /esqueceu a senha\?/i })).toHaveAttribute(
      "href",
      "/forgot-password",
    );
  });

  it("should toggle password visibility", () => {
    render(<PasswordFieldTestWrapper />);

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
    render(<PasswordFieldTestWrapper passwordErrorMessage="Senha inválida" />);

    expect(screen.getByText(/senha inválida/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^senha$/i, { selector: "input" })).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });
});
