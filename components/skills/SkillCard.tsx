'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skill, SkillLevel } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { skillCardVariant } from '@/lib/animations';
import {
  Code2,
  FileCode2,
  Palette,
  Sparkles,
  Layout,
  Server,
  Network,
  Radio,
  Cpu,
  Database,
  Zap,
  Binary,
  Bot,
  BrainCircuit,
  GitBranch,
  Boxes,
  Cloud,
  ShieldCheck,
  Workflow,
  Terminal,
} from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
}

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4" />,
  FileCode2: <FileCode2 className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Network: <Network className="w-4 h-4" />,
  Radio: <Radio className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Binary: <Binary className="w-4 h-4" />,
  Bot: <Bot className="w-4 h-4" />,
  BrainCircuit: <BrainCircuit className="w-4 h-4" />,
  GitBranch: <GitBranch className="w-4 h-4" />,
  Boxes: <Boxes className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Workflow: <Workflow className="w-4 h-4" />,
};

// Map strict SkillLevel into qualitative confidence descriptors without fake percentages
const confidenceLabels: Record<SkillLevel, { label: string; variant: 'accent' | 'secondary' | 'outline' | 'default' }> = {
  Expert: { label: 'Core Mastery', variant: 'accent' },
  Advanced: { label: 'Advanced', variant: 'secondary' },
  Intermediate: { label: 'Working Knowledge', variant: 'default' },
  Beginner: { label: 'Exploring', variant: 'outline' },
};

export function SkillCard({ skill }: SkillCardProps) {
  const confidence = confidenceLabels[skill.level] || confidenceLabels.Advanced;
  const icon = skill.iconName && iconMap[skill.iconName] ? iconMap[skill.iconName] : <Terminal className="w-4 h-4" />;

  return (
    <motion.div
      variants={skillCardVariant}
      layout
      className="glass-card-interactive rounded-2xl p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden"
    >
      <div>
        {/* Header: Monogram/Icon & Qualitative Level Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-[#080E1A] border border-white/10 text-[#4F8CFF] group-hover:border-[#4F8CFF]/50 group-hover:text-[#38BDF8] transition-colors shadow-xs">
            {icon}
          </div>

          <Badge variant={confidence.variant} size="sm" dot={skill.level === 'Expert'}>
            {confidence.label}
          </Badge>
        </div>

        {/* Skill Name */}
        <h4 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#4F8CFF] transition-colors mb-1">
          {skill.name}
        </h4>

        {/* Category identifier */}
        <span className="text-[11px] font-mono text-[#64748B] block mb-3.5">
          {skill.category}
        </span>

        {/* Capability Tags */}
        {skill.tags && skill.tags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#080E1A]/80 text-[#94A3B8] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {/* Footer telemetry */}
      {skill.yearsOfExperience ? (
        <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
          <span>Experience Horizon</span>
          <span className="text-[#94A3B8] font-semibold">{skill.yearsOfExperience}+ Years</span>
        </div>
      ) : null}
    </motion.div>
  );
}
