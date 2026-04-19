import { CreateUserFormHeading } from "@/components/atoms/create-user-form-heading";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Atoms/CreateUserFormHeading",
  component: CreateUserFormHeading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CreateUserFormHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
