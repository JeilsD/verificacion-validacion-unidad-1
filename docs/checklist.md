Checklist de inspección estática — Unidad 1

Objetivo: revisar requisitos y código antes de ejecutarlo. Marcar cada punto Sí/No/NA y enlazar evidencia. Una respuesta «No» debe generar observación o acuerdo de mejora.

## Requisitos
1. ¿Cada requisito identifica una condición observable y un resultado esperado?
2. ¿“Rápidamente” tiene umbral, carga y entorno de medición aprobados?
3. ¿La elegibilidad de cliente VIP está definida con criterios comprobables?
4. ¿El beneficio VIP indica valor, unidad y regla de acumulación?
5. ¿Se define qué es una promoción y cómo se informa al módulo?
6. ¿Se especifica si se permiten totales negativos durante promociones?
7. ¿“Mostrar” identifica el componente responsable y formato del resultado?
8. ¿Se define moneda, precisión y redondeo para importes?
9. ¿Se especifica el comportamiento para entradas negativas, no numéricas o porcentajes fuera de rango?
10. ¿Cada propuesta RF tiene criterio de aceptación y trazabilidad al requisito original?

## Código y análisis estático
11. ¿El código sigue las reglas acordadas para `var`, igualdad, variables no usadas y llaves?
12. ¿Hay condiciones que notifican un problema pero luego continúan con un cálculo inválido?
13. ¿Existen efectos secundarios (por ejemplo, `console.log`) no definidos por el contrato?
14. ¿La lógica VIP y el límite promocional corresponden a requisitos aprobados?
15. ¿Se separan los hallazgos reportados por ESLint de los hallazgos humanos?
16. ¿Las correcciones se limitan a reglas confirmadas y se conserva evidencia antes/después?

## Revisión por pares y trazabilidad
17. ¿Autor, revisor y registrador tienen responsabilidades identificables?
18. ¿Cada hallazgo tiene ID, severidad, evidencia, acción y estado?
19. ¿El resultado de revisión incluye desacuerdos, decisiones y pendientes?
20. ¿La matriz conecta requisito, riesgo, propuesta y artefacto verificable?

## Resultado
Inspección individual realizada el 13 de noviembre de 2026. Se registraron ocho hallazgos en `revision-individual.md`: tres de estilo corregidos tras ESLint y cinco reglas de negocio pendientes de confirmación.

Decisiones: corregir únicamente los patrones de estilo reportados por ESLint. Mantener pendientes los temas de porcentajes fuera de rango, beneficio VIP, entradas inválidas, redondeo y forma de informar errores hasta contar con reglas aprobadas. No participó un revisor externo.