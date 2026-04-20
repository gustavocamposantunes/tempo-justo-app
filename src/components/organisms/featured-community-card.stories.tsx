import { FeaturedCommunityCard } from "@/components/organisms/featured-community-card";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Organisms/FeaturedCommunityCard",
  component: FeaturedCommunityCard,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Mutirão de reconstrução comunitária",
    description:
      "Participe do nosso projeto de revitalização da Praça das Flores. Buscamos voluntários para pintura e jardinagem.",
    rewardLabel: "5+",
    participantsLabel: "+12 pessoas inscritas",
  },
} satisfies Meta<typeof FeaturedCommunityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
