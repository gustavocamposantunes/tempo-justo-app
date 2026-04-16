import { LoginHeroPanel } from "@/components/organisms/login-hero-panel";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Organisms/LoginHeroPanel",
  component: LoginHeroPanel,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-dvh">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginHeroPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
