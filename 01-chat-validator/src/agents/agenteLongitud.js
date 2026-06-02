// Responsabilidad unica: validar la longitud.
// input es un string (ya formateado por el agente anterior).
// Debe tener entre 3 y 100 caracteres.

export function agenteLongitud(input) {
  const longitud = input.length;

  if (longitud < 3 || longitud > 100) {
    return {
      ok: false,
      agente: 'agenteLongitud',
      error: `El mensaje debe tener entre 3 y 100 caracteres (tiene ${longitud}).`,
    };
  }

  return { ok: true, valor: input };
}