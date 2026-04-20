import { IdeaBoardPageTemplate } from "@/components/templates/idea-board-page-template";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Templates/IdeaBoardPageTemplate",
  component: IdeaBoardPageTemplate,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof IdeaBoardPageTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
