import { CreateUserPageTemplate } from "@/components/templates/create-user-page-template";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Templates/CreateUserPageTemplate",
  component: CreateUserPageTemplate,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CreateUserPageTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
