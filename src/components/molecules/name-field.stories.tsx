"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import { NameField } from "@/components/molecules/name-field";
import { createUserSchema, type CreateUserFormData } from "@/lib/schemas/create-user";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/NameField",
  component: NameField,
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
} satisfies Meta<typeof NameField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function NameFieldWithError() {
  const { trigger } = useFormContext<CreateUserFormData>();

  useEffect(() => {
    trigger("name");
  }, [trigger]);

  return <NameField />;
}

export const WithError: Story = {
  decorators: [
    () => {
      const methods = useForm<CreateUserFormData>({
        defaultValues: {
          name: "",
          email: "user@example.com",
          password: "123456",
        },
        mode: "onChange",
        resolver: zodResolver(createUserSchema as never),
      });

      return (
        <FormProvider {...methods}>
          <div className="w-90">
            <NameFieldWithError />
          </div>
        </FormProvider>
      );
    },
  ],
};
