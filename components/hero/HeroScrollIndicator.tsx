'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroScrollIndicatorProps {
  scrollYProgress?: MotionValue<number>;
  onScrollClick?: () => void;
}

export function HeroScrollIndicator({
  scrollYProgress,
  onScrollClick,
}: HeroScrollIndicatorProps) {
  // Gracefully fades out as soon as the user starts scrolling down
  const opacity = useTransform(
    scrollYProgress || { get: () => 0 } as unknown as MotionValue<number>,
    [0, 0.15],
    [1, 0]
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onScrollClick) {
      e.preventDefault();
      onScrollClick();
    }
  };

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center pointer-events-auto"
    >
      <a
        href="#about"
        onClick={handleClick}
        aria-label="Scroll down to About section"
        className="group flex flex-col items-center gap-1.5 text-[#64748B] hover:text-[#94A3B8] transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 rounded-md p-1.5 select-none"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center bg-[#080E1A]/60 group-hover:border-[#4F8CFF]/40 transition-colors"
        >
          <ChevronDown className="w-3.5 h-3.5 text-[#4F8CFF]" />
        </motion.div>
      </a>
    </motion.div>
  );
}
