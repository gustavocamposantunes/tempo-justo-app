import { MarketplaceHeader } from "@/components/organisms/marketplace-header";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Organisms/MarketplaceHeader",
  component: MarketplaceHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MarketplaceHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
