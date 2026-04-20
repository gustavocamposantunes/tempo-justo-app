import { CreateUserPageTemplate } from "@/components/templates/create-user-page-template";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Templates/CreateUserPageTemplate",
  component: CreateUserPageTemplate,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            <Story />
          </CookiesProvider>
        </QueryClientProvider>
      );
    },
  ],
} satisfies Meta<typeof CreateUserPageTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
