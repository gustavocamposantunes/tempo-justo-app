import { IdeaPostCard } from "@/components/organisms/idea-post-card";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Organisms/IdeaPostCard",
  component: IdeaPostCard,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Aulas de violão",
    description: "Aprenda do básico até técnicas de dedilhado e acompanhamento.",
    tag: "Educação",
    author: "Ricardo Silva",
    timeLabel: "2 horas",
    colorClassName: "bg-[linear-gradient(135deg,#C17A3C_0%,#7D4B28_45%,#3F2A1D_100%)]",
  },
} satisfies Meta<typeof IdeaPostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTimeIcon: Story = {
  args: {
    showTimeIcon: true,
  },
};
