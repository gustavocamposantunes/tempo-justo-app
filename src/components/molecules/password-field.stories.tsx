"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

import { PasswordField } from "@/components/molecules/password-field";
import { loginSchema, type LoginFormData } from "@/lib/schemas/login";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/PasswordField",
  component: PasswordField,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const methods = useForm<LoginFormData>({
        defaultValues: {
          password: "",
          email: "",
        },
        resolver: zodResolver(loginSchema as never),
      });

      return (
        <FormProvider {...methods}>
          <div className="w-90">
            <Story />
          </div>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function PasswordFieldWithError() {
  const { trigger } = useFormContext();

  useEffect(() => {
    trigger("password");
  }, [trigger]);

  return <PasswordField />;
}

export const WithError: Story = {
  decorators: [
    () => {
      const methods = useForm<LoginFormData>({
        defaultValues: {
          password: "123", // Too short (less than 6 chars) to trigger validation
          email: "user@example.com",
        },
        mode: "onChange",
        resolver: zodResolver(loginSchema as never),
      });

      return (
        <FormProvider {...methods}>
          <div className="w-90">
            <PasswordFieldWithError />
          </div>
        </FormProvider>
      );
    },
  ],
};
