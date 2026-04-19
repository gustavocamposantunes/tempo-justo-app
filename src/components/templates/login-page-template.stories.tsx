import { LoginPageTemplate } from "@/components/templates/login-page-template";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Templates/LoginPageTemplate",
  component: LoginPageTemplate,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoginPageTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
