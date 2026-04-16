import { Separator } from "@/components/ui/separator";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/UI/Separator",
  component: Separator,
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
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-12 items-center gap-4">
      <span>A</span>
      <Separator {...args} />
      <span>B</span>
    </div>
  ),
};
