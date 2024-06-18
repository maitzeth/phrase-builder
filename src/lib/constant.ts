import { z } from "zod";

export const VALIDATIONS_CONFIG = {
  phrase: {
    min: {
      value: 10,
      message: 'Debe tener al menos 10 caracteres'
    },
    max: {
      value: 100,
      message: 'Debe tener un maximo de 50 caracteres'
    },
  }
}

export const CREATE_PHRASE_BLUEPRINT = z.object({
  phrase: z
    .string({ message: 'Requerido' })
    .min(VALIDATIONS_CONFIG.phrase.min.value, VALIDATIONS_CONFIG.phrase.min.message)
    .max(VALIDATIONS_CONFIG.phrase.max.value, VALIDATIONS_CONFIG.phrase.max.message)
});


