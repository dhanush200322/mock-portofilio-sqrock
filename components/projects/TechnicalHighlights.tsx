'use client';

import React from 'react';
import { TechnicalDecision } from '@/types';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TechnicalHighlightsProps {
  highlights: TechnicalDecision[];
  accentColor?: string;
}

export function TechnicalHighlights({
  highlights,
  accentColor = '#4F8CFF',
}: TechnicalHighlightsProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-4 h-4" style={{ color: accentColor }} />
        <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold">
          Key Engineering Decisions
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map((item) => (
          <div
            key={item.number}
            className="glass-card rounded-2xl p-4 sm:p-5 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Header with Monospace Index */}
              <div className="flex items-center justify-between mb-2.5">
                <span
                  className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#080E1A] border border-white/10"
                  style={{ color: accentColor }}
                >
                  DECISION {item.number}
                </span>
              </div>

              {/* Title */}
              <h5 className="text-xs sm:text-sm font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-2">
                {item.title}
              </h5>

              {/* Decision Statement */}
              <p className="text-xs text-[#CBD5E1] font-medium leading-relaxed mb-2.5">
                {item.decision}
              </p>

              {/* Engineering Rationale */}
              <div className="flex items-start gap-2 pt-2.5 border-t border-white/[0.06] text-xs text-[#94A3B8] leading-relaxed">
                <CheckCircle2
                  className="w-3.5 h-3.5 shrink-0 mt-0.5"
                  style={{ color: accentColor }}
                />
                <span>{item.rationale}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
