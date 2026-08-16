'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { GraduationCap, Binary, Cpu, Rocket, ChevronRight } from 'lucide-react';

interface BridgeStage {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
}

const bridgeStages: BridgeStage[] = [
  {
    number: '01',
    title: 'Computer Science Core',
    subtitle: 'Algorithms, OS, DBMS & Distributed Math',
    icon: <GraduationCap className="w-4 h-4" />,
    accent: '#4F8CFF',
  },
  {
    number: '02',
    title: 'Applied Engineering',
    subtitle: 'Strict Typing, Modular Patterns & Design Systems',
    icon: <Binary className="w-4 h-4" />,
    accent: '#9F5CFF',
  },
  {
    number: '03',
    title: 'Distributed Architecture',
    subtitle: 'Event Streams, Relational Ledgers & Cloud Caching',
    icon: <Cpu className="w-4 h-4" />,
    accent: '#38BDF8',
  },
  {
    number: '04',
    title: 'Autonomous Systems',
    subtitle: 'RAG Retrieval, AI Agents & Production Web Vitals',
    icon: <Rocket className="w-4 h-4" />,
    accent: '#10B981',
  },
];

export function EducationBridge() {
  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]">
      <div className="flex flex-col mb-8 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block">
          Theory // Practice Nexus
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Academic Foundations to Production Systems
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl">
          Bridging fundamental computer science principles with high-performance production engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {bridgeStages.map((stage, idx) => {
          const isLast = idx === bridgeStages.length - 1;

          return (
            <motion.div
              key={stage.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group relative"
            >
              <div>
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
                    NEXUS {stage.number}
                  </span>
                </div>

                <h5 className="text-sm font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-1">
                  {stage.title}
                </h5>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {stage.subtitle}
                </p>
              </div>

              <div
                className="h-1 w-full rounded-full mt-4"
                style={{ backgroundColor: `${stage.accent}30` }}
              />

              {!isLast ? (
                <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#080E1A] border border-white/10 items-center justify-center text-[#64748B] pointer-events-none">
                  <ChevronRight className="w-3 h-3" />
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
