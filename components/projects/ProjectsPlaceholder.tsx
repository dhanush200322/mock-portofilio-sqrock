import React from 'react';
import { projectsData } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/ui/Icons';
import { ExternalLink, TrendingUp } from 'lucide-react';

export function ProjectsPlaceholder() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-white/[0.06] relative">
      <Container size="xl">
        <SectionHeading
          badge="Featured Portfolio"
          title="Selected Engineering Artifacts"
          subtitle="Production-grade distributed platforms, interactive UI engines, and high-performance applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="glass-card-interactive rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header Meta: Category & Year */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={project.featured ? 'accent' : 'default'} size="sm" dot={project.featured}>
                    {project.category}
                  </Badge>
                  <span className="text-xs font-mono text-[#64748B]">{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-[#4F8CFF] transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Metrics Highlight if present */}
                {project.metrics && project.metrics.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-lg bg-[#080E1A]/80 border border-white/[0.06]">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 shrink-0" />
                          {metric.value}
                        </span>
                        <span className="text-[10px] text-[#64748B] block mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#121E36] text-[#94A3B8] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#94A3B8] hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 rounded p-1"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Icons.Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                ) : <span />}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <Button size="sm" variant="outline" rightIcon={<ExternalLink className="w-3 h-3" />}>
                      Live Demo
                    </Button>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
