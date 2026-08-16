'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function CustomCursor() {
  const isReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.15 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports fine hover pointer (desktop/laptop with mouse/trackpad)
    const isFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    if (!isFinePointer || isReducedMotion) {
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouch(false);

    const handlePointerMove = (e: PointerEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = Boolean(
        target.closest('a, button, [role="button"], [role="tab"], input, textarea, select, .cursor-pointer')
      );
      setIsHovered(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mouseover', handlePointerOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isReducedMotion, isVisible]);

  if (isTouch || isReducedMotion || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* Trailing Aura Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(79, 140, 255, 0.7)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(79, 140, 255, 0.08)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-8 h-8 rounded-full border border-white/25 backdrop-blur-[0.5px]"
      />

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? '#4F8CFF' : '#F8FAFC',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(79,140,255,0.8)]"
      />
    </div>
  );
}
