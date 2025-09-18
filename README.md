# Layered Monolith Orders API

**Arquitectura:** Layered (Monolith) — presentación (HTTP) → aplicación (casos de uso) → dominio (entidades/reglas) → infraestructura (repos/persistencia).

## Objetivo

Servicio de pedidos con líneas y cupones, CRUD básico, paginación y validaciones. Foco en reglas de dominio claras (invariantes), casos de uso orquestando flujos y controladores HTTP livianos.

## Decisiones iniciales (bootstrap)

- **Runtime:** Node 22.x (LTS) · **Gestor:** npm
- **HTTP:** Fastify · **Lenguaje:** TypeScript
- **Tests:** Jest con proyectos `unit` y `e2e` (sufijos `*.unit.test.ts` / `*.e2e.test.ts`)
- **Calidad:** ESLint + Prettier · **Hooks:** Husky + lint-staged
  > Nota: En este commit inicial **solo** se documenta el plan; el código de bootstrap llegará en un PR técnico aparte.

## Estructura por capas (prevista)

src/ # código y tests co-located

presentation/ # controladores HTTP, validación superficial (DTOs)

application/ # casos de uso; puertos hacia repos

domain/ # entidades/servicios de dominio; invariantes

infrastructure/ # implementación de repos, migraciones, mapeos

## Flujo de trabajo

1. **main** estable.
2. Ramas por issue/PR (ej.: `chore/bootstrap-node22-fastify-jest`).
3. PRs con CI (lint + tests). Hooks locales: pre-commit (format/lint/tests relacionados) y pre-push (suite completa).

## Próximos pasos

- PR técnico: bootstrap Node 22 + TS + Fastify + Jest + Husky, endpoint `/health` y CI.
- Primera US: crear pedido (cálculo `subtotal/discount/total`, invariantes).

## Licencia

MIT (por decidir).
