// Datos mock para simular una base de datos.
// Usados por los agentes de validacion del pedido.

export const usuariosValidos = [
  { id: 1, nombre: 'Ana Torres' },
  { id: 2, nombre: 'Luis Ramos' },
];

export const stockProductos = {
  42: 5,   // id 42 -> 5 unidades en stock
  99: 0,   // id 99 -> sin stock
};

export const cuponesValidos = {
  DESC10: { descuento: 10, tipo: 'porcentaje' },
  FLAT5: { descuento: 5, tipo: 'fijo' },
};
