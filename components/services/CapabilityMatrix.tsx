'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { fadeUp } from '@/lib/animations';
import { Layers, Server, Database, Bot, Workflow, Cloud, ArrowUpRight, Cpu } from 'lucide-react';

interface MatrixRow {
  domain: string;
  icon: React.ReactNode;
  accent: string;
  level: 'Core Mastery' | 'Advanced' | 'Working Knowledge' | 'Exploring';
  levelVariant: 'accent' | 'secondary' | 'default' | 'outline';
  architectures: string[];
  projectLink: { name: string; id: string };
}

const capabilityRows: MatrixRow[] = [
  {
    domain: 'Frontend & UI Kinematics',
    icon: <Layers className="w-4 h-4" />,
    accent: '#4F8CFF',
    level: 'Core Mastery',
    levelVariant: 'accent',
    architectures: ['Next.js 16 App Router', 'React 19 Server Components', 'Framer Motion 60fps UX', 'Canvas 2D Graphs'],
    projectLink: { name: 'Food Delivery Platform', id: 'proj-food-delivery' },
  },
  {
    domain: 'Backend & Event Streams',
    icon: <Server className="w-4 h-4" />,
    accent: '#9F5CFF',
    level: 'Core Mastery',
    levelVariant: 'accent',
    architectures: ['Node.js & Express REST', 'WebSocket Real-Time Multiplexing', 'JWT Bearer Security', 'RxJS Pipelines'],
    projectLink: { name: 'Multi-Vendor Marketplace', id: 'proj-multi-vendor' },
  },
  {
    domain: 'Data & Persistence Layers',
    icon: <Database className="w-4 h-4" />,
    accent: '#38BDF8',
    level: 'Advanced',
    levelVariant: 'secondary',
    architectures: ['PostgreSQL Relational ACID', 'Prisma ORM Models', 'Redis Cache Rings', 'Row-Level Security'],
    projectLink: { name: 'Freelancing Platform', id: 'proj-freelance-market' },
  },
  {
    domain: 'AI / RAG & Embeddings',
    icon: <Bot className="w-4 h-4" />,
    accent: '#10B981',
    level: 'Advanced',
    levelVariant: 'secondary',
    architectures: ['pgvector Cosine Search', 'Hybrid BM25 Re-Ranking', 'Vercel AI SDK', 'Token Stream AST'],
    projectLink: { name: 'AI / RAG Agent Platform', id: 'proj-ai-agent-rag' },
  },
  {
    domain: 'Workflow & Integration',
    icon: <Workflow className="w-4 h-4" />,
    accent: '#F59E0B',
    level: 'Advanced',
    levelVariant: 'secondary',
    architectures: ['n8n Workflow Automation', 'Webhook Idempotency', 'Autonomous Cron Handlers', 'API Proxies'],
    projectLink: { name: 'Food Delivery System', id: 'proj-food-delivery' },
  },
  {
    domain: 'Cloud Infrastructure & Edge',
    icon: <Cloud className="w-4 h-4" />,
    accent: '#6366F1',
    level: 'Working Knowledge',
    levelVariant: 'default',
    architectures: ['Docker Containerization', 'Vercel Edge Functions', 'Render Web Services', 'CDN Asset Routing'],
    projectLink: { name: 'Cloud Observability Cockpit', id: 'proj-observability-telemetry' },
  },
];

export function CapabilityMatrix() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]">
      <div className="flex flex-col mb-8 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5" />
          Rigorous Technical Competencies // Matrix
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Qualitative Engineering Capability Matrix
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl">
          Factual evaluation of technical depth across modern frontend, distributed backends, vector data stores, and workflow automations.
        </p>
      </div>

      {/* Responsive Matrix Grid */}
      <div className="grid grid-cols-1 gap-3">
        {capabilityRows.map((row, idx) => (
          <motion.div
            key={row.domain}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: idx * 0.06 }}
            className="glass-card rounded-2xl p-4 sm:p-5 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          >
            {/* Domain & Level */}
            <div className="flex items-center gap-3.5 min-w-[260px]">
              <div
                className="p-2.5 rounded-xl bg-[#080E1A] border border-white/10 shrink-0"
                style={{ color: row.accent }}
              >
                {row.icon}
              </div>
              <div>
                <h5 className="text-sm font-bold text-[#F8FAFC] group-hover:text-white transition-colors">
                  {row.domain}
                </h5>
                <div className="mt-1">
                  <Badge variant={row.levelVariant} size="sm" dot={row.level === 'Core Mastery'}>
                    {row.level}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Architectures Deployed */}
            <div className="flex flex-wrap gap-1.5 flex-1 max-w-2xl">
              {row.architectures.map((arch) => (
                <span
                  key={arch}
                  className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#080E1A] text-[#CBD5E1] border border-white/[0.04]"
                >
                  {arch}
                </span>
              ))}
            </div>

            {/* Verified Project Link */}
            <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/[0.04]">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D1627] hover:bg-[#15233D] text-[#CBD5E1] hover:text-[#4F8CFF] border border-white/10 hover:border-[#4F8CFF]/40 text-xs font-mono transition-all group/link focus-visible:outline-2 focus-visible:outline-blue-500"
                aria-label={`View verified project: ${row.projectLink.name}`}
              >
                <span className="truncate max-w-[140px] sm:max-w-none">{row.projectLink.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#4F8CFF] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
