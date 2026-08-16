'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Shield, Bot, Workflow } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

interface EvolutionStage {
  step: string;
  title: string;
  focus: string;
  icon: React.ReactNode;
  accent: string;
  technologies: string[];
}

const evolutionStages: EvolutionStage[] = [
  {
    step: '01',
    title: 'Modern Frontend',
    focus: 'Deterministic State & 60fps UX',
    icon: <Layers className="w-4 h-4" />,
    accent: '#4F8CFF',
    technologies: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    step: '02',
    title: 'Full Stack & APIs',
    focus: 'Event-Driven Real-Time Runtimes',
    icon: <Server className="w-4 h-4" />,
    accent: '#9F5CFF',
    technologies: ['Node.js', 'Express REST', 'WebSockets', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    step: '03',
    title: 'Systems & Cloud',
    focus: 'Multi-Tenant Isolation & Caching',
    icon: <Shield className="w-4 h-4" />,
    accent: '#38BDF8',
    technologies: ['Redis Caching', 'Docker Containers', 'Vercel Edge', 'Row-Level Security'],
  },
  {
    step: '04',
    title: 'AI & RAG Engines',
    focus: 'Context Grounding & Semantic Retrieval',
    icon: <Bot className="w-4 h-4" />,
    accent: '#10B981',
    technologies: ['pgvector', 'Vector Embeddings', 'Vercel AI SDK', 'Token Stream AST'],
  },
  {
    step: '05',
    title: 'Workflow Automation',
    focus: 'Self-Healing Event Pipelines',
    icon: <Workflow className="w-4 h-4" />,
    accent: '#F59E0B',
    technologies: ['n8n Pipelines', 'Webhook Ingestion', 'Cron Agents', 'API Connectors'],
  },
];

export function CareerEvolution() {
  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]">
      {/* Header */}
      <div className="flex flex-col mb-8 sm:mb-10 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block">
          Architectural Progression // Evolution
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Evolutionary Engineering Paradigm
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl">
          From building performant client interfaces to architecting distributed full-stack systems, context-grounded AI pipelines, and autonomous workflow engines.
        </p>
      </div>

      {/* Evolution Progression Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {evolutionStages.map((stage, idx) => {
          return (
            <motion.div
              key={stage.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="p-2 rounded-xl bg-[#080E1A] border border-white/10"
                    style={{ color: stage.accent }}
                  >
                    {stage.icon}
                  </div>
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#04070D] border border-white/10"
                    style={{ color: stage.accent }}
                  >
                    PHASE {stage.step}
                  </span>
                </div>

                {/* Title & Focus */}
                <h5 className="text-sm font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-1">
                  {stage.title}
                </h5>

                <span className="text-[11px] font-mono text-[#64748B] block mb-4">
                  {stage.focus}
                </span>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {stage.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080E1A] text-[#CBD5E1] border border-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress bar line at card bottom */}
              <div
                className="h-1 w-full rounded-full mt-2"
                style={{ backgroundColor: `${stage.accent}35` }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
