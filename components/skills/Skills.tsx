'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillCategoryNav, CategoryFilter } from './SkillCategoryNav';
import { SkillCard } from './SkillCard';
import { SkillConstellation } from './SkillConstellation';
import { skillStagger } from '@/lib/animations';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = useMemo(
    () => [
      'All',
      'Frontend',
      'Backend',
      'Database',
      'AI / Automation',
      'Tools / DevOps',
      'Architecture',
    ],
    []
  );

  // Compute skill count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryFilter, number> = {
      All: skillsData.length,
      Frontend: 0,
      Backend: 0,
      Database: 0,
      'AI / Automation': 0,
      'Tools / DevOps': 0,
      Architecture: 0,
    };

    skillsData.forEach((s) => {
      if (counts[s.category] !== undefined) {
        counts[s.category]++;
      }
    });

    return counts;
  }, []);

  // Filter skills according to activeCategory
  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return skillsData;
    return skillsData.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 border-t border-white/[0.06] bg-[#020408]/60 relative overflow-hidden"
      aria-label="Technical Skills and Competency Matrix"
    >
      {/* Lightweight SVG Constellation Background */}
      <SkillConstellation />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#4F8CFF]/06 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#9F5CFF]/06 rounded-full blur-[120px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          badge="Technical Stack"
          title="Engineered for speed, scale & intelligence"
          subtitle="Curated technologies, frameworks, and system paradigms applied across production web applications."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* LEFT: Category Navigation Filter (md:col-span-4 lg:col-span-3) */}
          <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28">
            <SkillCategoryNav
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              categoryCounts={categoryCounts}
            />
          </div>

          {/* RIGHT: Dynamic Filtered Skills Grid (md:col-span-8 lg:col-span-9) */}
          <div className="md:col-span-8 lg:col-span-9 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={skillStagger}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
              >
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
