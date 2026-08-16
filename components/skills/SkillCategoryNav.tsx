'use client';

import React from 'react';
import { SkillCategory } from '@/types';
import { Layers, Server, Database, Bot, Wrench, Shield, Sparkles } from 'lucide-react';

export type CategoryFilter = 'All' | SkillCategory;

interface SkillCategoryNavProps {
  categories: CategoryFilter[];
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  categoryCounts: Record<CategoryFilter, number>;
}

const categoryIcons: Record<string, React.ReactNode> = {
  All: <Sparkles className="w-3.5 h-3.5" />,
  Frontend: <Layers className="w-3.5 h-3.5" />,
  Backend: <Server className="w-3.5 h-3.5" />,
  Database: <Database className="w-3.5 h-3.5" />,
  'AI / Automation': <Bot className="w-3.5 h-3.5" />,
  'Tools / DevOps': <Wrench className="w-3.5 h-3.5" />,
  Architecture: <Shield className="w-3.5 h-3.5" />,
};

export function SkillCategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: SkillCategoryNavProps) {
  return (
    <div
      role="tablist"
      aria-label="Skill Categories"
      className="flex md:flex-col gap-1.5 p-1.5 rounded-2xl bg-[#080E1A]/80 border border-white/10 backdrop-blur-md overflow-x-auto scrollbar-none select-none max-w-full"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat)}
            className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500 text-left ${
              isActive
                ? 'bg-[#15233D] text-[#F8FAFC] border border-[#4F8CFF]/40 shadow-sm'
                : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04] border border-transparent'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={isActive ? 'text-[#4F8CFF]' : 'text-[#64748B]'}>
                {categoryIcons[cat] || <Sparkles className="w-3.5 h-3.5" />}
              </span>
              <span className="truncate">{cat}</span>
            </div>

            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                isActive
                  ? 'bg-[#4F8CFF]/20 text-[#4F8CFF]'
                  : 'bg-white/[0.04] text-[#64748B]'
              }`}
            >
              {categoryCounts[cat] || 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
