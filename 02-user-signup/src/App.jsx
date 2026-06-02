import { useState } from 'react';
import { ejecutar } from './pipeline.js';
import { agenteNombre } from './agents/agenteNombre.js';
import { agenteEmail } from './agents/agenteEmail.js';
import { agenteEdad } from './agents/agenteEdad.js';
import { agenteContrasena } from './agents/agenteContrasena.js';

const AGENTES = [agenteNombre, agenteEmail, agenteEdad, agenteContrasena];

const INPUT_INICIAL = {
  nombre: 'Ana Torres',
  email: 'ANA@CORREO.COM',
  fechaNac: '2000-03-15',
  contrasena: 'abc',
};

export default function App() {
  const [usuario, setUsuario] = useState(INPUT_INICIAL);
  const [resultado, setResultado] = useState(null);

  function setCampo(k, v) {
    setUsuario({ ...usuario, [k]: v });
  }

  function correr() {
    setResultado(ejecutar(usuario, AGENTES));
  }

  return (
    <main style={{ padding: 24, maxWidth: 720, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 4 }}>02 — Validador de registro de usuario</h1>
      <p style={{ color: '#555', marginTop: 0 }}>
        Pipeline: <code>agenteNombre</code> → <code>agenteEmail</code> → <code>agenteEdad</code> → <code>agenteContrasena</code>.
      </p>

      <label>
        Nombre:
        <input style={{ width: '100%', padding: 8, marginTop: 4 }}
          value={usuario.nombre} onChange={(e) => setCampo('nombre', e.target.value)} />
      </label>

      <label>
        Email:
        <input style={{ width: '100%', padding: 8, marginTop: 4 }}
          value={usuario.email} onChange={(e) => setCampo('email', e.target.value)} />
      </label>

      <label>
        Fecha de nacimiento (YYYY-MM-DD):
        <input style={{ width: '100%', padding: 8, marginTop: 4 }}
          value={usuario.fechaNac} onChange={(e) => setCampo('fechaNac', e.target.value)} />
      </label>

      <label>
        Contrasena:
        <input style={{ width: '100%', padding: 8, marginTop: 4 }}
          value={usuario.contrasena} onChange={(e) => setCampo('contrasena', e.target.value)} />
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
