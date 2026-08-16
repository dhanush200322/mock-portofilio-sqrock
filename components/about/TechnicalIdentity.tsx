'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalProfile } from '@/data/profile';
import { skillsData } from '@/data/skills';
import { SkillCategory } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { useReducedMotion } from '@/lib/useReducedMotion';
import {
  Layers,
  Server,
  Database,
  Bot,
  Workflow,
  Cloud,
  CheckCircle2,
  Info,
} from 'lucide-react';

interface DomainNode {
  id: string;
  name: string;
  category: SkillCategory | 'Automation';
  icon: React.ReactNode;
  accent: string;
  glowColor: string;
  description: string;
  position: { x: number; y: number }; // Percentage coordinates in 100x100 SVG space
  techFilter: (skillName: string, category: string) => boolean;
}

const domainNodes: DomainNode[] = [
  {
    id: 'node-frontend',
    name: 'Frontend',
    category: 'Frontend',
    icon: <Layers className="w-4 h-4" />,
    accent: '#4F8CFF',
    glowColor: 'rgba(79, 140, 255, 0.3)',
    description: 'High-performance reactive interfaces, SSR streaming, design systems, and 60fps animations.',
    position: { x: 18, y: 30 },
    techFilter: (_, cat) => cat === 'Frontend',
  },
  {
    id: 'node-backend',
    name: 'Backend',
    category: 'Backend',
    icon: <Server className="w-4 h-4" />,
    accent: '#9F5CFF',
    glowColor: 'rgba(159, 92, 255, 0.3)',
    description: 'Event-driven APIs, microservices, WebSocket pub/sub streaming, and high-concurrency runtimes.',
    position: { x: 82, y: 30 },
    techFilter: (_, cat) => cat === 'Backend',
  },
  {
    id: 'node-ai',
    name: 'AI / RAG',
    category: 'AI / Automation',
    icon: <Bot className="w-4 h-4" />,
    accent: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.3)',
    description: 'Context-aware LLM orchestration, hybrid semantic search, and streaming vector retrieval.',
    position: { x: 50, y: 12 },
    techFilter: (name) => name.includes('LLM') || name.includes('Embeddings') || name.includes('RAG'),
  },
  {
    id: 'node-database',
    name: 'Database',
    category: 'Database',
    icon: <Database className="w-4 h-4" />,
    accent: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    description: 'ACID-compliant relation models, sub-millisecond in-memory caching, and vector indexing.',
    position: { x: 18, y: 70 },
    techFilter: (_, cat) => cat === 'Database',
  },
  {
    id: 'node-automation',
    name: 'Automation',
    category: 'Automation',
    icon: <Workflow className="w-4 h-4" />,
    accent: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.3)',
    description: 'n8n workflow pipelines, autonomous cron agents, webhook ingestion, and third-party integrations.',
    position: { x: 50, y: 88 },
    techFilter: (name) => name.includes('Automation') || name.includes('Workflow') || name.includes('n8n'),
  },
  {
    id: 'node-devops',
    name: 'DevOps & Edge',
    category: 'Tools / DevOps',
    icon: <Cloud className="w-4 h-4" />,
    accent: '#6366F1',
    glowColor: 'rgba(99, 102, 241, 0.3)',
    description: 'Immutable containerized packaging, automated CI/CD workflows, and global edge CDNs.',
    position: { x: 82, y: 70 },
    techFilter: (_, cat) => cat === 'Tools / DevOps' || cat === 'Architecture',
  },
];

export function TechnicalIdentity() {
  const [activeNodeId, setActiveNodeId] = useState<string>('node-frontend');
  const isReducedMotion = useReducedMotion();

  const activeNode = domainNodes.find((n) => n.id === activeNodeId) || domainNodes[0];

  // Retrieve matching technologies from data/skills.ts
  const activeSkills = skillsData.filter((skill) =>
    activeNode.techFilter(skill.name, skill.category)
  );

  return (
    <div className="w-full mt-16 sm:mt-24">
      {/* Subheading */}
      <div className="flex flex-col mb-8 sm:mb-10 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block">
          Architecture Topology // Ecosystem Map
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Interactive Technical Identity
        </h3>
        <p className="text-sm text-[#94A3B8] mt-2 max-w-xl">
          Hover or tap any architectural node to inspect connected capabilities, data pipelines, and core tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT / CENTER: Interactive SVG Architecture Map (lg:col-span-7) */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[460px] glass-card rounded-3xl p-4 sm:p-6 flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
          {/* Subtle high-tech coordinate background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

          {/* SVG Connection Lines Layer */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Central hub background glow */}
            <circle cx="50" cy="50" r="16" fill="url(#hubGlow)" />

            {/* Connecting lines from Center (50, 50) to each Domain Node */}
            {domainNodes.map((node) => {
              const isActive = activeNodeId === node.id;
              return (
                <g key={node.id}>
                  {/* Background track line */}
                  <line
                    x1="50"
                    y1="50"
                    x2={node.position.x}
                    y2={node.position.y}
                    stroke={isActive ? node.accent : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={isActive ? '1.2' : '0.6'}
                    strokeDasharray={isActive ? 'none' : '2, 2'}
                    className="transition-colors duration-300"
                  />

                  {/* Active animated pulse line */}
                  {isActive && !isReducedMotion ? (
                    <line
                      x1="50"
                      y1="50"
                      x2={node.position.x}
                      y2={node.position.y}
                      stroke={node.accent}
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      className="animate-[dash_1.5s_linear_infinite]"
                    />
                  ) : null}
                </g>
              );
            })}
          </svg>

          {/* CENTRAL COMMAND NODE */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#080E1A] border-2 border-[#4F8CFF]/60 shadow-xl shadow-[#4F8CFF]/20 select-none text-center"
            style={{ width: '130px', height: '80px' }}
          >
            <div className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-pulse mb-1" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#F8FAFC] font-mono">
              {personalProfile.name.toUpperCase()}
            </span>
            <span className="text-[9px] font-mono text-[#64748B] tracking-tight uppercase">
              Core Systems Hub
            </span>
          </div>

          {/* SURROUNDING DOMAIN NODES */}
          {domainNodes.map((node) => {
            const isActive = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNodeId(node.id)}
                onMouseEnter={() => setActiveNodeId(node.id)}
                onFocus={() => setActiveNodeId(node.id)}
                aria-label={`Select ${node.name} architecture node`}
                aria-pressed={isActive}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500 select-none ${
                  isActive
                    ? 'bg-[#0D1627] border-2 scale-105 shadow-xl'
                    : 'bg-[#080E1A]/90 border border-white/10 hover:border-white/25 opacity-70 hover:opacity-100'
                }`}
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                  borderColor: isActive ? node.accent : undefined,
                  boxShadow: isActive ? `0 0 20px ${node.glowColor}` : undefined,
                }}
              >
                <span
                  className="shrink-0 p-1.5 rounded-lg bg-[#04070D] border border-white/10"
                  style={{ color: node.accent }}
                >
                  {node.icon}
                </span>
                <span
                  className={`text-xs font-mono font-semibold tracking-tight ${
                    isActive ? 'text-white' : 'text-[#94A3B8]'
                  }`}
                >
                  {node.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* RIGHT: Live Architectural Telemetry Panel (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Node Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="p-2.5 rounded-xl bg-[#080E1A] border border-white/10"
                      style={{ color: activeNode.accent }}
                    >
                      {activeNode.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#F8FAFC] tracking-tight">
                        {activeNode.name} Subsystem
                      </h4>
                      <span className="text-[11px] font-mono text-[#64748B]">
                        Domain Node // 0{domainNodes.indexOf(activeNode) + 1}
                      </span>
                    </div>
                  </div>

                  <Badge variant="accent" size="sm">
                    {activeSkills.length} Technologies
                  </Badge>
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {activeNode.description}
                </p>

                {/* Technologies List */}
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                    Active Stack Competencies
                  </span>

                  <div className="grid grid-cols-1 gap-2">
                    {activeSkills.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#080E1A]/80 border border-white/[0.05]"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: activeNode.accent }}
                          />
                          <span className="text-xs font-semibold text-[#F8FAFC]">
                            {skill.name}
                          </span>
                        </div>
                        <Badge size="sm" variant={skill.level === 'Expert' ? 'accent' : 'outline'}>
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status footer info */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#4F8CFF]" />
                  <span>Production-tested tooling</span>
                </span>
                <span className="text-emerald-400">100% Type-Safe</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
