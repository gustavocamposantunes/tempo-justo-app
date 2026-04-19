import { SignUpPrompt } from "@/components/molecules/sign-up-prompt";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/SignUpPrompt",
  component: SignUpPrompt,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignUpPrompt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
