// Responsabilidad unica: normalizar el texto.
// Quita espacios al inicio/fin (trim) y pasa todo a minusculas.

export function agenteFormateo(input) {
  if (typeof input !== 'string') {
    return { ok: false, agente: 'agenteFormateo', error: 'El input debe ser un string' };
  }

  const textoLimpio = input.trim().toLowerCase();
  return { ok: true, valor: textoLimpio };
}
