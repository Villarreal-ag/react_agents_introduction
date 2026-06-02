import { cuponesValidos } from '../data/mockData.js';

// TODO: implementar
// - input es el pedido completo
// - buscar pedido.cupon.codigo en cuponesValidos
// - si existe: agregar pedido.descuento = { descuento: X, tipo: 'porcentaje'|'fijo' }
//   y retornar { ok: true, valor: { ...input, descuento: ... } }
// - si NO existe: NO falla el pipeline. Retorna:
//   { ok: true, valor: input, advertencia: 'Cupon ignorado' }
//   Esto es lo distinto de los otros agentes: una advertencia que el pipeline acumula
//   pero NO detiene el flujo.

export function agenteCupon(input) {
  return { ok: false, agente: 'agenteCupon', error: 'Sin implementar' };
}
