'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function ScrollProgress() {
  const isReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  if (isReducedMotion) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="w-full h-full bg-gradient-to-r from-[#4F8CFF] via-[#9F5CFF] to-[#38BDF8] shadow-[0_0_12px_rgba(79,140,255,0.8)]"
      />
    </div>
  );
}
