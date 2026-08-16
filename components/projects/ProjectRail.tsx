'use client';

import React from 'react';
import { Project } from '@/types';
import { Terminal, ChevronRight } from 'lucide-react';

interface ProjectRailProps {
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (project: Project) => void;
}

export function ProjectRail({
  projects,
  activeProjectId,
  onSelectProject,
}: ProjectRailProps) {
  return (
    <div className="w-full mt-12 pt-8 border-t border-white/[0.08]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#4F8CFF]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold">
            Interactive Project Registry
          </span>
        </div>
        <span className="text-xs font-mono text-[#64748B]">
          {projects.length} System Artifacts
        </span>
      </div>

      {/* Horizontal Project Rail Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 select-none">
        {projects.map((proj, idx) => {
          const isActive = proj.id === activeProjectId;
          const formattedNum = (idx + 1).toString().padStart(2, '0');

          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => onSelectProject(proj)}
              aria-label={`Select ${proj.title}`}
              aria-pressed={isActive}
              className={`p-3.5 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500 relative overflow-hidden group ${
                isActive
                  ? 'bg-[#121E36] border-2 scale-[1.02] shadow-xl'
                  : 'bg-[#080E1A]/80 border border-white/[0.06] hover:border-white/20 hover:bg-[#0D1627]'
              }`}
              style={{
                borderColor: isActive ? proj.accent : undefined,
                boxShadow: isActive ? `0 0 25px ${proj.accent}25` : undefined,
              }}
            >
              <div>
                {/* Header: Number & Category */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: isActive ? proj.accent : '#64748B' }}
                  >
                    {formattedNum}
                  </span>
                  <span className="text-[9px] font-mono text-[#64748B] uppercase">
                    {proj.category}
                  </span>
                </div>

                {/* Title */}
                <h5
                  className={`text-xs font-bold leading-tight transition-colors line-clamp-2 ${
                    isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'
                  }`}
                >
                  {proj.shortTitle || proj.title}
                </h5>
              </div>

              {/* Bottom active indicator */}
              <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                <span className="truncate">{proj.stack[0]}</span>
                <ChevronRight
                  className={`w-3 h-3 transition-transform ${
                    isActive ? 'text-[#4F8CFF] translate-x-0.5' : 'text-white/20'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
