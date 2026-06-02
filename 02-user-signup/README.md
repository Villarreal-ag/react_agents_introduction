# 02 — Validador de registro de usuario

Nivel: **medio**.
Input: un **objeto JSON plano** con `nombre`, `email`, `fechaNac`, `contrasena`.

## Pipeline

```
usuario -> agenteNombre -> agenteEmail -> agenteEdad -> agenteContrasena -> resultado
```

| # | Agente | Que hace |
|---|---|---|
| 1 | `agenteNombre` | Verifica que el nombre no este vacio y solo tenga letras y espacios. |
| 2 | `agenteEmail` | Valida que tenga `@` y un dominio. **Normaliza a minusculas** y devuelve el objeto modificado. |
| 3 | `agenteEdad` | Calcula la edad desde `fechaNac`, **agrega el campo `edad`** al objeto, y verifica que sea mayor o igual a 18. |
| 4 | `agenteContrasena` | Verifica que tenga al menos 8 caracteres. |

## Como correr

```bash
npm install
npm run dev
```

## Casos a probar

| Input (cambios sobre el default) | Esperado |
|---|---|
| Default (`contrasena: "abc"`) | `ok: false`, agente fallido: `agenteContrasena`. Email ya viene normalizado y `edad` ya calculada. |
| `contrasena: "MiClave123"` | `ok: true`, email normalizado, edad calculada. |
| `nombre: "Ana123"` | `ok: false`, agente fallido: `agenteNombre`. |
| `fechaNac: "2020-01-01"` | `ok: false`, agente fallido: `agenteEdad` (menor de 18). |

## Concepto clave del nivel

Los agentes ya no solo validan: **transforman el dato** y pasan la version modificada al siguiente. Usa spread (`{ ...input, campo: nuevo }`) para no mutar el original.

## Evidencia

Video de funcionalidad: _pendiente_.
