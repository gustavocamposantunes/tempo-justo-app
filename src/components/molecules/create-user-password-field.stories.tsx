"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import { CreateUserPasswordField } from "@/components/molecules/create-user-password-field";
import { createUserSchema, type CreateUserFormData } from "@/lib/schemas/create-user";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/CreateUserPasswordField",
  component: CreateUserPasswordField,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const methods = useForm<CreateUserFormData>({
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
        resolver: zodResolver(createUserSchema as never),
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
} satisfies Meta<typeof CreateUserPasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function PasswordFieldWithError() {
  const { trigger } = useFormContext<CreateUserFormData>();

  useEffect(() => {
    trigger("password");
  }, [trigger]);

  return <CreateUserPasswordField />;
}

export const WithError: Story = {
  decorators: [
    () => {
      const methods = useForm<CreateUserFormData>({
        defaultValues: {
          name: "User",
          email: "user@example.com",
          password: "123",
        },
        mode: "onChange",
        resolver: zodResolver(createUserSchema as never),
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
