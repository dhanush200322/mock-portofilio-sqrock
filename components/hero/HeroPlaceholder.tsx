import React from 'react';
import { ArrowDown, Code2, Sparkles, Terminal } from 'lucide-react';
import { personalProfile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function HeroPlaceholder() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial-gradient bg-grid-pattern"
    >
      {/* Subtle ambient lighting orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4F8CFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#9F5CFF]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex mb-6">
          <Badge variant="accent" size="md" dot>
            {personalProfile.availability.label}
          </Badge>
        </div>

        {/* Primary Display & H1 Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F8FAFC] max-w-4xl mx-auto leading-[1.1] mb-6">
          Crafting <span className="text-gradient-accent">resilient code</span> & immersive digital universes.
        </h1>

        {/* Headline / Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {personalProfile.shortBio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projects">
            <Button size="lg" variant="primary" leftIcon={<Code2 className="w-4 h-4" />}>
              Explore Projects
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="secondary" rightIcon={<Sparkles className="w-4 h-4" />}>
              Get In Touch
            </Button>
          </a>
        </div>

        {/* Quick Architecture Note / Step 1 Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#080E1A]/80 border border-white/[0.08] text-xs text-[#64748B] font-mono">
          <Terminal className="w-3.5 h-3.5 text-[#4F8CFF]" />
          <span>Foundation & Architecture Ready • STEP 2 Cinematic 3D Hero Pipeline Standing By</span>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center text-[#64748B]">
          <a
            href="#about"
            aria-label="Scroll to About Section"
            className="flex flex-col items-center gap-2 hover:text-[#94A3B8] transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 rounded p-1"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest">Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </Container>
    </section>
  );
}
