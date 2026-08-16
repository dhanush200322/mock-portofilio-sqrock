'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Icons } from '@/components/ui/Icons';
import { ArchitectureFlow } from './ArchitectureFlow';
import { TechnicalHighlights } from './TechnicalHighlights';
import { ProjectMetrics } from './ProjectMetrics';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Terminal,
  CheckCircle2,
  Cpu,
  Layers,
  Server,
  Database,
  Cloud,
  Bot,
} from 'lucide-react';

interface CaseStudyPanelProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export function CaseStudyPanel({
  project,
  isOpen,
  onClose,
  onSelectProject,
  allProjects,
}: CaseStudyPanelProps) {
  // Lock body scroll while modal is open & listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  // Compute previous and next project
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Backdrop Blur & Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#04070D]/85 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] rounded-3xl bg-[#080E1A] border border-white/15 shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* 1. Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0D1627] border-b border-white/[0.08] sticky top-0 z-30">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10"
                  style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                >
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">
                    Engineering Case Study // {project.category}
                  </span>
                  <h3 id="case-study-title" className="text-sm sm:text-base font-bold text-[#F8FAFC]">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study dialog"
                className="w-9 h-9 rounded-xl bg-[#04070D] border border-white/10 text-[#94A3B8] hover:text-white hover:border-white/25 flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 2. Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10 custom-scrollbar">
              {/* Hero Banner inside case study */}
              <div className="p-6 sm:p-8 rounded-2xl bg-radial-gradient border border-white/[0.08] relative overflow-hidden">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="accent" size="sm">
                    {project.category}
                  </Badge>
                  <Badge variant="outline" size="sm">
                    Build Year: {project.year}
                  </Badge>
                  <Badge variant="success" size="sm" dot>
                    {project.status}
                  </Badge>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
                  {project.title}
                </h4>

                <p className="text-sm sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Primary Actions inside Case Study */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="primary" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                        Live Production Demo
                      </Button>
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" leftIcon={<Icons.Github className="w-3.5 h-3.5" />}>
                        View Repository
                      </Button>
                    </a>
                  ) : null}
                </div>
              </div>

              {/* 02 & 03: Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2">
                    <span>01 // The Engineering Challenge</span>
                  </div>
                  <h5 className="text-base font-bold text-[#F8FAFC] mb-2">Problem Statement</h5>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                    <span>02 // Architectural Approach</span>
                  </div>
                  <h5 className="text-base font-bold text-[#F8FAFC] mb-2">Engineered Solution</h5>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* 04: System Architecture Flow */}
              <div className="p-6 rounded-2xl bg-[#04070D]/90 border border-white/[0.08]">
                <ArchitectureFlow
                  architecture={project.architecture}
                  accentColor={project.accent}
                />
              </div>

              {/* 05: Structured Technology Stack Breakdown */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-4 h-4" style={{ color: project.accent }} />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                    Comprehensive Technology Stack
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Frontend */}
                  <div className="p-4 rounded-xl bg-[#0D1627]/80 border border-white/[0.06]">
                    <span className="text-xs font-mono font-bold text-[#4F8CFF] flex items-center gap-1.5 mb-2">
                      <Layers className="w-3.5 h-3.5" /> Frontend
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.frontend.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#04070D] text-[#CBD5E1]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="p-4 rounded-xl bg-[#0D1627]/80 border border-white/[0.06]">
                    <span className="text-xs font-mono font-bold text-[#9F5CFF] flex items-center gap-1.5 mb-2">
                      <Server className="w-3.5 h-3.5" /> Backend & APIs
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.backend.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#04070D] text-[#CBD5E1]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div className="p-4 rounded-xl bg-[#0D1627]/80 border border-white/[0.06]">
                    <span className="text-xs font-mono font-bold text-[#38BDF8] flex items-center gap-1.5 mb-2">
                      <Database className="w-3.5 h-3.5" /> Database & Cache
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.database.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#04070D] text-[#CBD5E1]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Infrastructure & AI */}
                  <div className="p-4 rounded-xl bg-[#0D1627]/80 border border-white/[0.06]">
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 mb-2">
                      {project.aiTechnologies ? <Bot className="w-3.5 h-3.5" /> : <Cloud className="w-3.5 h-3.5" />}
                      {project.aiTechnologies ? 'AI / Infrastructure' : 'Cloud Deployment'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.infrastructure.concat(project.aiTechnologies || []).map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#04070D] text-[#CBD5E1]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 06: Key Features Checklist */}
              <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold block mb-4">
                  Delivered Feature Matrix
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: project.accent }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07: Engineering Decisions */}
              <TechnicalHighlights
                highlights={project.technicalHighlights}
                accentColor={project.accent}
              />

              {/* 08: Verified Telemetry Metrics */}
              <ProjectMetrics
                metrics={project.metrics}
                accentColor={project.accent}
              />
            </div>

            {/* 3. Modal Bottom Navigation (Prev / Next Case Study) */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0D1627] border-t border-white/[0.08] sticky bottom-0 z-30">
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500 rounded p-1"
                aria-label={`Previous Case Study: ${prevProject.title}`}
              >
                <ChevronLeft className="w-4 h-4 text-[#4F8CFF]" />
                <span className="hidden sm:inline">Prev:</span>
                <span className="font-semibold text-[#F8FAFC] truncate max-w-[140px] sm:max-w-xs">
                  {prevProject.shortTitle || prevProject.title}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500 rounded p-1"
                aria-label={`Next Case Study: ${nextProject.title}`}
              >
                <span className="hidden sm:inline">Next:</span>
                <span className="font-semibold text-[#F8FAFC] truncate max-w-[140px] sm:max-w-xs">
                  {nextProject.shortTitle || nextProject.title}
                </span>
                <ChevronRight className="w-4 h-4 text-[#4F8CFF]" />
              </button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
