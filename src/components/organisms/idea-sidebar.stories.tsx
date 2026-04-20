import { GraduationCap, HandCoins, HeartPulse, Utensils, Wrench } from "lucide-react";

import { IdeaSidebar } from "@/components/organisms/idea-sidebar";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Organisms/IdeaSidebar",
  component: IdeaSidebar,
  parameters: {
    layout: "centered",
  },
  args: {
    categories: [
      { label: "Educação", icon: <GraduationCap className="size-4" /> },
      { label: "Saúde e Bem-estar", icon: <HeartPulse className="size-4" /> },
      { label: "Reparos Domésticos", icon: <Wrench className="size-4" /> },
      { label: "Economia Solidária", icon: <HandCoins className="size-4" /> },
      { label: "Alimentos", icon: <Utensils className="size-4" /> },
    ],
  },
} satisfies Meta<typeof IdeaSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
