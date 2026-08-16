# Contact & Resume Experience Architecture

This document details the architecture, real-time availability status, contact card kinematics, collaboration pathways, and resume handling powering the **Contact & Resume** sections in `personal-portfolio`.

---

## 1. Architectural Overview

```text
components/contact/
├── Contact.tsx             # Master Section container (#contact)
├── AvailabilityStatus.tsx  # Live opportunity availability pill with pulse & response time indicator
├── ContactCard.tsx         # 3D spring-tilt interactive contact card with direct email dispatch trigger
├── ContactOptions.tsx      # Verified direct communication channels (Email, LinkedIn, GitHub, Resume)
├── ConversionPath.tsx      # 3 structured collaboration routes (Full-Time, Contracting, AI Automation)
└── ProjectStarter.tsx      # Interactive intent dispatcher generating pre-encoded mailto parameters

components/resume/
├── ResumeCTA.tsx           # Master Section container (#resume) with executive summary & download actions
└── ResumePreview.tsx       # Structured document sheet preview of core experience and education
```

---

## 2. Real Communication & Dispatch Strategy

- **100% Frontend Only**: Zero backend dependencies, no database, and no fake contact form claiming to store messages.
- **Pre-Encoded Mailto Templates**:
  - `ProjectStarter.tsx` lets recruiters and clients choose an intent (`Build a Web Platform`, `Build an AI / RAG System`, `Automate a Workflow`).
  - Selecting an intent dynamically formats subject lines and body templates using `encodeURIComponent` before launching their native email client.
- **External Channels**: Direct, verified links to LinkedIn (`linkedin.com/in/dhanush-dev`) and GitHub (`github.com/dhanush-dev`) with `rel="noopener noreferrer"`.

---

## 3. Resume Handling

- **Document Location**: `/resume/dhanush-resume.pdf` (referenced in `personalProfile.resumeUrl`).
- **Interactive Dual-Column Experience**:
  - **Left**: `ResumePreview.tsx` renders a structured, high-tech resume sheet featuring developer summary, production experience milestones, and academic distinction honors.
  - **Right**: Executive summary with instant `View Full Resume` (opens new tab) and `Download PDF` triggers.

---

## 4. Responsive Design & Accessibility

- **Mobile Viewports (320px – 430px)**:
  - Cards and contact channels stack vertically.
  - Touch targets exceed 44x44px.
  - Zero horizontal overflow.
- **Accessibility**:
  - Semantic section landmarks (`<section id="contact">`, `<section id="resume">`).
  - Heading hierarchy: `<h2>` section headings, `<h3>` subheadings, `<h5>` channel cards.
  - Full `@media (prefers-reduced-motion: reduce)` support via `useReducedMotion()`.
