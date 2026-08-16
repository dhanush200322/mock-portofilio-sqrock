'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { contactData } from '@/data/contact';
import { Button } from '@/components/ui/Button';
import { fadeUp } from '@/lib/animations';
import { Briefcase, Layers, Bot, ArrowUpRight } from 'lucide-react';

interface PathOption {
  number: string;
  title: string;
  targetAudience: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  technologies: string[];
  ctaSubject: string;
  ctaText: string;
}

const conversionPaths: PathOption[] = [
  {
    number: '01',
    title: 'Full-Time Opportunity',
    targetAudience: 'For Tech Companies & High-Growth Startups',
    description:
      'Looking for a Full Stack Software Engineer or AI Systems Developer who owns deterministic codebases, scalable APIs, and 99+ Vitals UX.',
    icon: <Briefcase className="w-4 h-4" />,
    accent: '#4F8CFF',
    technologies: ['Next.js 16', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    ctaSubject: 'Full-Time Engineering Role Inquiry',
    ctaText: 'Hire for Full-Time Role',
  },
  {
    number: '02',
    title: 'Freelance & Product Contracting',
    targetAudience: 'For Founders & Product Teams',
    description:
      'Need an end-to-end web platform, multi-tenant SaaS MVP, or real-time commerce engine designed and built with zero tech debt.',
    icon: <Layers className="w-4 h-4" />,
    accent: '#9F5CFF',
    technologies: ['React 19', 'Next.js App Router', 'Stripe', 'Prisma', 'Tailwind'],
    ctaSubject: 'Product Contracting Inquiry',
    ctaText: 'Contract a Product Build',
  },
  {
    number: '03',
    title: 'AI / RAG & Workflow Automation',
    targetAudience: 'For Businesses & Enterprise Teams',
    description:
      'Want to ground LLM capabilities into internal knowledge bases, build hybrid vector search, or eliminate repetitive work with n8n.',
    icon: <Bot className="w-4 h-4" />,
    accent: '#10B981',
    technologies: ['pgvector', 'Vercel AI SDK', 'RAG Pipelines', 'n8n Automations'],
    ctaSubject: 'AI and Automation System Inquiry',
    ctaText: 'Build AI / Automation System',
  },
];

export function ConversionPath() {
  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]">
      {/* Header */}
      <div className="flex flex-col mb-8 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block">
          Engagement Modes // Pathways
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Tailored Collaboration Pathways
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl">
          Whether you need a dedicated full-time engineering hire, a production-grade web application, or an intelligent AI automation pipeline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {conversionPaths.map((path, idx) => (
          <motion.div
            key={path.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card-interactive rounded-3xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                <div
                  className="p-2.5 rounded-xl bg-[#080E1A] border border-white/10"
                  style={{ color: path.accent }}
                >
                  {path.icon}
                </div>

                <span
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#04070D] border border-white/10"
                  style={{ color: path.accent }}
                >
                  TRACK {path.number}
                </span>
              </div>

              {/* Title & Audience */}
              <h5 className="text-lg font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-1">
                {path.title}
              </h5>

              <span className="text-[11px] font-mono text-[#64748B] block mb-3.5">
                {path.targetAudience}
              </span>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                {path.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {path.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080E1A] text-[#CBD5E1] border border-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href={`mailto:${contactData.email}?subject=${encodeURIComponent(
                  path.ctaSubject
                )}`}
                className="w-full block"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-between group-hover:border-white/25 group-hover:text-white"
                  rightIcon={<ArrowUpRight className="w-3.5 h-3.5 text-[#4F8CFF]" />}
                >
                  {path.ctaText}
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
