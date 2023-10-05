import { z } from "zod";

export const UsuarioPostSchema = z.object({
  id_usuario: z.number(),
  nome: z.string().min(10, "O nome deve possuir pelo menos 10 caracteres"),
  email: z.string().email(),
  senha: z.string(),
  admin: z.boolean(),
});

export const UsuarioPutSchema = z.object({
  nome: z
    .string()
    .min(10, "O nome deve possuir pelo menos 10 caracteres")
    .optional(),
  email: z.string().email().optional(),
  senha: z.string().optional(),
  admin: z.boolean().optional(),
});

export type UsuarioPostType = z.infer<typeof UsuarioPostSchema>;
export type UsuarioPutType = z.infer<typeof UsuarioPutSchema>;
