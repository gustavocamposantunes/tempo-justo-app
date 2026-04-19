import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  password: z
    .string()
    .min(1, "Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;
