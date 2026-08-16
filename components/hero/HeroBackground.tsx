'use client';

import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface HeroBackgroundProps {
  mouseX?: number;
  mouseY?: number;
}

export function HeroBackground({ mouseX = 0, mouseY = 0 }: HeroBackgroundProps) {
  // Smooth spring damping for the ambient background glow movement
  const springX = useSpring(mouseX * 40, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY * 40, { stiffness: 45, damping: 25 });

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Base Dark Void Surface */}
      <div className="absolute inset-0 bg-[#04070D]" />

      {/* Layer 1: Subtle High-Tech Coordinate Grid with Mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_20%,transparent_80%)]"
      />

      {/* Layer 2: Primary Electric Sapphire Radial Glow (Center-Right) */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-[#4F8CFF]/12 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Layer 3: Secondary Futuristic Violet Radial Glow (Bottom-Left) */}
      <motion.div
        style={{
          x: useTransform(springX, (val) => -val * 0.7),
          y: useTransform(springY, (val) => -val * 0.7),
        }}
        className="absolute bottom-10 left-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#9F5CFF]/10 rounded-full blur-[140px] mix-blend-screen"
      />

      {/* Layer 4: Cyan Subtle Horizon Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#4F8CFF]/20 to-transparent" />

      {/* Layer 5: Bottom Vignette Fade into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#04070D] via-[#04070D]/80 to-transparent" />
    </div>
  );
}
