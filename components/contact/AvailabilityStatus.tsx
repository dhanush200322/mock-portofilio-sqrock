'use client';

import React from 'react';
import { contactData } from '@/data/contact';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { Clock } from 'lucide-react';

export function AvailabilityStatus() {
  const isReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 select-none">
      {/* 1. Live Availability Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md shadow-xs">
        <span className="relative flex h-2 w-2">
          <span
            className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${
              !isReducedMotion ? 'animate-ping' : ''
            }`}
          />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wide">
          {contactData.availabilityLabel.toUpperCase()}
        </span>
      </div>

      {/* 2. Response Time Telemetry Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#080E1A] border border-white/10 text-xs font-mono text-[#94A3B8] shadow-xs">
        <Clock className="w-3.5 h-3.5 text-[#4F8CFF]" />
        <span>Response Time: {contactData.responseTime}</span>
      </div>
    </div>
  );
}
