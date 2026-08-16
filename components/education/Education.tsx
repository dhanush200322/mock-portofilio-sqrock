'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '@/data/education';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { EducationBridge } from './EducationBridge';
import { EngineeringGrid } from '@/components/ui/EngineeringGrid';
import { fadeUp } from '@/lib/animations';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export function Education() {
  return (
    <section
      id="education"
      className="py-24 sm:py-32 border-t border-white/[0.06] bg-[#020408]/70 relative overflow-hidden"
      aria-label="Academic Education and Foundational Knowledge"
    >
      {/* Background Engineering Grid */}
      <EngineeringGrid opacity={0.1} />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4F8CFF]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#9F5CFF]/06 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="Academic Foundation"
          title="Foundations in Computing & Systems"
          subtitle="Structured theoretical computer science education paired with continuous modern specialization."
          align="center"
        />

        {/* Editorial Year & Trajectory Graphic Header */}
        <div className="flex flex-col items-center justify-center mb-12 select-none">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#080E1A] border border-white/10 text-xs font-mono text-[#4F8CFF] shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>ACADEMIC TRAJECTORY // 2021 — 2025</span>
          </div>

          <div className="text-3xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white/90 flex items-center gap-4">
            <span className="text-gradient-accent">2021</span>
            <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-[#4F8CFF] to-[#9F5CFF] relative">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            </div>
            <span className="text-gradient-accent">2025</span>
          </div>
          <span className="text-[11px] font-mono text-[#64748B] mt-2 tracking-widest uppercase">
            Computer Science Foundations → Distributed Systems & AI Specialization
          </span>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* 1. Header: Degree & Duration */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-white/[0.08] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#080E1A] border border-white/10 text-[#4F8CFF] group-hover:border-[#4F8CFF]/50 transition-colors shadow-xs">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#4F8CFF] uppercase block">
                        Academic Milestone // 0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC]">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <Badge variant={edu.current ? 'accent' : 'outline'} size="sm" dot={edu.current}>
                    <Calendar className="w-3 h-3 mr-1" />
                    {edu.duration}
                  </Badge>
                </div>

                {/* 2. Institution & Field */}
                <div className="mb-4">
                  <h4 className="text-sm sm:text-base font-semibold text-[#CBD5E1] mb-1">
                    {edu.field}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#94A3B8]">
                    <span className="flex items-center gap-1 text-[#CBD5E1]">
                      <BookOpen className="w-3.5 h-3.5 text-[#4F8CFF]" />
                      {edu.institution}
                    </span>
                    {edu.location ? (
                      <>
                        <span className="text-white/20">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                          {edu.location}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>

                {/* Grade / Honors if present */}
                {edu.grade ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#0D1627] border border-white/[0.06] text-xs font-mono text-emerald-400 mb-6">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.grade}</span>
                  </div>
                ) : null}

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Key Coursework & Highlights */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block font-semibold">
                    Core Coursework & Highlights
                  </span>
                  {edu.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-[#CBD5E1] leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies / Fundamentals Covered */}
              {edu.technologies && edu.technologies.length > 0 ? (
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block mb-2 font-semibold">
                    Foundational Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080E1A] text-[#94A3B8] border border-white/[0.04]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>

        {/* Education Bridge to Production Engineering */}
        <EducationBridge />
      </Container>
    </section>
  );
}
