import { BrandingLogo } from "@/components/atoms/branding-logo";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Atoms/BrandingLogo",
  component: BrandingLogo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BrandingLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
