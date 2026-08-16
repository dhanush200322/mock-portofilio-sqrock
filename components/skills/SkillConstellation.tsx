'use client';

import React from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function SkillConstellation() {
  const isReducedMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-25"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="constellationGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Network Nodes */}
        <g stroke="rgba(79, 140, 255, 0.18)" strokeWidth="0.75" strokeDasharray="3 4">
          <line x1="10%" y1="20%" x2="25%" y2="45%" />
          <line x1="25%" y1="45%" x2="45%" y2="15%" />
          <line x1="45%" y1="15%" x2="70%" y2="35%" />
          <line x1="70%" y1="35%" x2="85%" y2="20%" />
          <line x1="25%" y1="45%" x2="35%" y2="80%" />
          <line x1="35%" y1="80%" x2="60%" y2="70%" />
          <line x1="60%" y1="70%" x2="70%" y2="35%" />
          <line x1="60%" y1="70%" x2="90%" y2="85%" />
        </g>

        {/* Small Data Points */}
        <circle cx="10%" cy="20%" r="2" fill="#4F8CFF" />
        <circle cx="25%" cy="45%" r="3" fill="#38BDF8" className={!isReducedMotion ? 'animate-pulse' : ''} />
        <circle cx="45%" cy="15%" r="2.5" fill="#9F5CFF" />
        <circle cx="70%" cy="35%" r="3" fill="#4F8CFF" className={!isReducedMotion ? 'animate-pulse' : ''} />
        <circle cx="85%" cy="20%" r="2" fill="#38BDF8" />
        <circle cx="35%" cy="80%" r="2.5" fill="#9F5CFF" />
        <circle cx="60%" cy="70%" r="3" fill="#10B981" className={!isReducedMotion ? 'animate-pulse' : ''} />
        <circle cx="90%" cy="85%" r="2" fill="#4F8CFF" />
      </svg>
    </div>
  );
}
