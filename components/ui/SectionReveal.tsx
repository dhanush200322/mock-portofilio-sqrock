'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

type RevealVariant = 'fade' | 'slideUp' | 'scale' | 'blur';

interface SectionRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
}

const variantMap: Record<RevealVariant, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
};

export function SectionReveal({
  children,
  variant = 'slideUp',
  delay = 0,
  duration = 0.55,
  className = '',
  id,
}: SectionRevealProps) {
  const isReducedMotion = useReducedMotion();

  if (isReducedMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const selectedVariants = variantMap[variant] || variantMap.slideUp;

  return (
    <motion.div
      id={id}
      variants={selectedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
