import React from 'react';
import { skillsData } from '@/data/skills';
import { SkillCategory } from '@/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Layers, Server, Database, Bot, Wrench, Shield } from 'lucide-react';

const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  Frontend: <Layers className="w-4 h-4 text-[#4F8CFF]" />,
  Backend: <Server className="w-4 h-4 text-[#9F5CFF]" />,
  Database: <Database className="w-4 h-4 text-[#38BDF8]" />,
  'AI / Automation': <Bot className="w-4 h-4 text-emerald-400" />,
  'Tools / DevOps': <Wrench className="w-4 h-4 text-amber-400" />,
  Architecture: <Shield className="w-4 h-4 text-[#4F8CFF]" />,
};

export function SkillsPlaceholder() {
  const categories: SkillCategory[] = [
    'Frontend',
    'Backend',
    'Database',
    'AI / Automation',
    'Tools / DevOps',
    'Architecture',
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-white/[0.06] bg-[#020408]/50">
      <Container size="lg">
        <SectionHeading
          badge="Technical Stack"
          title="Engineered for scalability & speed"
          subtitle="Curated technologies and architectural capabilities across the modern web stack."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categorySkills = skillsData.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div
                key={category}
                className="glass-card-interactive rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.08]">
                    <div className="p-2 rounded-lg bg-[#080E1A] border border-white/10">
                      {categoryIcons[category]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F8FAFC]">{category}</h3>
                      <span className="text-[11px] text-[#64748B]">
                        {categorySkills.length} Core Technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-col gap-3">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex flex-col p-2.5 rounded-lg bg-[#080E1A]/60 border border-white/[0.05]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
                            {skill.name}
                          </span>
                          <Badge
                            size="sm"
                            variant={skill.level === 'Expert' ? 'accent' : 'outline'}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        {skill.tags && skill.tags.length > 0 ? (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] text-[#64748B] bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/[0.04]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
