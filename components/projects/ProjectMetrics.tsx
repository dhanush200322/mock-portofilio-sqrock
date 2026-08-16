'use client';

import React from 'react';
import { ProjectMetric } from '@/types';
import { Activity } from 'lucide-react';

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  accentColor?: string;
}

export function ProjectMetrics({
  metrics,
  accentColor = '#4F8CFF',
}: ProjectMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-3.5 h-3.5" style={{ color: accentColor }} />
        <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold">
          Verified System Metrics
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="p-3 rounded-xl bg-[#080E1A]/80 border border-white/[0.06] hover:border-white/15 transition-colors flex flex-col justify-center text-left"
          >
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider truncate">
              {metric.label}
            </span>
            <span
              className="text-xs sm:text-sm font-bold font-mono text-[#F8FAFC] mt-0.5 truncate"
              style={{ color: accentColor }}
            >
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
