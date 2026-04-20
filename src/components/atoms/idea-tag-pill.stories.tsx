import { IdeaTagPill } from "@/components/atoms/idea-tag-pill";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Atoms/IdeaTagPill",
  component: IdeaTagPill,
  parameters: {
    layout: "centered",
  },
  args: {
    tag: "Educação",
  },
} satisfies Meta<typeof IdeaTagPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
