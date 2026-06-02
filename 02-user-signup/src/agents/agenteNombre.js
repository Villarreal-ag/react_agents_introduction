// Responsabilidad unica: validar el nombre.
// No puede estar vacio y solo admite letras (incluye acentos/n) y espacios.
// No transforma el objeto: si pasa, devuelve el input tal cual.

export function agenteNombre(input) {
  const nombre = String(input.nombre ?? '').trim();

  if (nombre === '') {
    return { ok: false, agente: 'agenteNombre', error: 'El nombre no puede estar vacio.' };
  }

  if (!/^[\p{L}\s]+$/u.test(nombre)) {
    return { ok: false, agente: 'agenteNombre', error: 'El nombre solo puede contener letras y espacios.' };
  }

  return { ok: true, valor: input };
}
