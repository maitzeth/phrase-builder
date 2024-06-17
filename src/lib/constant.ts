import { z } from "zod";

export const CREATE_PHRASE_BLUEPRINT = z.object({
  phrase: z
    .string()
    .min(2, 'La frase debe tener al menos 2 caracteres')
    .max(50, 'La frase debe tener un maximo de 50 caracteres'),
});

