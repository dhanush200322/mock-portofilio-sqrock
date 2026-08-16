'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Compass, Network, Code2, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  description: string;
  deliverable: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    name: 'Discover',
    subtitle: 'Scope & Requirements',
    icon: <Compass className="w-4 h-4" />,
    accent: '#4F8CFF',
    description: 'Analyzing user journeys, state constraints, non-functional latency targets, and domain requirements.',
    deliverable: 'Technical Specification',
  },
  {
    number: '02',
    name: 'Architect',
    subtitle: 'System Topology',
    icon: <Network className="w-4 h-4" />,
    accent: '#9F5CFF',
    description: 'Designing relational schemas, component hierarchy trees, API contracts, and event-stream pipelines.',
    deliverable: 'Architecture Blueprint',
  },
  {
    number: '03',
    name: 'Build',
    subtitle: 'Strictly-Typed Code',
    icon: <Code2 className="w-4 h-4" />,
    accent: '#38BDF8',
    description: 'Engineering deterministic state trees, 60fps micro-interactions, streaming APIs, and vector indexes.',
    deliverable: 'Working Application',
  },
  {
    number: '04',
    name: 'Validate',
    subtitle: 'Testing & Vitals',
    icon: <ShieldCheck className="w-4 h-4" />,
    accent: '#10B981',
    description: 'Executing unit tests, auditing accessibility, testing failure states, and tuning 99+ Core Web Vitals.',
    deliverable: 'Quality Assurance Suite',
  },
  {
    number: '05',
    name: 'Deploy',
    subtitle: 'Production Release',
    icon: <Rocket className="w-4 h-4" />,
    accent: '#F59E0B',
    description: 'Shipping to global edge CDNs, automated CI/CD pipelines, and setting up real-time telemetry alerts.',
    deliverable: 'Live Production System',
  },
];

export function BuildProcess() {
  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]">
      {/* Header */}
      <div className="flex flex-col mb-8 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block">
          Engineering Lifecycle // Methodology
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Systematic 5-Stage Build Process
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl">
          How I take complex digital ideas from initial specification to robust, high-performance production systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {processSteps.map((step, idx) => {
          const isLast = idx === processSteps.length - 1;

          return (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group relative"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="p-2 rounded-xl bg-[#080E1A] border border-white/10"
                    style={{ color: step.accent }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#04070D] border border-white/10"
                    style={{ color: step.accent }}
                  >
                    STAGE {step.number}
                  </span>
                </div>

                {/* Name & Subtitle */}
                <h5 className="text-base font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-0.5">
                  {step.name}
                </h5>

                <span className="text-[11px] font-mono text-[#64748B] block mb-3">
                  {step.subtitle}
                </span>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Badge */}
              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#64748B]">Output:</span>
                <span
                  className="text-[10px] font-mono font-semibold"
                  style={{ color: step.accent }}
                >
                  {step.deliverable}
                </span>
              </div>

              {/* Desktop Arrow Connector */}
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
