import { IdeaTimeBadge } from "@/components/atoms/idea-time-badge";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Atoms/IdeaTimeBadge",
  component: IdeaTimeBadge,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "2 horas",
  },
} satisfies Meta<typeof IdeaTimeBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    showIcon: true,
    label: "1.5 hora",
  },
};
