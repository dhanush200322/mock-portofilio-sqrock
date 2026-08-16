'use client';

import React from 'react';
import { ArchitectureNode } from '@/types';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ChevronRight, ArrowDown, Cpu } from 'lucide-react';

interface ArchitectureFlowProps {
  architecture: ArchitectureNode[];
  accentColor?: string;
}

export function ArchitectureFlow({
  architecture,
  accentColor = '#4F8CFF',
}: ArchitectureFlowProps) {
  const isReducedMotion = useReducedMotion();

  if (!architecture || architecture.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <Cpu className="w-4 h-4" style={{ color: accentColor }} />
        <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold">
          System Architecture Flow
        </span>
      </div>

      {/* Architecture Pipeline Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
        {architecture.map((node, index) => {
          const isLast = index === architecture.length - 1;

          return (
            <div key={node.step} className="relative flex flex-col justify-between">
              {/* Step Card */}
              <div className="glass-card rounded-2xl p-4 border border-white/[0.08] hover:border-white/20 transition-colors h-full flex flex-col justify-between group">
                <div>
                  {/* Step indicator header */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#04070D] border border-white/10"
                      style={{ color: accentColor }}
                    >
                      STAGE {node.step}
                    </span>
                  </div>

                  {/* Title & Technology */}
                  <h5 className="text-xs font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-1">
                    {node.title}
                  </h5>

                  <span
                    className="text-[11px] font-mono block font-medium mb-2 truncate"
                    style={{ color: accentColor }}
                  >
                    {node.tech}
                  </span>

                  {/* Optional Description */}
                  {node.description ? (
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                      {node.description}
                    </p>
                  ) : null}
                </div>

                {/* Subtle pulse bottom line */}
                <div
                  className={`mt-3 h-0.5 w-full rounded-full ${
                    !isReducedMotion ? 'group-hover:animate-pulse' : ''
                  }`}
                  style={{ backgroundColor: `${accentColor}40` }}
                />
              </div>

              {/* Desktop arrow connector */}
              {!isLast ? (
                <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#080E1A] border border-white/10 items-center justify-center text-[#64748B] pointer-events-none">
                  <ChevronRight className="w-3 h-3" />
                </div>
              ) : null}

              {/* Mobile down connector */}
              {!isLast ? (
                <div className="flex md:hidden items-center justify-center my-1 text-[#64748B]">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
