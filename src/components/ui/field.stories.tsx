import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/UI/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-90">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="email">E-mail</FieldLabel>
      <FieldContent>
        <Input id="email" placeholder="voce@exemplo.com" />
        <FieldDescription>Informe o e-mail usado no cadastro.</FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field data-invalid>
      <FieldLabel htmlFor="password">Senha</FieldLabel>
      <FieldContent>
        <Input id="password" type="password" aria-invalid placeholder="••••••••" />
        <FieldError errors={[{ message: "A senha deve ter pelo menos 8 caracteres." }]} />
      </FieldContent>
    </Field>
  ),
};
