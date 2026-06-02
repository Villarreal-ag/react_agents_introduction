// Agente especial: NO va dentro del pipeline. Se llama despues de ejecutar(...)
// con el resultado completo, y SIEMPRE corre (haya fallado o no).
// Su trabajo es consolidar todo en una estructura final legible.
//
// Entrada: lo que devuelve ejecutar(...):
//   exito  -> { ok: true, resultado, advertencias }
//   fallo  -> { ok: false, agente, error, parcial, advertencias }

export function agenteReporte(resultadoPipeline) {
  const { ok, resultado, parcial, agente, error, advertencias = [] } = resultadoPipeline;

  // pedido enriquecido si paso; si no, el ultimo estado conocido antes del fallo
  const pedido = resultado ?? parcial ?? null;
  const errores = ok ? [] : [{ agente, error }];

  const resumen = ok
    ? `Pedido valido. Subtotal: ${pedido.subtotal}, total: ${pedido.total}.`
    : `Pedido rechazado por ${agente}: ${error}.`;

  return { ok, pedido, errores, advertencias, resumen };
}
