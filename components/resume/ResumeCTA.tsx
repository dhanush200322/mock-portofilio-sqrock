'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalProfile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ResumePreview } from './ResumePreview';
import { fadeUp } from '@/lib/animations';
import {
  Download,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export function ResumeCTA() {
  return (
    <section
      id="resume"
      className="py-24 sm:py-32 border-t border-white/[0.06] bg-[#020408]/70 relative overflow-hidden"
      aria-label="Engineering Resume and Qualifications"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4F8CFF]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#9F5CFF]/06 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="Curriculum Vitae"
          title="The Short Version"
          subtitle="Want the complete engineering story? View or download the structured resume detailing production experience, technical architecture, and foundational competencies."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Structured Document Preview Sheet (lg:col-span-7) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 w-full flex items-center justify-center"
          >
            <ResumePreview />
          </motion.div>

          {/* Right Column: Executive Summary & Download CTA (lg:col-span-5) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Engineering Summary</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
              Comprehensive Track Record & Qualifications
            </h3>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
              Includes detailed technical breakdowns of production systems built, architectural decisions, core competencies, and academic honors.
            </p>

            {/* Quick Feature Checklist */}
            <div className="space-y-3 w-full mb-8">
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0 mt-0.5" />
                <span>Next.js 16 App Router, TypeScript & Distributed Node APIs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#9F5CFF] shrink-0 mt-0.5" />
                <span>AI RAG Pipelines, pgvector & Vector Search Indexes</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>B.E. Computer Science & Engineering (First Class Distinction)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={personalProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="md"
                  variant="primary"
                  rightIcon={<ExternalLink className="w-4 h-4" />}
                  className="shadow-lg shadow-[#4F8CFF]/25 w-full sm:w-auto justify-center"
                >
                  View Full Resume
                </Button>
              </a>

              <a
                href={personalProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="md"
                  variant="secondary"
                  leftIcon={<Download className="w-4 h-4" />}
                  className="w-full sm:w-auto justify-center"
                >
                  Open in Google Drive
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
