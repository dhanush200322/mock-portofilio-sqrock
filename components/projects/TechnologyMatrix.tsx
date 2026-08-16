'use client';

import React from 'react';
import { Layers, Server, Database, Bot, Cloud, Cpu } from 'lucide-react';

interface TechStackCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  technologies: string[];
}

const portfolioTechMatrix: TechStackCategory[] = [
  {
    title: 'Frontend Engineering',
    icon: <Layers className="w-4 h-4" />,
    accent: '#4F8CFF',
    technologies: ['React 19 / 18', 'Next.js 16 App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas 2D API'],
  },
  {
    title: 'Backend & Telemetry',
    icon: <Server className="w-4 h-4" />,
    accent: '#9F5CFF',
    technologies: ['Node.js', 'Express REST APIs', 'WebSockets / Socket.IO', 'RxJS Streams', 'JWT Auth Architecture'],
  },
  {
    title: 'Data & Persistence',
    icon: <Database className="w-4 h-4" />,
    accent: '#38BDF8',
    technologies: ['PostgreSQL', 'Prisma ORM', 'Redis In-Memory Cache', 'pgvector Similarity Index', 'IndexedDB Local'],
  },
  {
    title: 'AI & Automation',
    icon: <Bot className="w-4 h-4" />,
    accent: '#10B981',
    technologies: ['Vercel AI SDK', 'RAG Chunking Pipelines', 'Semantic Embeddings', 'n8n Workflows', 'Token Streaming AST'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="w-4 h-4" />,
    accent: '#F59E0B',
    technologies: ['Vercel Edge Functions', 'Render Web Services', 'Docker Containers', 'Stripe Payments', 'AWS S3 Assets'],
  },
];

export function TechnologyMatrix() {
  return (
    <div className="w-full mt-12 pt-8 border-t border-white/[0.08]">
      <div className="flex flex-col mb-6 text-left">
        <span className="text-xs font-mono uppercase tracking-wider text-[#4F8CFF] font-semibold mb-1 flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5" />
          Cross-Project Technology Synthesis
        </span>
        <h4 className="text-lg sm:text-xl font-bold text-[#F8FAFC]">
          Production Tech Stack Matrix
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
          Technologies, frameworks, and protocols deployed across the portfolio projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {portfolioTechMatrix.map((cat) => (
          <div
            key={cat.title}
            className="glass-card rounded-2xl p-4 sm:p-5 border border-white/[0.06] hover:border-white/15 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.04]">
                <div
                  className="p-1.5 rounded-lg bg-[#080E1A] border border-white/10"
                  style={{ color: cat.accent }}
                >
                  {cat.icon}
                </div>
                <h5 className="text-xs font-bold text-[#F8FAFC] leading-tight">
                  {cat.title}
                </h5>
              </div>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-1.5">
                {cat.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080E1A] text-[#94A3B8] border border-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
