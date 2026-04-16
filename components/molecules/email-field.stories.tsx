import { EmailField } from "@/components/molecules/email-field";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/EmailField",
  component: EmailField,
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
} satisfies Meta<typeof EmailField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
