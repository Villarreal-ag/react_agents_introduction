# react_agents_introduction

Ejercicios introductorios sobre el concepto de "agentes" como pipeline de validación en React + Vite.

> Aclaración: en este repo "agente" significa **función con responsabilidad única que valida o transforma un dato dentro de un pipeline**. No es un agente LLM.

## Estructura

Cada carpeta es una app React independiente. Se instala y corre por separado.

| # | Carpeta | Nivel | Tema |
|---|---|---|---|
| 1 | [`01-chat-validator`](./01-chat-validator) | Básico | Validador de mensaje de chat (string) |
| 2 | [`02-user-signup`](./02-user-signup) | Medio | Validador de registro de usuario (JSON plano) |
| 3 | [`03-order-pipeline`](./03-order-pipeline) | Avanzado | Validador de pedido de e-commerce (JSON anidado) |

## Cómo correr cualquiera

```bash
cd 01-chat-validator   # o 02-user-signup, o 03-order-pipeline
npm install
npm run dev
```

## Convenciones compartidas

Cada agente cumple esta forma:

```js
export function agenteX(input) {
  if (falla) return { ok: false, agente: 'agenteX', error: 'mensaje' };
  return { ok: true, valor: inputTransformado };
}
```

El pipeline (`src/pipeline.js`) encadena agentes y se detiene en el primer `ok: false`, excepto para advertencias no fatales (ver ejercicio 3).

## Videos

| Ejercicio | Link |
|---|---|
| 01 — Chat validator | _pendiente_ |
| 02 — User signup | _pendiente_ |
| 03 — Order pipeline | _pendiente_ |
