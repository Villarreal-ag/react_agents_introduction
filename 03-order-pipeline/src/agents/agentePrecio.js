// TODO: implementar
// - input es el pedido (puede traer `descuento` agregado por agenteCupon, o no)
// - calcular: subtotal = producto.precio * cantidad
// - aplicar descuento si existe:
//     - tipo 'porcentaje' -> total = subtotal - (subtotal * descuento / 100)
//     - tipo 'fijo'        -> total = subtotal - descuento
// - retornar { ok: true, valor: { ...input, subtotal, total } }

export function agentePrecio(input) {
  return { ok: false, agente: 'agentePrecio', error: 'Sin implementar' };
}
