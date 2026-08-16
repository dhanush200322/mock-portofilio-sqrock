# Personal Developer Portfolio — Architecture & System Design

## Overview
This repository contains the frontend implementation of a high-performance personal developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Design System & Palette
- **Background Primary**: `#04070D` (Deep void dark)
- **Background Secondary**: `#080E1A` (Navy dark surface)
- **Background Surface**: `#0D1627` (Card & modal surface)
- **Accent Primary**: `#4F8CFF` (Electric sapphire blue)
- **Accent Secondary**: `#9F5CFF` (Deep futuristic violet)
- **Text Primary**: `#F8FAFC` (Slate 50)
- **Text Secondary**: `#94A3B8` (Slate 400)
- **Text Muted**: `#64748B` (Slate 500)

## Directory Structure
```
personal-portfolio/
├── app/
│   ├── globals.css         # Design tokens, CSS variables, reduced motion
│   ├── layout.tsx          # Root shell, typography, SEO metadata, Navbar, Footer
│   ├── page.tsx            # Composition of portfolio sections
│   ├── not-found.tsx       # 404 handler
│   └── loading.tsx         # Streaming loading state
├── components/
│   ├── ui/                 # Reusable atomic UI (Button, Badge, Container, etc.)
│   ├── layout/             # Navbar, Footer
│   ├── hero/               # Hero & future 3D scene architecture
│   ├── about/              # Identity, biography, metrics
│   ├── skills/             # Categorized technical competencies
│   ├── projects/           # Featured artifacts & case studies
│   ├── experience/         # Career timeline
│   ├── education/          # Academic credentials & certifications
│   ├── contact/            # Interactive dialog & social triggers
│   └── resume/             # CV actions
├── data/                   # Decoupled mock & structured personal datasets
├── lib/                    # Utilities (cn) & Framer Motion animation presets
├── public/                 # Static assets (images, projects, resume)
└── types/                  # Strict TypeScript interfaces
```

## Motion Guidelines
- All animation variants reside in `lib/animations.ts`.
- Motion adheres strictly to `@media (prefers-reduced-motion: reduce)`.
- Step 2 will integrate the interactive 3D hero and scroll-driven kinematics.
