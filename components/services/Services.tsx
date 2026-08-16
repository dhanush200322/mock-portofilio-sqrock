'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/services';
import { Service } from '@/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EngineeringGrid } from '@/components/ui/EngineeringGrid';
import { ServiceSelector } from './ServiceSelector';
import { ServiceDetail } from './ServiceDetail';
import { CapabilityMatrix } from './CapabilityMatrix';
import { StackVisualizer } from './StackVisualizer';
import { BuildProcess } from './BuildProcess';
import { ServicesCTA } from './ServicesCTA';

export function Services() {
  const [activeService, setActiveService] = useState<Service>(servicesData[0]);

  return (
    <section
      id="services"
      className="py-24 sm:py-32 border-t border-white/[0.06] bg-radial-gradient relative overflow-hidden"
      aria-label="Engineering Services and What I Build"
    >
      {/* Background Engineering Grid */}
      <EngineeringGrid opacity={0.1} />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4F8CFF]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#9F5CFF]/06 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="What I Build"
          title="Digital Products. Engineering Systems. Automated Workflows."
          subtitle="A specialized engineering practice focused on building modern reactive interfaces, distributed full-stack platforms, context-grounded AI systems, and autonomous workflow engines."
          align="center"
        />

        {/* Interactive Service Selector & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector Tabs (lg:col-span-4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ServiceSelector
              services={servicesData}
              activeServiceId={activeService.id}
              onSelectService={setActiveService}
            />
          </div>

          {/* Right Column: Service Detail Panel (lg:col-span-8) */}
          <div className="lg:col-span-8 min-h-[440px]">
            <AnimatePresence mode="wait">
              <ServiceDetail key={activeService.id} service={activeService} />
            </AnimatePresence>
          </div>
        </div>

        {/* Qualitative Capability Matrix */}
        <CapabilityMatrix />

        {/* Interactive Stack Ecosystem Visualizer */}
        <StackVisualizer />

        {/* 5-Stage Engineering Build Process */}
        <BuildProcess />

        {/* Conversion CTA */}
        <ServicesCTA />
      </Container>
    </section>
  );
}
