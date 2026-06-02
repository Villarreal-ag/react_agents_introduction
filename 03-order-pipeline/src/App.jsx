import { useState } from 'react';
import { ejecutar } from './pipeline.js';
import { agenteUsuario } from './agents/agenteUsuario.js';
import { agenteStock } from './agents/agenteStock.js';
import { agenteCupon } from './agents/agenteCupon.js';
import { agentePrecio } from './agents/agentePrecio.js';
import { agenteReporte } from './agents/agenteReporte.js';

const AGENTES_PRINCIPALES = [agenteUsuario, agenteStock, agenteCupon, agentePrecio];

const INPUT_INICIAL = {
  usuario: { id: 1, nombre: 'Ana Torres' },
  producto: { id: 42, nombre: 'Zapatos', precio: 50 },
  cantidad: 2,
  cupon: { codigo: 'DESC10', tipo: 'porcentaje' },
};

export default function App() {
  const [json, setJson] = useState(JSON.stringify(INPUT_INICIAL, null, 2));
  const [resultado, setResultado] = useState(null);
  const [errorParseo, setErrorParseo] = useState(null);

  function correr() {
    setErrorParseo(null);
    let pedido;
    try {
      pedido = JSON.parse(json);
    } catch (e) {
      setErrorParseo('JSON invalido: ' + e.message);
      return;
    }

    const r = ejecutar(pedido, AGENTES_PRINCIPALES);
    // agenteReporte siempre se ejecuta, aun si el pipeline fallo
    const reporte = agenteReporte(r);
    setResultado(reporte);
  }

  return (
    <main style={{ padding: 24, maxWidth: 720, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 4 }}>03 — Validador de pedido de e-commerce</h1>
      <p style={{ color: '#555', marginTop: 0 }}>
        Pipeline: <code>agenteUsuario</code> → <code>agenteStock</code> → <code>agenteCupon</code> → <code>agentePrecio</code>, y al final siempre corre <code>agenteReporte</code>.
      </p>

      <label>
        Pedido (JSON):
        <textarea
          style={{ width: '100%', padding: 8, marginTop: 4, minHeight: 200, fontFamily: 'monospace' }}
          value={json}
          onChange={(e) => setJson(e.target.value)}
        />
      </label>

      <button onClick={correr} style={{ marginTop: 16, padding: '8px 16px' }}>
        Validar pedido
      </button>

      {errorParseo && (
        <p style={{ color: '#c0392b', marginTop: 12 }}>{errorParseo}</p>
      )}

      {resultado && (
        <pre style={{ background: '#1c1c1c', color: '#e8e4dc', padding: 16, marginTop: 16, borderRadius: 6 }}>
          {JSON.stringify(resultado, null, 2)}
        </pre>
      )}
    </main>
  );
}
