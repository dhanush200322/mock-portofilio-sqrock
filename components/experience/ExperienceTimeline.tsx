'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experienceData } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  // Scroll kinematics for timeline illumination
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 1. Vertical Progress Line (Desktop & Mobile) */}
      <div className="absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-[2px] bg-white/[0.08] pointer-events-none">
        {/* Active Illuminated Beam */}
        <motion.div
          style={{
            scaleY: isReducedMotion ? 1 : scaleY,
            transformOrigin: 'top',
          }}
          className="w-full h-full bg-gradient-to-b from-[#4F8CFF] via-[#9F5CFF] to-[#38BDF8] shadow-[0_0_12px_rgba(79,140,255,0.8)]"
        />
      </div>

      {/* 2. Timeline Experience Items List */}
      <div className="space-y-12 sm:space-y-16 pl-10 sm:pl-16 md:pl-24">
        {experienceData.map((exp) => {
          return (
            <div key={exp.id} className="relative">
              {/* Timeline Glowing Milestone Node */}
              <div className="absolute -left-10 sm:-left-16 md:-left-24 top-8 -translate-x-1/2 flex items-center justify-center">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#080E1A] border-2 flex items-center justify-center transition-colors duration-300 z-10 shadow-lg ${
                    exp.current
                      ? 'border-emerald-400 shadow-emerald-500/30'
                      : 'border-[#4F8CFF] shadow-[#4F8CFF]/20'
                  }`}
                >
                  <div
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                      exp.current
                        ? 'bg-emerald-400 animate-pulse'
                        : 'bg-[#4F8CFF]'
                    }`}
                  />
                </div>
              </div>

              {/* Experience Card */}
              <ExperienceCard experience={exp} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
