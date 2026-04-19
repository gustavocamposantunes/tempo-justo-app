"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import { CreateUserEmailField } from "@/components/molecules/create-user-email-field";
import { createUserSchema, type CreateUserFormData } from "@/lib/schemas/create-user";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/CreateUserEmailField",
  component: CreateUserEmailField,
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
} satisfies Meta<typeof CreateUserEmailField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function EmailFieldWithError() {
  const { trigger } = useFormContext<CreateUserFormData>();

  useEffect(() => {
    trigger("email");
  }, [trigger]);

  return <CreateUserEmailField />;
}

export const WithError: Story = {
  decorators: [
    () => {
      const methods = useForm<CreateUserFormData>({
        defaultValues: {
          name: "User",
          email: "invalid-email",
          password: "123456",
        },
        mode: "onChange",
        resolver: zodResolver(createUserSchema as never),
      });

      return (
        <FormProvider {...methods}>
          <div className="w-90">
            <EmailFieldWithError />
          </div>
        </FormProvider>
      );
    },
  ],
};
