import { useEffect } from "react";

import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";

import { CreateUserEmailField } from "@/components/molecules/create-user-email-field";
import type { CreateUserFormData } from "@/lib/schemas/create-user";

type RenderOptions = {
  emailErrorMessage?: string;
};

function CreateUserEmailFieldTestWrapper({ emailErrorMessage }: RenderOptions) {
  const methods = useForm<CreateUserFormData>({
    defaultValues: {
      name: "",
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
      <CreateUserEmailField />
    </FormProvider>
  );
}

describe("CreateUserEmailField", () => {
  it("should render e-mail input", () => {
    render(<CreateUserEmailFieldTestWrapper />);

    const emailInput = screen.getByLabelText(/e-mail/i);

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "voce@exemplo.com");
  });

  it("should render e-mail validation message", () => {
    render(<CreateUserEmailFieldTestWrapper emailErrorMessage="E-mail inválido" />);

    expect(screen.getByText(/e-mail inválido/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toHaveAttribute("aria-invalid", "true");
  });
});
