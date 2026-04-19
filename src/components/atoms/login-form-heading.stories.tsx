import { LoginFormHeading } from "@/components/atoms/login-form-heading";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Atoms/LoginFormHeading",
  component: LoginFormHeading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoginFormHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
