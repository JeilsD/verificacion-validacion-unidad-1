# Acta de inspección individual — Unidad 1

## Modalidad y alcance

La actividad se realizó de forma individual mediante una inspección estática y estructurada del módulo. Se registraron los hallazgos con su evidencia, severidad, acción y estado, y se documentaron las decisiones tomadas. Los roles de autor, revisor y registrador se presentan solo como una simulación didáctica para organizar el ejercicio; no representan participantes reales. No intervino un revisor externo ni se hicieron comentarios reales en un pull request.

La inspección fue estática. No se ejecutaron pruebas funcionales. Como evidencia se usaron `evidencias/lint-inicial.txt`, `evidencias/lint-final.txt` y el código de `src/descuentos.js`.

## Hallazgos

| ID | Severidad | Evidencia | Acción propuesta o realizada | Estado |
|---|---|---|---|---|
| F-01 | Baja | En la versión inicial se usaba `var` para `descuento` y `total`. ESLint reportó `no-var`. | Se cambió a `let` y `const`, según si el valor se reasigna. | Resuelto |
| F-02 | Baja | La versión inicial comparaba `esVip == true`. ESLint reportó `eqeqeq`. | Se cambió a comparación estricta (`===`). | Resuelto |
| F-03 | Baja | Los `if` iniciales no tenían llaves. ESLint reportó `curly`. | Se añadieron llaves a ambos bloques. | Resuelto |
| F-04 | Alta | Cuando `porcentaje > 100`, el código muestra un mensaje, pero continúa calculando y puede devolver un total negativo. | Acordar qué debe ocurrir con porcentajes fuera del rango antes de cambiar la lógica. | Pendiente |
| F-05 | Media | Para clientes VIP se suma `10`, pero no se especifica si son unidades monetarias, puntos porcentuales u otro beneficio. | Confirmar la regla VIP con un ejemplo aprobado. | Pendiente |
| F-06 | Media | La función no define cómo tratar precio o porcentaje negativos, texto u otros valores inválidos. | Definir entradas válidas y el comportamiento ante errores. | Pendiente |
| F-07 | Media | El cálculo no establece moneda ni precisión o redondeo para importes decimales. | Acordar moneda y regla de redondeo antes de modificar el cálculo. | Pendiente |
| F-08 | Baja | La función escribe directamente en consola cuando el porcentaje supera 100. | Confirmar si el módulo debe registrar mensajes o devolver un error de forma controlada. | Pendiente |

## Comentarios técnicos simulados

**Comentario 1 — estilo:** La comparación no estricta y la falta de llaves pueden producir inconsistencias y dificultar la lectura.

**Respuesta simulada del autor:** Se aplicaron `===` y llaves; ESLint terminó sin errores.

**Comentario 2 — regla de negocio:** Mostrar “Descuento inválido” no impide que el cálculo continúe.

**Respuesta simulada del autor:** Se mantiene el comportamiento por ahora. La regla queda pendiente de confirmación para no inventar una política del negocio.

## Diferencia entre ESLint e inspección

ESLint detectó patrones configurados de estilo: `no-var`, `eqeqeq` y `curly`. La inspección manual permitió registrar dudas de negocio, como el beneficio VIP, los porcentajes fuera de rango, las entradas inválidas y el redondeo. ESLint no confirma por sí solo que esas reglas de negocio sean correctas.