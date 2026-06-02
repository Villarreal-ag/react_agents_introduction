import { stockProductos } from '../data/mockData.js';

// TODO: implementar
// - input es el pedido completo
// - verificar que stockProductos[pedido.producto.id] >= pedido.cantidad
// - si pasa: { ok: true, valor: input }
// - si no hay stock suficiente o no existe el producto:
//   { ok: false, agente: 'agenteStock', error: 'Sin stock suficiente' }

export function agenteStock(input) {
  return { ok: false, agente: 'agenteStock', error: 'Sin implementar' };
}
