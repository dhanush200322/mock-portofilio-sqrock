'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { Layers, Server, Database, Bot, Workflow, Cloud, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';

interface StackDomain {
  id: string;
  name: string;
  icon: React.ReactNode;
  accent: string;
  description: string;
  position: { x: number; y: number };
  technologies: string[];
}

const stackDomains: StackDomain[] = [
  {
    id: 'stack-frontend',
    name: 'Frontend',
    icon: <Layers className="w-4 h-4" />,
    accent: '#4F8CFF',
    description: 'Ultra-fast interfaces with server-side rendering, deterministic state, and 60fps animations.',
    position: { x: 18, y: 30 },
    technologies: ['React 19 / 18', 'Next.js 16 App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas 2D'],
  },
  {
    id: 'stack-backend',
    name: 'Backend',
    icon: <Server className="w-4 h-4" />,
    accent: '#9F5CFF',
    description: 'High-throughput REST and WebSocket backends with strict JWT authentication and event streaming.',
    position: { x: 82, y: 30 },
    technologies: ['Node.js', 'Express REST', 'WebSockets', 'RxJS Streams', 'JWT Bearer Auth', 'Microservices'],
  },
  {
    id: 'stack-database',
    name: 'Database',
    icon: <Database className="w-4 h-4" />,
    accent: '#38BDF8',
    description: 'Relational ACID models, composite query optimization, sub-millisecond in-memory caching, and vector indexing.',
    position: { x: 18, y: 70 },
    technologies: ['PostgreSQL', 'Prisma ORM', 'Redis Cache', 'pgvector Cosine Search', 'Row Locks'],
  },
  {
    id: 'stack-ai',
    name: 'AI / RAG',
    icon: <Bot className="w-4 h-4" />,
    accent: '#10B981',
    description: 'Grounded retrieval-augmented generation pipelines, semantic chunking, and streaming AST token parsers.',
    position: { x: 50, y: 12 },
    technologies: ['Vercel AI SDK', 'Vector Embeddings', 'Hybrid BM25 Reranking', 'Semantic Chunking', 'Tool Calling'],
  },
  {
    id: 'stack-automation',
    name: 'Automation',
    icon: <Workflow className="w-4 h-4" />,
    accent: '#F59E0B',
    description: 'Autonomous multi-stage n8n workflows, webhook ingestion handlers, and automated cron triggers.',
    position: { x: 50, y: 88 },
    technologies: ['n8n Pipelines', 'Webhook Handlers', 'Cron Agents', 'API Proxies', 'Idempotency Filters'],
  },
  {
    id: 'stack-cloud',
    name: 'Cloud & Edge',
    icon: <Cloud className="w-4 h-4" />,
    accent: '#6366F1',
    description: 'Containerized packaging, edge serverless functions, and global CDN asset distribution.',
    position: { x: 82, y: 70 },
    technologies: ['Docker Containers', 'Vercel Edge Functions', 'Render Web Services', 'Cloud CDN', 'CI/CD Pipelines'],
  },
];

export function StackVisualizer() {
  const [activeDomainId, setActiveDomainId] = useState<string>('stack-frontend');
  const isReducedMotion = useReducedMotion();

  const activeDomain =
    stackDomains.find((d) => d.id === activeDomainId) || stackDomains[0];

  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]">
      {/* Header */}
      <div className="flex flex-col mb-8 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5" />
          Technical Stack Topology // Ecosystem
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Interactive Stack Ecosystem Visualizer
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl">
          Tap or hover any domain node to inspect the production-tested technologies deployed across my systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT: SVG Architecture Constellation (lg:col-span-7) */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[460px] glass-card rounded-3xl p-4 sm:p-6 flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

          {/* SVG Connection Lines */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="stackHubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="50" cy="50" r="16" fill="url(#stackHubGlow)" />

            {stackDomains.map((domain) => {
              const isActive = activeDomainId === domain.id;
              return (
                <g key={domain.id}>
                  <line
                    x1="50"
                    y1="50"
                    x2={domain.position.x}
                    y2={domain.position.y}
                    stroke={isActive ? domain.accent : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={isActive ? '1.2' : '0.6'}
                    strokeDasharray={isActive ? 'none' : '2, 2'}
                    className="transition-colors duration-300"
                  />
                  {isActive && !isReducedMotion ? (
                    <line
                      x1="50"
                      y1="50"
                      x2={domain.position.x}
                      y2={domain.position.y}
                      stroke={domain.accent}
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      className="animate-[dash_1.5s_linear_infinite]"
                    />
                  ) : null}
                </g>
              );
            })}
          </svg>

          {/* Center Command Hub */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#080E1A] border-2 border-[#4F8CFF]/60 shadow-xl shadow-[#4F8CFF]/20 select-none text-center"
            style={{ width: '130px', height: '80px' }}
          >
            <div className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-pulse mb-1" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#F8FAFC] font-mono">
              ENGINEERING
            </span>
            <span className="text-[9px] font-mono text-[#64748B] tracking-tight uppercase">
              Core Stack Hub
            </span>
          </div>

          {/* Surrounding Nodes */}
          {stackDomains.map((domain) => {
            const isActive = activeDomainId === domain.id;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveDomainId(domain.id)}
                onMouseEnter={() => setActiveDomainId(domain.id)}
                onFocus={() => setActiveDomainId(domain.id)}
                aria-label={`Select ${domain.name} domain`}
                aria-pressed={isActive}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500 select-none ${
                  isActive
                    ? 'bg-[#0D1627] border-2 scale-105 shadow-xl'
                    : 'bg-[#080E1A]/90 border border-white/10 hover:border-white/25 opacity-70 hover:opacity-100'
                }`}
                style={{
                  left: `${domain.position.x}%`,
                  top: `${domain.position.y}%`,
                  borderColor: isActive ? domain.accent : undefined,
                  boxShadow: isActive ? `0 0 20px ${domain.accent}40` : undefined,
                }}
              >
                <span
                  className="shrink-0 p-1.5 rounded-lg bg-[#04070D] border border-white/10"
                  style={{ color: domain.accent }}
                >
                  {domain.icon}
                </span>
                <span
                  className={`text-xs font-mono font-semibold tracking-tight ${
                    isActive ? 'text-white' : 'text-[#94A3B8]'
                  }`}
                >
                  {domain.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* RIGHT: Active Domain Detail Panel (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="p-2.5 rounded-xl bg-[#080E1A] border border-white/10"
                      style={{ color: activeDomain.accent }}
                    >
                      {activeDomain.icon}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-[#F8FAFC] tracking-tight">
                        {activeDomain.name} Ecosystem
                      </h5>
                      <span className="text-[11px] font-mono text-[#64748B]">
                        Domain Subsystem // Deployed Tooling
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {activeDomain.description}
                </p>

                {/* Technologies List */}
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block font-semibold">
                    Active Stack Tooling
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeDomain.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#080E1A]/80 border border-white/[0.05]"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: activeDomain.accent }}
                        />
                        <span className="text-xs font-semibold text-[#F8FAFC]">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#4F8CFF]" />
                  <span>Production Tested</span>
                </span>
                <span className="text-emerald-400">Strict TypeScript</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
