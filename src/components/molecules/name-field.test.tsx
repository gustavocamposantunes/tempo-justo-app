import { useEffect } from "react";

import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";

import { NameField } from "@/components/molecules/name-field";
import type { CreateUserFormData } from "@/lib/schemas/create-user";

type RenderOptions = {
  nameErrorMessage?: string;
};

function NameFieldTestWrapper({ nameErrorMessage }: RenderOptions) {
  const methods = useForm<CreateUserFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!nameErrorMessage) return;

    methods.setError("name", {
      type: "manual",
      message: nameErrorMessage,
    });
  }, [methods, nameErrorMessage]);

  return (
    <FormProvider {...methods}>
      <NameField />
    </FormProvider>
  );
}

describe("NameField", () => {
  it("should render name input", () => {
    render(<NameFieldTestWrapper />);

    const nameInput = screen.getByLabelText(/nome/i);

    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveAttribute("placeholder", "Seu nome");
  });

  it("should render name validation message", () => {
    render(<NameFieldTestWrapper nameErrorMessage="Nome é obrigatório" />);

    expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nome/i)).toHaveAttribute("aria-invalid", "true");
  });
});
