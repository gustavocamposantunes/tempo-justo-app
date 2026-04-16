import { BrandingBlock } from "@/components/molecules/branding-block";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/BrandingBlock",
  component: BrandingBlock,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "brandPrimary",
      values: [{ name: "brandPrimary", value: "#1A4D8C" }],
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-105 p-10 text-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BrandingBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
