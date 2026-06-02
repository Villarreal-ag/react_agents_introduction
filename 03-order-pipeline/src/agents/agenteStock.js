import { stockProductos } from '../data/mockData.js';

// Responsabilidad unica: validar stock suficiente.
// Verifica stockProductos[pedido.producto.id] >= pedido.cantidad.
// Si el producto no existe en el catalogo, cuenta como sin stock (0).

export function agenteStock(input) {
  const disponible = stockProductos[input.producto?.id] ?? 0;

  if (disponible < input.cantidad) {
    return { ok: false, agente: 'agenteStock', error: 'Sin stock suficiente' };
  }

  return { ok: true, valor: input };
}
