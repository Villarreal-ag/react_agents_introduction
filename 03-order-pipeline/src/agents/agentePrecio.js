// Responsabilidad unica: calcular subtotal y total.
// subtotal = producto.precio * cantidad.
// Aplica el descuento si agenteCupon lo agrego (porcentaje o fijo).

export function agentePrecio(input) {
  const subtotal = input.producto.precio * input.cantidad;
  let total = subtotal;

  if (input.descuento) {
    const { descuento, tipo } = input.descuento;
    if (tipo === 'porcentaje') {
      total = subtotal - (subtotal * descuento / 100);
    } else if (tipo === 'fijo') {
      total = subtotal - descuento;
    }
  }

  return { ok: true, valor: { ...input, subtotal, total } };
}
