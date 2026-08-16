'use client';

import React from 'react';
import { ProjectCategory } from '@/types';
import { Sparkles, Layers, Server, Bot, Cpu, Workflow } from 'lucide-react';

export type ProjectFilterCategory = 'All' | ProjectCategory;

interface ProjectCategoryNavProps {
  categories: ProjectFilterCategory[];
  activeCategory: ProjectFilterCategory;
  onSelectCategory: (category: ProjectFilterCategory) => void;
  categoryCounts: Record<ProjectFilterCategory, number>;
}

const filterIcons: Record<string, React.ReactNode> = {
  All: <Sparkles className="w-3.5 h-3.5" />,
  'Full Stack': <Layers className="w-3.5 h-3.5" />,
  Frontend: <Cpu className="w-3.5 h-3.5" />,
  'AI / RAG': <Bot className="w-3.5 h-3.5" />,
  Systems: <Server className="w-3.5 h-3.5" />,
  Automation: <Workflow className="w-3.5 h-3.5" />,
};

export function ProjectCategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: ProjectCategoryNavProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by technical domain"
      className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#080E1A]/80 border border-white/10 backdrop-blur-md overflow-x-auto scrollbar-none select-none max-w-full"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = categoryCounts[cat] || 0;

        return (
          <button
            key={cat}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500 ${
              isActive
                ? 'bg-[#15233D] text-[#F8FAFC] border border-[#4F8CFF]/40 shadow-sm'
                : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04] border border-transparent'
            }`}
          >
            <span className={isActive ? 'text-[#4F8CFF]' : 'text-[#64748B]'}>
              {filterIcons[cat] || <Sparkles className="w-3.5 h-3.5" />}
            </span>
            <span>{cat}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded ${
                isActive
                  ? 'bg-[#4F8CFF]/20 text-[#4F8CFF]'
                  : 'bg-white/[0.04] text-[#64748B]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
