'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalProfile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from './MagneticButton';
import { heroTextStagger, heroTextItem } from '@/lib/animations';
import { ArrowRight, Sparkles, FileDown, Terminal, Cpu } from 'lucide-react';

interface HeroContentProps {
  onNavClick?: (href: string) => void;
}

export function HeroContent({ onNavClick }: HeroContentProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (onNavClick) {
      e.preventDefault();
      onNavClick(href);
    }
  };

  return (
    <motion.div
      variants={heroTextStagger}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left max-w-2xl z-10"
    >
      {/* 1. Status Indicator Badge */}
      <motion.div variants={heroTextItem} className="mb-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080E1A]/90 border border-white/10 backdrop-blur-md shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono tracking-wide text-[#94A3B8] uppercase">
            {personalProfile.availability.label}
          </span>
        </div>
      </motion.div>

      {/* 2. Primary H1 Headline */}
      <motion.div variants={heroTextItem} className="mb-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.08] font-sans">
          Building resilient{' '}
          <span className="block mt-1">
            digital <span className="text-gradient-accent">systems that move.</span>
          </span>
        </h1>
      </motion.div>

      {/* 3. Positioning Statement */}
      <motion.div variants={heroTextItem} className="mb-8">
        <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] leading-relaxed max-w-xl font-normal">
          {personalProfile.shortBio}
        </p>
      </motion.div>

      {/* 4. Action Row (Magnetic CTAs) */}
      <motion.div
        variants={heroTextItem}
        className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto"
      >
        <MagneticButton strength={0.25}>
          <a
            href="#projects"
            onClick={(e) => handleClick(e, '#projects')}
            className="block"
          >
            <Button
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              className="group shadow-lg shadow-[#4F8CFF]/20 hover:shadow-[#4F8CFF]/35 w-full sm:w-auto"
            >
              View My Work
            </Button>
          </a>
        </MagneticButton>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="w-full sm:w-auto"
        >
          <Button
            size="lg"
            variant="secondary"
            leftIcon={<Sparkles className="w-4 h-4 text-[#9F5CFF]" />}
            className="w-full sm:w-auto"
          >
            Let&apos;s Connect
          </Button>
        </a>

        <a
          href={personalProfile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#64748B] hover:text-[#94A3B8] flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 w-full sm:w-auto justify-center sm:justify-start"
        >
          <FileDown className="w-3.5 h-3.5 text-[#4F8CFF]" />
          <span>Resume PDF</span>
        </a>
      </motion.div>

      {/* 5. Core Architectural Telemetry Pill */}
      <motion.div
        variants={heroTextItem}
        className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.08] text-xs text-[#64748B] font-mono"
      >
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-[#4F8CFF]" />
          <span>Full Stack & Systems</span>
        </div>
        <span className="hidden sm:inline text-white/10">•</span>
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#9F5CFF]" />
          <span>AI & Automation</span>
        </div>
        <span className="hidden sm:inline text-white/10">•</span>
        <span className="text-emerald-400/90 font-medium">99+ Web Vitals</span>
      </motion.div>
    </motion.div>
  );
}
