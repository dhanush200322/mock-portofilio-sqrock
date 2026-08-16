# Visual Engineering & Master Polish Architecture

This document details the visual engineering philosophy, 3D graphics pipeline, mouse parallax physics, scroll choreography, magnetic interactions, and reduced-motion strategies in `personal-portfolio`.

---

## 1. Visual Philosophy & Design System

The portfolio is designed as an interactive **Developer Universe / Systems Cockpit**:
- **Palette**: `#04070D` (Dark Space Void), `#4F8CFF` (Electric Azure), `#9F5CFF` (Deep Violet), `#38BDF8` (Cyan Neon), `#10B981` (Emerald Telemetry).
- **Materiality**: Soft frosted glass cards (`backdrop-blur-xl`, `border-white/10`), dynamic cursor radial sheens, and coordinate telemetry markings.
- **Continuous Scroll Storytelling**:
  - `Hero`: "I build systems." (3D geometric nucleus, orbiting nodes, mouse camera lerping)
  - `About`: "Here's how I think." (Layered parallax typography stream & 3D identity card)
  - `Skills`: "Here's what I use." (Constellation topology & qualitative competency matrix)
  - `Projects`: "Here's what I've built." (Cockpit browser previews & SVG architecture pipelines)
  - `Experience`: "Here's where I've applied it." (Scroll-illuminated timeline beam & evolution paradigms)
  - `Education`: "Here's the foundation." (Editorial 2021—2025 trajectory & academic distinction)
  - `Services`: "Here's what I can build for you." (Interactive domain switcher & SVG stack visualizer)
  - `Contact`: "Let's build something useful." (3D spring contact card, intent dispatcher & resume preview)

---

## 2. Reusable Visual Components

```text
components/ui/
├── ScrollProgress.tsx    # GPU-accelerated top-of-viewport 2.5px spring scroll progress bar
├── CustomCursor.tsx      # Minimal dot + spring trailing aura ring with interactive element expansion
├── MagneticButton.tsx    # Proximity cursor pull with spring physics and touch/reduced-motion guards
├── SectionReveal.tsx     # Reusable viewport reveal animations (fade, slideUp, scale, blur)
└── EngineeringGrid.tsx   # Subtle HUD grid overlay with coordinates and sparse technical labels
```

---

## 3. 3D Graphics & Parallax Kinematics

- **Isolated WebGL Engine (`HeroScene.tsx`)**:
  - Procedural wireframe icosahedron cage with additive glowing vertex nodes.
  - Inner counter-rotating octahedron nucleus.
  - Concentric orbital rings with 6 real-time orbiting data nodes.
  - 100-particle ambient constellation drifting in 3D space.
  - Damped mouse parallax camera tracking via `requestAnimationFrame`.
  - Dynamic scroll progress scaling (`scrollProgress` prop) that smoothly scales and recedes the 3D scene into the About section without abrupt cutoffs.
- **Zero WebGL Bloat**: Three.js is strictly confined to the Hero. All subsequent sections leverage lightweight SVG paths, CSS transforms, and Framer Motion springs for guaranteed 60fps performance.

---

## 4. Magnetic & Cursor Interactions

- **`MagneticButton`**: Calculates normalized offset from button center, clamps displacement to safe bounds (6–10px), and applies spring damping (`stiffness: 160, damping: 16`). Automatically disabled on touch screens and `prefers-reduced-motion`.
- **`CustomCursor`**: Tracks pointer using `MotionValue` and `useSpring` with zero React re-render cycles. Expands (1.6x) and blooms azure/violet when hovering `a`, `button`, or `[role="tab"]`. Automatically deactivated on touch and small screens (< 768px).

---

## 5. Accessibility & Reduced Motion

- **`useReducedMotion()` Integration**:
  - When `@media (prefers-reduced-motion: reduce)` is detected:
    - 3D WebGL scenes fall back to an elegant static 2D vector geometry.
    - Custom cursor and magnetic displacement are disabled.
    - Scroll progress bar is hidden.
    - All complex animations simplify to clean opacity fades.
- **Focus Rings**: Fully keyboard navigatable with visible `:focus-visible` rings across all interactive tabs, modals, and buttons.
