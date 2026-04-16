import { Label } from "@/components/ui/label";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "E-mail",
    htmlFor: "email",
  },
  render: (args) => (
    <div className="space-y-2">
      <Label {...args} />
      <input id="email" className="w-90 rounded-md border px-3 py-2" placeholder="voce@exemplo.com" />
    </div>
  ),
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
