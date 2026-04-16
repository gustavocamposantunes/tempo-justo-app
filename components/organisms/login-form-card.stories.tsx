import { LoginFormCard } from "@/components/organisms/login-form-card";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Organisms/LoginFormCard",
  component: LoginFormCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-dvh bg-brand-ice p-8 lg:p-0">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginFormCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
