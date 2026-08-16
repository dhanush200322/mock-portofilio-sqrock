'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/hero/MagneticButton';
import { fadeUp } from '@/lib/animations';
import { ArrowUpRight, Sparkles, FolderGit2 } from 'lucide-react';

export function ServicesCTA() {
  const handleScrollTo = (targetId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="w-full mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-radial-gradient border border-white/10 relative overflow-hidden text-center flex flex-col items-center justify-center shadow-2xl group"
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#4F8CFF]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#9F5CFF]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080E1A] border border-white/10 text-xs font-mono text-[#4F8CFF] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready for High-Impact Collaboration</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
          Let&apos;s build something{' '}
          <span className="text-gradient-accent">useful & scalable.</span>
        </h3>

        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8 max-w-lg">
          Have a product vision, full-stack application, or intelligent AI automation pipeline to architect? Let&apos;s build a deterministic, production-ready solution.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton strength={0.25}>
            <a href="#contact" onClick={handleScrollTo('contact')}>
              <Button
                size="md"
                variant="primary"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
                className="shadow-lg shadow-[#4F8CFF]/25 hover:shadow-[#4F8CFF]/40"
              >
                Start a Project
              </Button>
            </a>
          </MagneticButton>

          <a href="#projects" onClick={handleScrollTo('projects')}>
            <Button
              size="md"
              variant="secondary"
              leftIcon={<FolderGit2 className="w-4 h-4" />}
            >
              View System Artifacts
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
