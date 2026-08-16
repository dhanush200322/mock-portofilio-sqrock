# Projects Architecture & Case Study Engineering

This document details the architecture, data models, animation principles, and accessibility standards powering the **Project Showcase** in `personal-portfolio`.

---

## 1. Architectural Overview

The project showcase is engineered as a cinematic, editorial, interactive presentation:

```text
components/projects/
├── Projects.tsx            # Master Section container (#projects) & active state manager
├── ProjectCategoryNav.tsx  # Domain filtering tabs (All, Full Stack, Frontend, AI/RAG, Systems, Automation)
├── ProjectSpotlight.tsx    # Editorial centerpiece with metadata, preview, and quick actions
├── ProjectPreview.tsx      # Interactive 3D spring-tilt browser window with cursor light reflection
├── ArchitectureFlow.tsx    # Lightweight SVG system pipeline flow (Client → Gateway → Engine → Storage)
├── TechnicalHighlights.tsx # Factual engineering decisions & technical trade-offs
├── ProjectMetrics.tsx      # Verified technical attributes & telemetry pills (zero vanity metrics)
├── ProjectRail.tsx         # Horizontal project switcher for instant artifact jumping
├── TechnologyMatrix.tsx    # Cross-portfolio technology synthesis matrix
└── CaseStudyPanel.tsx      # Full-screen modal / drawer deep dive with 8-part breakdown & prev/next nav
```

---

## 2. Project Data Model

Defined in `types/index.ts` and populated in `data/projects.ts`:

- **Identification**: `id`, `slug`, `title`, `shortTitle`, `category`, `categories[]`, `year`, `projectType`, `status`, `featured`, `accent`.
- **Narrative**: `shortDescription`, `description`, `problem`, `solution`, `role`.
- **Stack Taxonomy**: `stack[]`, `frontend[]`, `backend[]`, `database[]`, `infrastructure[]`, `aiTechnologies[]`.
- **System Architecture**: `architecture[]` (`step`, `title`, `tech`, `description`).
- **Engineering Decisions**: `technicalHighlights[]` (`number`, `title`, `decision`, `rationale`).
- **Telemetry**: `metrics[]` (`label`, `value`).
- **Links**: `liveUrl?`, `githubUrl?`.

---

## 3. Interaction & Animation Kinematics

1. **3D Spring Tilt**:
   - `ProjectPreview.tsx` utilizes Framer Motion springs (`stiffness: 160`, `damping: 22`, `mass: 0.15`).
   - Pointer coordinates determine local light sheen position (`radial-gradient`) and subtle rotational pitch.
   - Automatically disabled on touch screens and when `prefers-reduced-motion: reduce` is enabled.
2. **Dynamic Project Transitions**:
   - `AnimatePresence` manages smooth opacity and vertical translation when switching active projects or categories.
3. **No WebGL Contention**:
   - Three.js is strictly isolated to the Hero. All project diagrams use lightweight SVG and CSS hardware acceleration.

---

## 4. Case Study System

When **"View Case Study"** is activated:
- Opens `CaseStudyPanel.tsx` in a full-screen drawer dialog.
- 8 structured engineering sections:
  1. Overview & Context
  2. The Engineering Challenge (Problem Statement)
  3. Engineered Solution
  4. System Architecture Flow
  5. Comprehensive Technology Stack Breakdown
  6. Delivered Feature Matrix
  7. Key Engineering Decisions & Trade-Offs
  8. Verified System Metrics & Performance
- Supports keyboard navigation (`Escape` closes dialog, `Tab` focuses controls).
- Previous / Next navigation cycles through case studies without page reloads.
- Body scroll is locked during inspection and restored on close.

---

## 5. Responsive Behavior

- **Desktop (1024px – 1440px+)**: Dual-column spotlight (editorial details on left, 3D interactive preview on right) with horizontal project registry rail.
- **Tablet (768px – 1023px)**: Adaptive grid with preserved typography and touch-optimized navigation.
- **Mobile (320px – 430px)**: Stacked layout with horizontal touch-scrollable category navigation, full-width preview frame, and zero layout shift.

---

## 6. Accessibility & Compliance

- Semantic HTML (`<h2>` for section, `<h3>` for project headings, `<button>` for actions).
- Full ARIA conformance (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `role="tablist"`).
- Visible `:focus-visible` rings on all interactive elements.
- Strict reduced-motion fallback via `useReducedMotion()`.
