import { z } from "zod";

export const VALIDATIONS_CONFIG = {
  phrase: {
    min: {
      value: 2,
      message: 'La frase debe tener al menos 2 caracteres'
    },
    max: {
      value: 50,
      message: 'La frase debe tener un maximo de 50 caracteres'
    },
  }
}

export const CREATE_PHRASE_BLUEPRINT = z.object({
  phrase: z
    .string()
    .min(VALIDATIONS_CONFIG.phrase.min.value, VALIDATIONS_CONFIG.phrase.min.message)
    .max(VALIDATIONS_CONFIG.phrase.max.value, VALIDATIONS_CONFIG.phrase.max.message),
});


