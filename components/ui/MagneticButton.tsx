'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  maxDisplacement?: number;
  className?: string;
  disabled?: boolean;
}

export function MagneticButton({
  children,
  strength = 0.3,
  maxDisplacement = 8,
  className = '',
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 16, stiffness: 160, mass: 0.12 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || isReducedMotion || e.pointerType === 'touch' || !ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const rawDeltaX = (e.clientX - centerX) * strength;
    const rawDeltaY = (e.clientY - centerY) * strength;

    // Clamp displacement to maximum safe threshold
    const clampedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, rawDeltaX));
    const clampedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, rawDeltaY));

    mouseX.set(clampedX);
    mouseY.set(clampedY);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (disabled || isReducedMotion) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
