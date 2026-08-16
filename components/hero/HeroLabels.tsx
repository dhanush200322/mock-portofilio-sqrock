'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroLabelsProps {
  mouseX?: number;
  mouseY?: number;
}

interface TechnicalLabel {
  id: string;
  name: string;
  category: string;
  position: string; // Tailwind positioning classes
  delay: number;
  duration: number;
  accentColor: string; // e.g. '#4F8CFF' or '#9F5CFF' or '#38BDF8'
}

const labels: TechnicalLabel[] = [
  {
    id: 'l-nextjs',
    name: 'Next.js 16 • App Router',
    category: 'Architecture',
    position: 'top-8 left-4 lg:-left-6',
    delay: 0,
    duration: 5,
    accentColor: '#4F8CFF',
  },
  {
    id: 'l-typescript',
    name: 'TypeScript • Strict Types',
    category: 'Core',
    position: 'top-20 right-4 lg:-right-4',
    delay: 0.8,
    duration: 6,
    accentColor: '#38BDF8',
  },
  {
    id: 'l-ai',
    name: 'AI / RAG Orchestration',
    category: 'Intelligence',
    position: 'bottom-28 -left-2 lg:-left-8',
    delay: 1.4,
    duration: 5.5,
    accentColor: '#9F5CFF',
  },
  {
    id: 'l-motion',
    name: '60 FPS Hardware Motion',
    category: 'Performance',
    position: 'bottom-12 right-2 lg:-right-6',
    delay: 2.1,
    duration: 6.5,
    accentColor: '#10B981',
  },
];

export function HeroLabels({ mouseX = 0, mouseY = 0 }: HeroLabelsProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-20 hidden sm:block"
      aria-hidden="true"
    >
      {labels.map((item, index) => {
        // Individual parallax depth multiplier for each label
        const parallaxFactor = (index + 1) * 6;
        const offsetX = mouseX * parallaxFactor;
        const offsetY = mouseY * parallaxFactor;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
            style={{
              x: offsetX,
              y: offsetY,
            }}
            className={`absolute ${item.position}`}
          >
            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotate: [-0.5, 0.5, -0.5],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: item.delay,
              }}
              className="glass-card px-3 py-1.5 rounded-xl border border-white/10 shadow-lg shadow-black/30 backdrop-blur-md flex items-center gap-2"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 shadow-xs"
                style={{ backgroundColor: item.accentColor }}
              />
              <div className="flex flex-col">
                <span className="text-[11px] font-mono font-medium text-[#F8FAFC] tracking-tight">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono text-[#64748B] uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
