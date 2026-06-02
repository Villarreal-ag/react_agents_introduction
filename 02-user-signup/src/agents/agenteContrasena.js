// Responsabilidad unica: validar la contrasena.
// Minimo 8 caracteres. No transforma el objeto.

export function agenteContrasena(input) {
  const contrasena = String(input.contrasena ?? '');

  if (contrasena.length < 8) {
    return { ok: false, agente: 'agenteContrasena', error: 'Minimo 8 caracteres' };
  }

  return { ok: true, valor: input };
}
