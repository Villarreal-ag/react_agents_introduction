import { useState } from 'react';
import { ejecutar } from './pipeline.js';
import { agenteFormateo } from './agents/agenteFormateo.js';
import { agenteLongitud } from './agents/agenteLongitud.js';
import { agenteContenido } from './agents/agenteContenido.js';

const AGENTES = [agenteFormateo, agenteLongitud, agenteContenido];

export default function App() {
  const [mensaje, setMensaje] = useState('  Hola! soy ANA  ');
  const [resultado, setResultado] = useState(null);

  function correr() {
    setResultado(ejecutar(mensaje, AGENTES));
  }

  return (
    <main style={{ padding: 24, maxWidth: 720, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 4 }}>01 — Validador de mensaje de chat</h1>
      <p style={{ color: '#555', marginTop: 0 }}>
        Pipeline: <code>agenteFormateo</code> → <code>agenteLongitud</code> → <code>agenteContenido</code>.
      </p>

      <label>
        Mensaje a validar:
        <input
          style={{ width: '100%', padding: 8, marginTop: 4 }}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </label>

      <button onClick={correr} style={{ marginTop: 16, padding: '8px 16px' }}>
        Validar
      </button>

      {resultado && (
        <pre style={{ background: '#1c1c1c', color: '#e8e4dc', padding: 16, marginTop: 16, borderRadius: 6 }}>
          {JSON.stringify(resultado, null, 2)}
        </pre>
      )}
    </main>
  );
}
