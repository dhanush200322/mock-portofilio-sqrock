'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EngineeringGrid } from '@/components/ui/EngineeringGrid';
import { AvailabilityStatus } from './AvailabilityStatus';
import { ContactCard } from './ContactCard';
import { ContactOptions } from './ContactOptions';
import { ConversionPath } from './ConversionPath';
import { ProjectStarter } from './ProjectStarter';

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t border-white/[0.06] bg-radial-gradient relative overflow-hidden"
      aria-label="Contact and Collaboration Inquiries"
    >
      {/* Background Engineering Grid */}
      <EngineeringGrid opacity={0.1} />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4F8CFF]/08 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#9F5CFF]/08 rounded-full blur-[160px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="Direct Dispatch & Collaboration"
          title="Let's Build Something Useful"
          subtitle="Have a product, platform, AI system, or automation idea? Let's turn it into a high-performance working reality."
          align="center"
        />

        {/* Live Availability & Response Time Telemetry */}
        <div className="mb-12">
          <AvailabilityStatus />
        </div>

        {/* Primary Contact Row: 3D Contact Card (Left) + Direct Options (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <ContactCard />
          </div>

          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <ContactOptions />
          </div>
        </div>

        {/* Collaboration Pathways (Full-Time, Contract, AI Automation) */}
        <ConversionPath />

        {/* Project Intent Dispatcher Starter */}
        <ProjectStarter />
      </Container>
    </section>
  );
}
