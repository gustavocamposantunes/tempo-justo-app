"use client";

import { useEffect } from "react";

import { useForm, FormProvider, useFormContext } from "react-hook-form";

import { EmailField } from "@/components/molecules/email-field";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/EmailField",
  component: EmailField,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          email: "",
        },
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
} satisfies Meta<typeof EmailField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function EmailFieldWithError() {
  const { trigger } = useFormContext();

  useEffect(() => {
    trigger("email");
  }, [trigger]);

  return <EmailField />;
}

export const WithError: Story = {
  decorators: [
    () => {
      const methods = useForm({
        defaultValues: {
          email: "invalid-email", // Invalid email format to trigger validation
        },
        mode: "onChange",
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

export const WithValue: Story = {
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          email: "user@example.com",
        },
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
};
