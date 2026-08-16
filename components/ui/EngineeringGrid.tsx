'use client';

import React from 'react';

interface EngineeringGridProps {
  opacity?: number;
  showLabels?: boolean;
  labelPosition?: 'top' | 'bottom' | 'both';
  className?: string;
}

export function EngineeringGrid({
  opacity = 0.15,
  showLabels = true,
  labelPosition = 'both',
  className = '',
}: EngineeringGridProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern"
        style={{ opacity }}
      />

      {/* Subtle Coordinate Lines & Ticks */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 8" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 8" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 8" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 8" />
      </svg>

      {/* Sparse Engineering Telemetry Labels */}
      {showLabels ? (
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between text-[9px] font-mono text-[#64748B]/40 uppercase tracking-widest pointer-events-none">
          {(labelPosition === 'top' || labelPosition === 'both') && (
            <div className="flex items-center justify-between">
              <span>SYS_01 // RUNTIME_ACTIVE</span>
              <span className="hidden sm:inline">LATENCY // 18ms</span>
              <span>NODE_04 // EDGE_STREAM</span>
            </div>
          )}

          {(labelPosition === 'bottom' || labelPosition === 'both') && (
            <div className="flex items-center justify-between">
              <span>PIPELINE // VERIFIED</span>
              <span className="hidden sm:inline">CORE // NEXT.JS 16</span>
              <span>STATE // DETERMINISTIC</span>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
