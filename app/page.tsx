import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Experience } from '@/components/experience/Experience';
import { Education } from '@/components/education/Education';
import { Services } from '@/components/services/Services';
import { Contact } from '@/components/contact/Contact';
import { ResumeCTA } from '@/components/resume/ResumeCTA';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <Contact />
      <ResumeCTA />
    </div>
  );
}
