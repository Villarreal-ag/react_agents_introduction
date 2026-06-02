// TODO: implementar
// - input es el objeto usuario con campo `email`
// - validar que contenga @ y un dominio (algo despues del @)
// - NORMALIZAR a minusculas
// - si pasa: { ok: true, valor: { ...input, email: emailEnMinusculas } }
// - si falla: { ok: false, agente: 'agenteEmail', error: 'mensaje claro' }
// - usa spread para NO mutar el original

export function agenteEmail(input) {
  return { ok: false, agente: 'agenteEmail', error: 'Sin implementar' };
}
