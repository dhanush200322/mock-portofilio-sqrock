import React from 'react';
import { personalProfile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MapPin, Mail, Briefcase, CheckCircle2 } from 'lucide-react';

export function AboutPlaceholder() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/[0.06] relative">
      <Container size="lg">
        <SectionHeading
          badge="Identity & Philosophy"
          title="Engineering systems with precision & craft"
          subtitle="A deeper look into background, architectural methodology, and technical core."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio & Philosophy (Left Column) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Background & Focus</h3>
              <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {personalProfile.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Meta information */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#4F8CFF] shrink-0" />
                  <span>{personalProfile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#9F5CFF] shrink-0" />
                  <span>{personalProfile.email}</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{personalProfile.availability.label}</span>
                </div>
              </div>
            </div>

            {/* Core Specializations */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#64748B] mb-4">
                Core Specializations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personalProfile.coreSpecializations.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs sm:text-sm text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics / Stats (Right Column) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalProfile.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card-interactive rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                    {stat.value}
                  </span>
                  <h4 className="text-sm font-medium text-[#4F8CFF] mt-1">{stat.label}</h4>
                </div>
                {stat.subtext ? (
                  <p className="text-xs text-[#64748B] mt-3 pt-3 border-t border-white/[0.06]">
                    {stat.subtext}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
