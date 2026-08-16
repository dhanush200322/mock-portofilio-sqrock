'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroScene } from './HeroScene';
import { HeroLabels } from './HeroLabels';
import { HeroScrollIndicator } from './HeroScrollIndicator';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [scrollProgressVal, setScrollProgressVal] = useState(0);

  // Bind scroll progress for seamless section transition
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgressVal(latest);
    });
  }, [scrollYProgress]);

  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -30]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  // Track normalized pointer movement for subtle parallax
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const normX = (clientX / innerWidth) * 2 - 1;
    const normY = (clientY / innerHeight) * 2 - 1;
    setMousePos({ x: normX, y: normY });
  };

  const handleScrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onPointerMove={handlePointerMove}
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden select-none"
      aria-label="Developer Command Center Hero"
    >
      {/* Layer 1 & 2: Background Grids and Ambient Lights */}
      <HeroBackground mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Main Content & 3D Environment Wrapper with Scroll-driven Parallax */}
      <motion.div
        style={{
          scale: heroScale,
          y: heroY,
          opacity: heroOpacity,
        }}
        className="w-full relative z-10"
      >
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Semantic Headline, Positioning & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <HeroContent onNavClick={handleScrollToSection} />
            </div>

            {/* Right Column: Interactive 3D Geometric Core & Floating Labels */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Floating Technical Labels Layer */}
              <HeroLabels mouseX={mousePos.x} mouseY={mousePos.y} />

              {/* 3D WebGL / GPU Render Canvas */}
              <div className="w-full flex items-center justify-center relative">
                <HeroScene
                  mouseX={mousePos.x}
                  mouseY={mousePos.y}
                  scrollProgress={scrollProgressVal}
                />
              </div>
            </div>
          </div>
        </Container>
      </motion.div>

      {/* Layer 6: Scroll To Explore Indicator */}
      <HeroScrollIndicator
        scrollYProgress={scrollYProgress}
        onScrollClick={() => handleScrollToSection('about')}
      />
    </section>
  );
}
