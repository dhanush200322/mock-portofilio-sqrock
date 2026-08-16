'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Terminal, Layers, Server, Database, Bot } from 'lucide-react';

interface JourneyMilestone {
  era: string;
  category: string;
  icon: React.ReactNode;
  accent: string;
  summary: string;
  tools: string[];
}

const journeyMilestones: JourneyMilestone[] = [
  {
    era: 'Foundations',
    category: 'Core Computer Science & Web',
    icon: <Terminal className="w-4 h-4" />,
    accent: '#64748B',
    summary: 'Mastering algorithmic problem solving, modern JavaScript ESNext, Git version control, and Unix shell tooling.',
    tools: ['JavaScript (ES6+)', 'HTML5 / Semantic DOM', 'CSS3 / Flex / Grid', 'Git & GitHub', 'Linux CLI'],
  },
  {
    era: 'Interface Architecture',
    category: 'React & Next.js Ecosystem',
    icon: <Layers className="w-4 h-4" />,
    accent: '#4F8CFF',
    summary: 'Building strictly-typed, accessible, 60fps interactive web applications and design token architectures.',
    tools: ['React 19 / 18', 'Next.js 16 App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
  },
  {
    era: 'Backend & Event Streams',
    category: 'Microservices & Real-Time APIs',
    icon: <Server className="w-4 h-4" />,
    accent: '#9F5CFF',
    summary: 'Developing event-driven APIs, WebSocket telemetry servers, and JWT authentication pipelines.',
    tools: ['Node.js', 'Express REST', 'WebSockets', 'RxJS', 'JWT Security', 'HTTP Streaming'],
  },
  {
    era: 'Persistence & Vector Indexing',
    category: 'Relational & Semantic Stores',
    icon: <Database className="w-4 h-4" />,
    accent: '#38BDF8',
    summary: 'Designing ACID relational schemas, composite indexing, in-memory caches, and pgvector cosine search.',
    tools: ['PostgreSQL', 'Prisma ORM', 'Redis Cache', 'pgvector', 'Database Row Locking'],
  },
  {
    era: 'AI & Autonomous Systems',
    category: 'RAG & Workflow Orchestration',
    icon: <Bot className="w-4 h-4" />,
    accent: '#10B981',
    summary: 'Implementing context-augmented LLM retrieval pipelines, streaming token parsers, and n8n automations.',
    tools: ['Vercel AI SDK', 'RAG Chunking', 'Semantic Embeddings', 'n8n Automations', 'Docker Containers'],
  },
];

export function TechnologyJourney() {
  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]">
      {/* Header */}
      <div className="flex flex-col mb-8 sm:mb-10 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block">
          Technological Mastery // Stack Trajectory
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Evolutionary Technology Trajectory
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl">
          A continuous timeline of tools, languages, frameworks, and system paradigms mastered across production applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {journeyMilestones.map((item, idx) => (
          <motion.div
            key={item.era}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: idx * 0.08 }}
            className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="p-2 rounded-xl bg-[#080E1A] border border-white/10"
                  style={{ color: item.accent }}
                >
                  {item.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold block" style={{ color: item.accent }}>
                    {item.era}
                  </span>
                  <span className="text-xs font-bold text-[#F8FAFC]">
                    {item.category}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080E1A] text-[#CBD5E1] border border-white/[0.04]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="h-1 w-full rounded-full mt-3"
              style={{ backgroundColor: `${item.accent}30` }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
