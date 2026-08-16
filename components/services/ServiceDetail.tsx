'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/types';
import { projectsData } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { useReducedMotion } from '@/lib/useReducedMotion';
import {
  CheckCircle2,
  Cpu,
  PackageCheck,
  Code2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isReducedMotion || e.pointerType === 'touch' || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSheenPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handlePointerLeave = () => {
    setSheenPos({ x: 50, y: 50 });
  };

  // Find matching related project objects from data/projects.ts
  const relatedProjects = (service.relatedProjects || [])
    .map((projId) => projectsData.find((p) => p.id === projId))
    .filter(Boolean);

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      key={service.id}
      id={`panel-${service.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${service.id}`}
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card-interactive rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group"
    >
      {/* Dynamic cursor light sheen */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-65 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 380px at ${sheenPos.x}% ${sheenPos.y}%, ${service.accent}18, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* 1. Header: Number, Category, Title */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-2.5">
            <span
              className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#080E1A] border border-white/10"
              style={{ color: service.accent }}
            >
              DOMAIN {service.number}
            </span>
            <Badge variant="outline" size="sm">
              {service.category}
            </Badge>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR ENGAGEMENT</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
          {service.description}
        </p>

        {/* 2. Capabilities & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Core Capabilities */}
          <div className="p-5 rounded-2xl bg-[#04070D]/80 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-3.5">
              <Cpu className="w-4 h-4" style={{ color: service.accent }} />
              <span className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-bold">
                Core Capabilities
              </span>
            </div>

            <ul className="space-y-2.5">
              {service.capabilities.map((cap, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed"
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 shrink-0 mt-0.5"
                    style={{ color: service.accent }}
                  />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div className="p-5 rounded-2xl bg-[#04070D]/80 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-3.5">
              <PackageCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-bold">
                Production Deliverables
              </span>
            </div>

            <ul className="space-y-2.5">
              {service.deliverables.map((deliv, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Applied Technologies */}
        <div className="mb-8">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block mb-2.5 font-semibold">
            Technology Stack & Tooling
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#0D1627] text-[#94A3B8] border border-white/[0.06] group-hover:text-white group-hover:border-white/15 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Related Production Artifacts */}
        {relatedProjects.length > 0 ? (
          <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#4F8CFF]" />
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                Demonstrated In Project Artifacts //
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {relatedProjects.map((proj) =>
                proj ? (
                  <a
                    key={proj.id}
                    href="#projects"
                    onClick={handleProjectClick}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D1627] hover:bg-[#15233D] text-[#CBD5E1] hover:text-[#4F8CFF] border border-white/10 hover:border-[#4F8CFF]/40 text-xs font-mono transition-all group/link focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
                    aria-label={`View demonstration project: ${proj.title}`}
                  >
                    <span>{proj.shortTitle || proj.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#4F8CFF] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ) : null
              )}
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
