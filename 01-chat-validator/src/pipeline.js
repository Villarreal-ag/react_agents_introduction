export function ejecutar(input, agentes) {
  let actual = input;
  const advertencias = [];

  for (const ag of agentes) {
    const r = ag(actual);

    if (r.advertencia) advertencias.push(r.advertencia);

    if (!r.ok) {
      return {
        ok: false,
        agente: r.agente,
        error: r.error,
        // dato parcial: ultimo estado conocido del dato antes del fallo
        parcial: actual,
        advertencias,
      };
    }

    actual = r.valor;
  }

  return { ok: true, resultado: actual, advertencias };
}
