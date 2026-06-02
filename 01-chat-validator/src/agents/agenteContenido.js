// Responsabilidad unica: detectar un saludo.
// Busca las palabras hola, hi o hey (como palabra completa, no dentro de otra).
// Se asume que input ya viene en minusculas.

export function agenteContenido(input) {
  const tieneSaludo = /\b(hola|hi|hey)\b/.test(input);

  if (!tieneSaludo) {
    return { ok: false, agente: 'agenteContenido', error: 'Sin saludo detectado' };
  }

  return { ok: true, valor: { texto: input, saludo: true } };
}
