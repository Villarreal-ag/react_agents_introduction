import { usuariosValidos } from '../data/mockData.js';

// Responsabilidad unica: validar que el usuario exista.
// Busca pedido.usuario.id en usuariosValidos. No transforma el pedido.

export function agenteUsuario(input) {
  const existe = usuariosValidos.some((u) => u.id === input.usuario?.id);

  if (!existe) {
    return { ok: false, agente: 'agenteUsuario', error: 'Usuario no registrado' };
  }

  return { ok: true, valor: input };
}
