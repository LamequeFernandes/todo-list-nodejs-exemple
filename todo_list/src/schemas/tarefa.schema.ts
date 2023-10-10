import { z } from "zod";

export const TaskPostSchema = z.object({
  status: z.enum(["A_FAZER", "EM_ANDAMENTO", "CONCLUIDA"]),
  titulo: z.string(),
  detalhes: z.string().optional(),
});

export type TaskPostType = z.infer<typeof TaskPostSchema>;
export type StatusTask = "A_FAZER" | "EM_ANDAMENTO" | "CONCLUIDA";
