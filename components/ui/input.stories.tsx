import { Input } from "@/components/ui/input";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-90">
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: "Digite seu e-mail",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "••••••••",
  },
};
