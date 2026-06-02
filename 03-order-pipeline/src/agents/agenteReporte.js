// TODO: implementar
// - este agente recibe el RESULTADO del pipeline, no un pedido directo
// - SIEMPRE se ejecuta, aunque el pipeline haya fallado antes
// - su trabajo es consolidar el resultado final en una sola estructura legible
//
// Entrada: el objeto que devuelve `ejecutar(...)` desde pipeline.js
//   { ok, resultado?, agente?, error?, advertencias }
//
// Salida sugerida (no es un agente "normal", no usa { ok, valor }):
//   {
//     ok: true | false,
//     pedido: <pedido enriquecido si paso, o el ultimo estado conocido>,
//     errores: [ { agente, error } ] | [],
//     advertencias: [...],
//     resumen: 'texto corto que explique que paso'
//   }

export function agenteReporte(resultadoPipeline) {
  return {
    ok: false,
    pedido: null,
    errores: [{ agente: 'agenteReporte', error: 'Sin implementar' }],
    advertencias: [],
    resumen: 'agenteReporte aun no esta implementado',
  };
}
