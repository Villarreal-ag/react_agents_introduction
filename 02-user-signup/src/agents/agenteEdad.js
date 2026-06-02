// Responsabilidad unica: calcular la edad y validar mayoria de edad.
// fechaNac viene como YYYY-MM-DD. Agrega el campo `edad` al objeto (spread).
// Falla si es menor de 18.

export function agenteEdad(input) {
  const partes = String(input.fechaNac ?? '').split('-').map(Number);

  if (partes.length !== 3 || partes.some(Number.isNaN)) {
    return { ok: false, agente: 'agenteEdad', error: 'La fecha de nacimiento debe tener formato YYYY-MM-DD.' };
  }

  const [anio, mes, dia] = partes;
  const hoy = new Date();

  let edad = hoy.getFullYear() - anio;
  const difMes = (hoy.getMonth() + 1) - mes;
  if (difMes < 0 || (difMes === 0 && hoy.getDate() < dia)) {
    edad--;
  }

  if (edad < 18) {
    return { ok: false, agente: 'agenteEdad', error: `Debe ser mayor o igual a 18 anios (tiene ${edad}).` };
  }

  return { ok: true, valor: { ...input, edad } };
}
