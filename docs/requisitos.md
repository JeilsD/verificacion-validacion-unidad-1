Requisitos y trazabilidad — Unidad 1

Contexto: auditoría estática previa a la ejecución del módulo JavaScript de descuentos. No se realizan pruebas funcionales.

| ID | Problema | Impacto | Propuesta verificable | Artefacto | Estado |
|---|---|---|---|---|---|
| R-01 / RF-01 | «Rápidamente» carece de métrica, carga y entorno. | Sin criterio objetivo de aceptación. | Provisionalmente, cálculo de entradas válidas en menos de 100 ms en entorno acordado; se medirá en una prueba de rendimiento aparte. | Rendimiento | Umbral y entorno por confirmar. |
| R-02 / RF-02 | No define quién es VIP, valor, unidad del 10 ni acumulación. | Puede cobrar un precio incorrecto. | Aplicar el beneficio solo tras aprobar elegibilidad y política VIP; no fijar el valor hasta aclarar si es porcentaje, importe u otra regla. | Regla VIP | Bloqueado por decisión de negocio. |
| R-03 / RF-03 | No define promoción ni cómo se representa en la función. | El descuento ordinario puede superar el precio y producir total negativo. | En operación ordinaria, descuento total entre 0 y el precio inclusive. La excepción requiere regla promocional aprobada y explícita. | Regla de límite | Promoción y excepción por confirmar. |
| R-04 / RF-04 | No define fórmula, moneda, redondeo, errores ni dónde mostrarlo. | Diferencia entre valor calculado, mostrado y cobrado. | Con entradas y reglas aprobadas, devolver un número finito igual a precio menos descuento aplicado; la UI lo presenta con formato aprobado. | Módulo/UI | Moneda, precisión, redondeo y errores por confirmar. |

Trazabilidad: R-01→RF-01 rendimiento; R-02→RF-02 VIP; R-03→RF-03 límite y promociones; R-04→RF-04 cálculo y presentación. Estas son propuestas, no aprobaciones.

Decisión preventiva: VIP y promociones son las ambigüedades más costosas porque afectan directamente el precio cobrado. Deben acordarse reglas y ejemplos antes de cambiar lógica. ESLint detecta patrones configurados, pero no valida reglas de negocio.