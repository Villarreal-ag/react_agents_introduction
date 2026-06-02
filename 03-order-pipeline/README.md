# 03 — Validador de pedido de e-commerce

Nivel: **avanzado**.
Input: un **JSON anidado** con `usuario`, `producto`, `cantidad`, `cupon`.

## Pipeline

```
pedido -> agenteUsuario -> agenteStock -> agenteCupon -> agentePrecio --> agenteReporte -> salida
                                                                ^                ^
                                                          si alguno              siempre
                                                          falla, el              corre
                                                          pipeline               aunque
                                                          se detiene             haya fallado
```

| # | Agente | Que hace |
|---|---|---|
| 1 | `agenteUsuario` | Busca `pedido.usuario.id` en `usuariosValidos`. Falla si no existe. |
| 2 | `agenteStock` | Verifica que `stockProductos[pedido.producto.id] >= pedido.cantidad`. |
| 3 | `agenteCupon` | Busca `pedido.cupon.codigo` en `cuponesValidos`. Si existe, agrega `pedido.descuento`. Si no existe, **agrega una advertencia (no falla)**. |
| 4 | `agentePrecio` | Calcula `subtotal = producto.precio * cantidad`, aplica descuento si aplica, devuelve `subtotal` y `total`. |
| 5 | `agenteReporte` | **Siempre se ejecuta**. Consolida ok/no ok, pedido enriquecido, errores y advertencias en una sola salida. |

## Como correr

```bash
npm install
npm run dev
```

La UI muestra un textarea con el pedido en JSON. Edita el JSON, pulsa **Validar pedido** y observa el reporte final.

## Casos a probar

| Input (cambios sobre el default) | Esperado |
|---|---|
| Default (`cupon DESC10`, `producto 42`, `cantidad 2`) | `ok: true`, `subtotal: 100`, `descuento: 10%`, `total: 90`. |
| `cupon.codigo: "NOVALIDO"` | `ok: true`, `total: 100`. **Advertencia**: "Cupon ignorado". |
| `producto.id: 99` (sin stock) | `ok: false`, agente fallido: `agenteStock`. Reporte lo refleja. |
| `usuario.id: 999` (no existe) | `ok: false`, agente fallido: `agenteUsuario`. |

## Datos mock

Estan en `src/data/mockData.js`: lista de usuarios validos, stock por producto y cupones validos.

## Conceptos clave del nivel

- **JSON anidado**: navegar con `pedido.producto.precio`, `pedido.cupon.codigo`, etc.
- **Enriquecimiento**: los agentes agregan campos nuevos (`subtotal`, `total`, `descuento`).
- **Error fatal vs advertencia**: cupon invalido es advertencia (no detiene); sin stock es fatal.
- **Reporte final**: un agente que corre fuera del flujo principal para consolidar.

## Detalle de implementacion: agenteReporte

`agenteReporte` no se ejecuta dentro del pipeline normal — se llama **despues** de `ejecutar(...)` desde `App.jsx`, pasandole el resultado completo. Esa es la diferencia: los agentes 1-4 estan en la cadena; `agenteReporte` observa la cadena entera.

## Evidencia

Video de funcionalidad: _pendiente_.
