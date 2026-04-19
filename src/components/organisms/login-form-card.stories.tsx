import { LoginFormCard } from "@/components/organisms/login-form-card";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Organisms/LoginFormCard",
  component: LoginFormCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            <div className="min-h-dvh bg-brand-ice p-8 lg:p-0">
              <Story />
            </div>
          </CookiesProvider>
        </QueryClientProvider>
      );
    },
  ],
} satisfies Meta<typeof LoginFormCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
