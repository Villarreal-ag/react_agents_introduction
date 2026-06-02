// Responsabilidad unica: validar y normalizar el email.
// Debe tener formato usuario@dominio.tld. Normaliza a minusculas.
// Transforma el objeto con spread (no muta el original).

export function agenteEmail(input) {
  const email = String(input.email ?? '').trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, agente: 'agenteEmail', error: 'El email debe tener formato usuario@dominio.tld.' };
  }

  return { ok: true, valor: { ...input, email } };
}
