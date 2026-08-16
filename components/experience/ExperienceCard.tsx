'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { projectsData } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { useReducedMotion } from '@/lib/useReducedMotion';
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Terminal,
  Zap,
} from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isReducedMotion || e.pointerType === 'touch' || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSheenPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handlePointerLeave = () => {
    setSheenPos({ x: 50, y: 50 });
  };

  // Find matching related project objects from data/projects.ts
  const relatedProjects = (experience.projects || [])
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
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl bg-[#080E1A]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#4F8CFF]/40 group overflow-hidden"
    >
      {/* Dynamic cursor light sheen */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 350px at ${sheenPos.x}% ${sheenPos.y}%, rgba(79, 140, 255, 0.14), transparent 70%)`,
        }}
      />

      {/* Subtle high-tech grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* 1. Header: Role Title & Current Status Pill */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/[0.08] mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono tracking-widest text-[#4F8CFF] uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                {experience.type}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#4F8CFF] transition-colors">
              {experience.role}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#94A3B8] mt-1.5">
              <span className="font-semibold text-[#CBD5E1] flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#4F8CFF]" />
                {experience.company}
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1 text-[#94A3B8]">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Date & Active status badge */}
          <div className="flex flex-col items-end gap-2">
            {experience.current ? (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${
                      !isReducedMotion ? 'animate-ping' : ''
                    }`}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>CURRENT ROLE</span>
              </div>
            ) : (
              <Badge variant="outline" size="sm">
                <Calendar className="w-3 h-3 mr-1" />
                {experience.duration}
              </Badge>
            )}

            {experience.current ? (
              <span className="text-[11px] font-mono text-[#64748B]">
                {experience.duration}
              </span>
            ) : null}
          </div>
        </div>

        {/* 2. Section 01: Role Overview */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block mb-2 font-semibold">
            01 // Strategic Mission
          </span>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* 3. Section 02 & 03: Responsibilities & Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Responsibilities */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#04070D]/80 border border-white/[0.06]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#4F8CFF] block mb-3 font-semibold">
              02 // Core Responsibilities
            </span>
            <ul className="space-y-2.5">
              {experience.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#CBD5E1] leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Achievements & Impact */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#04070D]/80 border border-white/[0.06]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-3 font-semibold">
              03 // Engineering Impact
            </span>
            <ul className="space-y-2.5">
              {experience.achievements.map((ach, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#CBD5E1] leading-relaxed"
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Section 04: Applied Technologies */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block mb-2.5 font-semibold">
            04 // Technology Stack Deployed
          </span>
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#0D1627] text-[#94A3B8] border border-white/[0.06] group-hover:text-white group-hover:border-white/15 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Section 05: Related Production Artifacts */}
        {relatedProjects.length > 0 ? (
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#4F8CFF]" />
              <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                Connected Systems //
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {relatedProjects.map((proj) =>
                proj ? (
                  <a
                    key={proj.id}
                    href="#projects"
                    onClick={handleProjectClick}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#0D1627] hover:bg-[#15233D] text-[#CBD5E1] hover:text-[#4F8CFF] border border-white/10 hover:border-[#4F8CFF]/40 text-xs font-mono transition-all group/link focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
                    aria-label={`View connected project: ${proj.title}`}
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
