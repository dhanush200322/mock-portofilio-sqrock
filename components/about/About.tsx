'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalProfile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EngineeringGrid } from '@/components/ui/EngineeringGrid';
import { IdentityCard } from './IdentityCard';
import { Philosophy } from './Philosophy';
import { TechnicalIdentity } from './TechnicalIdentity';
import { fadeUp } from '@/lib/animations';
import { CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';

export function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  });

  const textX = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-24 sm:py-32 border-t border-white/[0.06] bg-radial-gradient relative overflow-hidden"
      aria-label="About Technical Identity and Architecture"
    >
      {/* Background Engineering Grid */}
      <EngineeringGrid opacity={0.12} />

      {/* Layered Horizontal Parallax Typography Stream */}
      <div className="absolute top-12 left-0 right-0 pointer-events-none overflow-hidden select-none z-0 opacity-[0.03] whitespace-nowrap">
        <motion.div
          style={{ x: textX }}
          className="text-8xl sm:text-9xl lg:text-[10rem] font-extrabold font-mono tracking-tighter text-white"
        >
          ENGINEER // ARCHITECT // BUILDER // SYSTEMS
        </motion.div>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#4F8CFF]/08 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#9F5CFF]/08 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          badge="Technical Identity"
          title="Engineering digital systems with purpose"
          subtitle="A full stack mindset combining scalable backend architectures, intelligent AI automation, and fluid human interfaces."
          align="center"
        />

        {/* SECTION 1: Editorial Narrative + Interactive Identity Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Statement & Narrative (lg:col-span-7) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Editorial Lead In */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F8CFF] uppercase mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Full Stack // AI Systems // Creative Dev</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.12] mb-6">
              Engineering digital{' '}
              <span className="text-gradient-accent">systems that scale.</span>
            </h3>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
              {personalProfile.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Pillars Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-6 border-t border-white/[0.08] mb-8">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0 mt-0.5" />
                <span>Deterministic, strictly-typed codebases</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                <CheckCircle2 className="w-4 h-4 text-[#9F5CFF] shrink-0 mt-0.5" />
                <span>Context-aware AI & LLM workflows</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>High-throughput streaming APIs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero-layout-shift 60fps motion</span>
              </div>
            </div>

            {/* Quick Action Link */}
            <a
              href="#skills"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#4F8CFF] hover:text-[#38BDF8] transition-colors group"
            >
              <span>Explore technical skills matrix</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Right Column: 3D Interactive Identity Card (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <IdentityCard />
          </div>
        </div>

        {/* SECTION 2: Engineering Philosophy (Build, Automate, Scale) */}
        <Philosophy />

        {/* SECTION 3: Technical Identity Ecosystem Architecture Map */}
        <TechnicalIdentity />
      </Container>
    </section>
  );
}
