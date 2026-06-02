# 01 — Validador de mensaje de chat

Nivel: **basico**.
Input: un **string**.

## Pipeline

```
mensaje -> agenteFormateo -> agenteLongitud -> agenteContenido -> resultado
```

| # | Agente | Que hace |
|---|---|---|
| 1 | `agenteFormateo` | Quita espacios al inicio/fin y pasa todo a minusculas. |
| 2 | `agenteLongitud` | Verifica que el mensaje tenga entre 3 y 100 caracteres. |
| 3 | `agenteContenido` | Detecta si contiene un saludo: `hola`, `hi`, `hey`. |

## Como correr

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`). Modifica el mensaje, pulsa **Validar** y observa la respuesta JSON.

## Casos a probar

| Input | Esperado |
|---|---|
| `"  Hola! soy ANA  "` | `ok: true`, `texto: "hola! soy ana"`, `saludo: true` |
| `"  AB  "` | `ok: false`, agente fallido: `agenteLongitud` |
| `"buenas tardes"` | `ok: false`, agente fallido: `agenteContenido` |

## Objetivos de aprendizaje

- Entender que un agente tiene **una sola responsabilidad**.
- Encadenar agentes: el output de uno es el input del siguiente.
- Detener el pipeline ante el primer `ok: false`.

## Evidencia

Video de funcionalidad: _pendiente_.
