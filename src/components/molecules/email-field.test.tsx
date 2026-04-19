import { useEffect } from "react";

import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";

import { EmailField } from "@/components/molecules/email-field";
import type { LoginFormData } from "@/lib/schemas/login";

type RenderOptions = {
  emailErrorMessage?: string;
};

function EmailFieldTestWrapper({ emailErrorMessage }: RenderOptions) {
  const methods = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!emailErrorMessage) return;

    methods.setError("email", {
      type: "manual",
      message: emailErrorMessage,
    });
  }, [emailErrorMessage, methods]);

  return (
    <FormProvider {...methods}>
      <EmailField />
    </FormProvider>
  );
}

describe("EmailField", () => {
  it("should render e-mail input", () => {
    render(<EmailFieldTestWrapper />);

    const emailInput = screen.getByLabelText(/e-mail/i);

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "voce@exemplo.com");
  });

  it("should render e-mail validation message", () => {
    render(<EmailFieldTestWrapper emailErrorMessage="E-mail inválido" />);

    expect(screen.getByText(/e-mail inválido/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toHaveAttribute("aria-invalid", "true");
  });
});
