import React from 'react';
import { experienceData } from '@/data/experience';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export function ExperiencePlaceholder() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-white/[0.06] bg-[#020408]/50">
      <Container size="lg">
        <SectionHeading
          badge="Career Trajectory"
          title="Professional Engineering Experience"
          subtitle="A track record of engineering leadership, system optimizations, and high-impact delivery."
        />

        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0D1627] border-2 border-[#4F8CFF] group-hover:bg-[#4F8CFF] group-hover:shadow-glow transition-all" />

              <div className="glass-card-interactive rounded-2xl p-6 sm:p-8">
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#4F8CFF] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    {exp.current ? (
                      <Badge variant="accent" size="sm" dot>
                        Current
                      </Badge>
                    ) : null}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-5">
                  {exp.achievements.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080E1A] text-[#64748B] border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
