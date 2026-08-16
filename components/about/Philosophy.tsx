'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { philosophyReveal } from '@/lib/animations';
import { Layers, Workflow, Scale } from 'lucide-react';

interface Principle {
  number: string;
  title: string;
  headline: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  glowColor: string;
}

const principles: Principle[] = [
  {
    number: '01',
    title: 'BUILD',
    headline: 'Turn complex concepts into resilient digital reality.',
    description:
      'Translating abstract problem spaces into deterministic, high-craft web applications with strict typing, clean interfaces, and uncompromising performance.',
    icon: <Layers className="w-5 h-5 text-[#4F8CFF]" />,
    accent: '#4F8CFF',
    glowColor: 'rgba(79, 140, 255, 0.15)',
  },
  {
    number: '02',
    title: 'AUTOMATE',
    headline: 'Eliminate friction through intelligent workflows.',
    description:
      'Designing self-healing pipelines, multi-model AI/RAG integrations, and autonomous background automations that replace manual toil with precision engines.',
    icon: <Workflow className="w-5 h-5 text-[#9F5CFF]" />,
    accent: '#9F5CFF',
    glowColor: 'rgba(159, 92, 255, 0.15)',
  },
  {
    number: '03',
    title: 'SCALE',
    headline: 'Architect systems that endure exponential growth.',
    description:
      'Structuring distributed data topologies, decoupled UI layers, and edge-native infrastructure that remain maintainable, testable, and blazing fast.',
    icon: <Scale className="w-5 h-5 text-[#38BDF8]" />,
    accent: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.15)',
  },
];

export function Philosophy() {
  return (
    <div className="w-full mt-16 sm:mt-24">
      <div className="flex flex-col mb-8 sm:mb-10 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block">
          Core Methodology // Principles
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          How I Think & Engineer
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((item, index) => (
          <motion.div
            key={item.number}
            variants={philosophyReveal}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="glass-card-interactive rounded-2xl p-6 sm:p-7 relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Ambient hover glow inside card */}
            <div
              className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: item.glowColor }}
            />

            <div>
              {/* Header: Icon & Big Monospace Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-[#080E1A] border border-white/10 group-hover:border-white/20 transition-colors shadow-xs">
                  {item.icon}
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white/10 group-hover:text-white/30 transition-colors">
                  {item.number}
                </span>
              </div>

              {/* Title & Headline */}
              <div className="mb-3">
                <span
                  className="text-xs font-mono uppercase tracking-wider font-bold block mb-1"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#F8FAFC] group-hover:text-white transition-colors leading-snug">
                  {item.headline}
                </h4>
              </div>

              {/* Detailed narrative */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom accent indicator bar */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest">
                Principle {item.number}
              </span>
              <div
                className="w-12 h-1 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: item.accent }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
