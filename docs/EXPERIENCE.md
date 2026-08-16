# Experience, Education & Career Journey Architecture

This document details the architecture, data models, animation principles, and accessibility standards powering the **Experience & Education** sections in `personal-portfolio`.

---

## 1. Architectural Overview

```text
components/experience/
├── Experience.tsx          # Master Section container (#experience)
├── ExperienceTimeline.tsx  # Scroll-progress illuminated vertical timeline with glowing milestone nodes
├── ExperienceCard.tsx      # Editorial experience card with 5 structured sections and connected project links
├── CareerEvolution.tsx     # Visual progression across 5 engineering paradigms (Frontend → Automation)
└── TechnologyJourney.tsx   # Evolutionary technology trajectory (Foundations → AI & Automation)

components/education/
├── Education.tsx           # Master Section container (#education)
└── EducationBridge.tsx     # Theory-to-practice transition nexus from computer science foundations to production AI systems
```

---

## 2. Experience & Education Data Models

Defined in `types/index.ts` and populated in `data/experience.ts` and `data/education.ts`:

### Experience Model
- **Core Fields**: `id`, `company`, `role`, `location`, `type`, `startDate`, `endDate`, `duration`, `current`, `companyUrl?`.
- **Narrative & Impact**: `description`, `responsibilities[]`, `achievements[]`.
- **Taxonomy & Integration**: `technologies[]`, `projects[]` (Connected project IDs from `data/projects.ts`).

### Education Model
- **Core Fields**: `id`, `institution`, `degree`, `field`, `location?`, `startDate`, `endDate`, `duration?`, `current?`, `grade?`.
- **Narrative & Focus**: `description`, `highlights[]`, `technologies?`.

---

## 3. Interaction & Animation Kinematics

1. **Scroll-Driven Timeline Illumination**:
   - `ExperienceTimeline.tsx` tracks container scroll offset using Framer Motion `useScroll()` and `useSpring()`.
   - The vertical beam (`scaleY`) dynamically illuminates from electric blue (`#4F8CFF`) through violet (`#9F5CFF`) to sky blue (`#38BDF8`).
   - Does not hijack native browser scrolling.
2. **Current Role Indicator**:
   - Features an emerald pulse indicator (`CURRENT ● ACTIVE`) with zero layout shift.
   - Automatically respects `@media (prefers-reduced-motion: reduce)`.
3. **Experience / Project Cross-Linkage**:
   - Connected project badges in `ExperienceCard.tsx` smoothly scroll to `#projects` without page reloads.

---

## 4. Career Evolution & Technology Trajectory

- **CareerEvolution**: 5 progressive phases:
  1. `Modern Frontend` (React 19, Next.js 16, TypeScript, Tailwind CSS, Framer Motion)
  2. `Full Stack & APIs` (Node.js, Express REST, WebSockets, PostgreSQL, Prisma)
  3. `Systems & Cloud` (Redis Caching, Docker Containers, Vercel Edge, Row-Level Security)
  4. `AI & RAG Engines` (pgvector, Semantic Embeddings, Vercel AI SDK, Token Stream AST)
  5. `Workflow Automation` (n8n Pipelines, Webhook Ingestion, Cron Agents, API Connectors)
- **EducationBridge**: Visual 4-stage bridge from Academic CS Core to Autonomous AI Systems.

---

## 5. Responsive Design & Accessibility

- **Mobile Viewports (320px – 430px)**:
  - Timeline transforms into a left-aligned vertical beam.
  - Cards stack cleanly with zero horizontal overflow.
  - Tap targets exceed 44x44px.
- **Accessibility & SEO**:
  - Semantic landmark sections (`<section id="experience">`, `<section id="education">`).
  - Strict heading hierarchy (`<h2>` for section titles, `<h3>` for roles and degrees).
  - All interactive badges and anchor links provide visible `:focus-visible` states.
  - Complete `@media (prefers-reduced-motion: reduce)` support via `useReducedMotion()`.
