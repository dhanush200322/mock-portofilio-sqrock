import type { Variants, Transition } from 'framer-motion';

export const transitionDefaults: {
  fast: Transition;
  default: Transition;
  slow: Transition;
  spring: Transition;
} = {
  fast: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] },
  default: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  slow: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom?: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom ? custom * 0.1 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom ? custom * 0.1 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom ? custom * 0.1 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (custom?: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: custom ? custom * 0.1 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (custom?: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: custom ? custom * 0.1 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom?: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom ? custom * 0.1 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const heroTextStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const heroTextItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const identityCardReveal: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const philosophyReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom ? custom * 0.15 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const nodeReveal: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom?: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom ? custom * 0.08 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const skillStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const skillCardVariant: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.25 },
  },
};

export const floatingAnimation = (delay: number = 0, duration: number = 4) => ({
  animate: {
    y: [-6, 6, -6],
    rotate: [-1, 1, -1],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
      delay,
    },
  },
});
