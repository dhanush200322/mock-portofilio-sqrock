import React from 'react';
import { educationData } from '@/data/education';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export function EducationPlaceholder() {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-white/[0.06] relative">
      <Container size="lg">
        <SectionHeading
          badge="Academic Foundations"
          title="Education & Credentials"
          subtitle="Formal academic training, research focus, and specialized certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="glass-card-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#080E1A] border border-white/10 text-[#4F8CFF]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  {edu.grade ? (
                    <Badge variant="accent" size="sm">
                      {edu.grade}
                    </Badge>
                  ) : null}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-[#9F5CFF] mb-3">
                  {edu.institution}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B] mb-4">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.startDate} — {edu.endDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>

                {edu.description ? (
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {edu.description}
                  </p>
                ) : null}

                {edu.highlights && edu.highlights.length > 0 ? (
                  <div className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
