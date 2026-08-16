'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EngineeringGrid } from '@/components/ui/EngineeringGrid';
import { ExperienceTimeline } from './ExperienceTimeline';
import { CareerEvolution } from './CareerEvolution';
import { TechnologyJourney } from './TechnologyJourney';

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 border-t border-white/[0.06] bg-radial-gradient relative overflow-hidden"
      aria-label="Professional Experience and Career Journey"
    >
      {/* Background Engineering Grid */}
      <EngineeringGrid opacity={0.1} />

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#4F8CFF]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#9F5CFF]/06 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="Career Journey"
          title="Building in Public. Engineering in Practice."
          subtitle="A progressive track of full-stack product engineering, distributed systems, real-time telemetry, and autonomous AI automation."
          align="center"
        />

        {/* Cinematic Timeline */}
        <ExperienceTimeline />

        {/* Career Evolution Paradigm Progression */}
        <CareerEvolution />

        {/* Technology Evolutionary Trajectory */}
        <TechnologyJourney />
      </Container>
    </section>
  );
}
