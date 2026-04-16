import { BrandingWordmark } from "@/components/atoms/branding-wordmark";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Atoms/BrandingWordmark",
  component: BrandingWordmark,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "brandPrimary",
      values: [
        { name: "brandPrimary", value: "#1A4D8C" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
} satisfies Meta<typeof BrandingWordmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
