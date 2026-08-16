'use client';

import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/projects';
import { Project, ProjectCategory } from '@/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EngineeringGrid } from '@/components/ui/EngineeringGrid';
import { ProjectCategoryNav, ProjectFilterCategory } from './ProjectCategoryNav';
import { ProjectSpotlight } from './ProjectSpotlight';
import { ProjectRail } from './ProjectRail';
import { TechnologyMatrix } from './TechnologyMatrix';
import { CaseStudyPanel } from './CaseStudyPanel';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilterCategory>('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectsData[0]?.id || '');
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  const categories: ProjectFilterCategory[] = useMemo(
    () => ['All', 'Full Stack', 'Frontend', 'AI / RAG', 'Systems', 'Automation'],
    []
  );

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectFilterCategory, number> = {
      All: projectsData.length,
      'Full Stack': 0,
      Frontend: 0,
      'AI / RAG': 0,
      Systems: 0,
      Automation: 0,
    };

    projectsData.forEach((p) => {
      p.categories.forEach((cat) => {
        if (counts[cat] !== undefined) {
          counts[cat]++;
        }
      });
    });

    return counts;
  }, []);

  // Filter projects by activeCategory
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    const targetCat = activeCategory as ProjectCategory;
    return projectsData.filter((p) => p.categories.includes(targetCat));
  }, [activeCategory]);

  // Find currently active project or fallback to first filtered project
  const activeProject = useMemo(() => {
    const found = filteredProjects.find((p) => p.id === selectedProjectId);
    return found || filteredProjects[0] || projectsData[0];
  }, [filteredProjects, selectedProjectId]);

  const activeProjectIndex = useMemo(() => {
    return filteredProjects.findIndex((p) => p.id === activeProject.id);
  }, [filteredProjects, activeProject]);

  const handleSelectCategory = (cat: ProjectFilterCategory) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSelectedProjectId(projectsData[0]?.id || '');
    } else {
      const targetCat = cat as ProjectCategory;
      const firstMatching = projectsData.find((p) => p.categories.includes(targetCat));
      if (firstMatching) {
        setSelectedProjectId(firstMatching.id);
      }
    }
  };

  const handleOpenCaseStudy = (project: Project) => {
    setCaseStudyProject(project);
    setIsCaseStudyOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsCaseStudyOpen(false);
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 border-t border-white/[0.06] bg-radial-gradient relative overflow-hidden"
      aria-label="Featured Projects and Engineering Case Studies"
    >
      {/* Background Engineering Grid */}
      <EngineeringGrid opacity={0.1} />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4F8CFF]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#9F5CFF]/06 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="Selected Work"
          title="Systems I've Built"
          subtitle="A collection of digital products, platforms, and intelligent systems engineered from interface to infrastructure."
          align="center"
        />

        {/* Category Navigation Filter */}
        <div className="flex items-center justify-center mb-12">
          <ProjectCategoryNav
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* Main Cinematic Spotlight Presentation */}
        <AnimatePresence mode="wait">
          {activeProject ? (
            <ProjectSpotlight
              key={activeProject.id}
              project={activeProject}
              projectIndex={activeProjectIndex}
              onOpenCaseStudy={() => handleOpenCaseStudy(activeProject)}
            />
          ) : null}
        </AnimatePresence>

        {/* Horizontal Project Rail Selector */}
        <ProjectRail
          projects={filteredProjects}
          activeProjectId={activeProject.id}
          onSelectProject={(p) => setSelectedProjectId(p.id)}
        />

        {/* Cross-Project Technology Matrix */}
        <TechnologyMatrix />
      </Container>

      {/* Full-Screen Case Study Deep Dive Modal */}
      <CaseStudyPanel
        project={caseStudyProject}
        isOpen={isCaseStudyOpen}
        onClose={handleCloseCaseStudy}
        onSelectProject={(p) => setCaseStudyProject(p)}
        allProjects={projectsData}
      />
    </section>
  );
}
