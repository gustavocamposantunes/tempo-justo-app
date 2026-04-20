import { IdeaAuthorInfo } from "@/components/molecules/idea-author-info";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Molecules/IdeaAuthorInfo",
  component: IdeaAuthorInfo,
  parameters: {
    layout: "centered",
  },
  args: {
    author: "Ricardo Silva",
  },
} satisfies Meta<typeof IdeaAuthorInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
