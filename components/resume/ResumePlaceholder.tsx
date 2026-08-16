import React from 'react';
import { personalProfile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FileDown, Eye } from 'lucide-react';

export function ResumePlaceholder() {
  return (
    <section id="resume" className="py-20 sm:py-28 border-t border-white/[0.06] relative">
      <Container size="md" className="text-center">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Download Professional Resume"
          subtitle="A comprehensive single-page overview of professional experience, education, and technical competencies."
        />

        <div className="glass-card rounded-3xl p-8 sm:p-10 max-w-xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 flex items-center justify-center text-[#4F8CFF] mb-4">
            <FileDown className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
            {personalProfile.name} — Full Stack Resume
          </h3>
          <p className="text-xs text-[#94A3B8] mb-6">
            PDF Document • Updated {new Date().getFullYear()} • Includes full project breakdown
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={personalProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="md" variant="primary" leftIcon={<Eye className="w-4 h-4" />}>
                View PDF
              </Button>
            </a>
            <a
              href={personalProfile.resumeUrl}
              download
            >
              <Button size="md" variant="secondary" leftIcon={<FileDown className="w-4 h-4" />}>
                Download Copy
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
