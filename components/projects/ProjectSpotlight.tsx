'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/ui/Icons';
import { MagneticButton } from '@/components/hero/MagneticButton';
import { ProjectPreview } from './ProjectPreview';
import { ArchitectureFlow } from './ArchitectureFlow';
import { TechnicalHighlights } from './TechnicalHighlights';
import { ProjectMetrics } from './ProjectMetrics';
import { ExternalLink, Sparkles } from 'lucide-react';

interface ProjectSpotlightProps {
  project: Project;
  projectIndex: number;
  onOpenCaseStudy: () => void;
}

export function ProjectSpotlight({
  project,
  projectIndex,
  onOpenCaseStudy,
}: ProjectSpotlightProps) {
  const formattedIndex = (projectIndex + 1).toString().padStart(2, '0');

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex flex-col gap-10"
    >
      {/* 1. Main Spotlight Row: Editorial Details (Left) + Interactive Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Project Metadata, Title, Description & Action Group (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          {/* Index & Category Header */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-xs font-mono font-bold text-[#4F8CFF]">
              PROJECT {formattedIndex}
            </span>
            <span className="text-white/20">•</span>
            <Badge variant="accent" size="sm" dot={project.featured}>
              {project.category}
            </Badge>
            <span className="text-xs font-mono text-[#64748B]">{project.year}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            {project.title}
          </h3>

          {/* Short Narrative Description */}
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Key Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.stack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#080E1A] text-[#CBD5E1] border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-4">
            <MagneticButton strength={0.25}>
              <Button
                size="md"
                variant="primary"
                onClick={onOpenCaseStudy}
                rightIcon={<Sparkles className="w-4 h-4" />}
                className="shadow-lg shadow-[#4F8CFF]/20 hover:shadow-[#4F8CFF]/35"
              >
                View Case Study
              </Button>
            </MagneticButton>

            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="md" variant="secondary" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                  Live Demo
                </Button>
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#94A3B8] hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
                aria-label={`View source code for ${project.title}`}
              >
                <Icons.Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* Right Column: Interactive Browser Preview Window (lg:col-span-7) */}
        <div className="lg:col-span-7 w-full flex items-center justify-center">
          <ProjectPreview
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        </div>
      </div>

      {/* 2. Architecture Flow & System Pipeline Preview */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080E1A]/80 border border-white/[0.08] backdrop-blur-md">
        <ArchitectureFlow
          architecture={project.architecture}
          accentColor={project.accent}
        />
      </div>

      {/* 3. Engineering Decisions & Technical Highlights */}
      <TechnicalHighlights
        highlights={project.technicalHighlights}
        accentColor={project.accent}
      />

      {/* 4. Verified System Metrics Row */}
      <ProjectMetrics
        metrics={project.metrics}
        accentColor={project.accent}
      />
    </motion.div>
  );
}
