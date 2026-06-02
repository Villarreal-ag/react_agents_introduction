import { cuponesValidos } from '../data/mockData.js';

// Responsabilidad unica: resolver el cupon.
// Si el codigo existe, enriquece el pedido con `descuento`.
// Si NO existe, NO falla: devuelve una advertencia que el pipeline acumula
// pero que no detiene el flujo (diferencia clave con los demas agentes).

export function agenteCupon(input) {
  const cupon = cuponesValidos[input.cupon?.codigo];

  if (!cupon) {
    return { ok: true, valor: input, advertencia: 'Cupon ignorado' };
  }

  return { ok: true, valor: { ...input, descuento: { ...cupon } } };
}
