import { PasswordField } from "@/components/molecules/password-field";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/PasswordField",
  component: PasswordField,
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
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
