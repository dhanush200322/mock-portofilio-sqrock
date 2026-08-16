# Services & What I Build Architecture

This document details the architecture, service taxonomy, capability matrix, stack visualizer, and 5-stage build methodology powering the **Services / What I Build** section in `personal-portfolio`.

---

## 1. Architectural Overview

```text
components/services/
├── Services.tsx          # Master Section container (#services) & active service state coordinator
├── ServiceSelector.tsx   # Interactive domain tabs (Frontend, Full Stack, AI/RAG, Automation, Product Engineering)
├── ServiceDetail.tsx     # Comprehensive domain detail panel (Overview, Capabilities, Deliverables, Tech, Artifacts)
├── CapabilityMatrix.tsx  # Qualitative engineering capability evaluation table (zero fake percentages)
├── StackVisualizer.tsx   # Interactive SVG architecture topology map connecting 6 technical domains
├── BuildProcess.tsx      # Systematic 5-stage engineering lifecycle (Discover → Architect → Build → Validate → Deploy)
└── ServicesCTA.tsx       # Conversion call to action routing to #contact and #projects
```

---

## 2. Service Offerings Taxonomy

Defined in `types/index.ts` and populated in `data/services.ts`:

1. **01 — Frontend & Interactive Systems Engineering**
   - *Core*: React 19, Next.js 16 App Router, TypeScript, Tailwind CSS, Framer Motion, Canvas 2D, Zustand
   - *Capabilities*: Streaming Server Components, Design Token Systems, 60fps UX, Sub-0.8s FCP, Accessible ARIA
   - *Demonstrated in*: `Food Delivery Platform`, `Node Graph Canvas`, `Multi-Vendor Marketplace`
2. **02 — Full Stack & Distributed Platform Development**
   - *Core*: Node.js, Express REST, PostgreSQL, Prisma ORM, Redis Cache, WebSockets, JWT Auth, Docker
   - *Capabilities*: Multi-tenant schema isolation, atomic database transactions, Stripe split payouts, event multiplexing
   - *Demonstrated in*: `Food Delivery Platform`, `Multi-Vendor Marketplace`, `Freelancing Platform`
3. **03 — AI / RAG & Context-Augmented Systems**
   - *Core*: Vercel AI SDK, pgvector, LangChain, Semantic Embeddings, Vector Search, Node.js Edge Runtimes
   - *Capabilities*: Document chunking pipelines, hybrid BM25 re-ranking, streaming token AST markdown parsing, autonomous tool calling
   - *Demonstrated in*: `AI / RAG Agent Platform`
4. **04 — Workflow Automation & Event Integration**
   - *Core*: n8n Pipelines, Webhook Ingestion, REST APIs, Cron Triggers, Docker Containers
   - *Capabilities*: Self-healing error recovery, multi-stage data serialization, automated CRM/database syncing routines
   - *Demonstrated in*: `Food Delivery Platform`, `Freelancing Platform`
5. **05 — Systems Architecture & Product Engineering**
   - *Core*: Docker Containers, Vercel Edge, Render, RxJS Streams, Hardware Canvas 2D, Web Workers
   - *Capabilities*: Off-main-thread Web Worker serialization, 60 FPS Canvas plotting of 100k+ telemetry metrics, edge caching
   - *Demonstrated in*: `Cloud Observability Cockpit`, `Node Graph Canvas`

---

## 3. Qualitative Capability Matrix

Zero arbitrary numeric scores or fake progress bars. Evaluates technical depth through qualitative tiers:
- **Core Mastery**: Frontend Architecture, Full Stack Runtimes, Event Streams
- **Advanced**: PostgreSQL / Relational Schemas, pgvector RAG, n8n Automation Pipelines
- **Working Knowledge**: Containerized Docker Deployments, Edge Serverless Infrastructure

---

## 4. Interactive Stack Visualizer & Build Process

- **StackVisualizer**: Dynamic SVG architecture topology connecting the central engineering hub to 6 peripheral domain nodes with animated data highway lines (`animate-[dash_1.5s_linear_infinite]`).
- **BuildProcess**: 5-stage engineering lifecycle:
  1. `01 DISCOVER` (Requirements, constraints, latency targets)
  2. `02 ARCHITECT` (Relational schema, component trees, API contracts)
  3. `03 BUILD` (Strictly-typed implementation, 60fps UX)
  4. `04 VALIDATE` (Automated tests, accessibility, 99+ Core Web Vitals)
  5. `05 DEPLOY` (Edge CDNs, containerized runtime, monitoring)

---

## 5. Responsive Behavior & Accessibility

- **Mobile Viewports (320px – 430px)**:
  - Horizontal touch-scrollable domain selector with hidden scrollbars.
  - Stacked detail panels with touch-friendly tap targets (> 44px).
  - Constellation visualizer scales responsively with zero clipping.
- **Accessibility & SEO**:
  - Full ARIA tablist semantics (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`).
  - Semantic heading hierarchy (`<h2>` for section, `<h3>` for service domains, `<h5>` for subsystem titles).
  - Complete `@media (prefers-reduced-motion: reduce)` support via `useReducedMotion()`.
