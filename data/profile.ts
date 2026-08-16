import { Profile, SocialLink } from '@/types';

export const personalProfile: Profile = {
  name: 'Dhanush',
  title: 'Full Stack & Creative Systems Developer',
  headline: 'Architecting high-performance web systems, AI workflows, and resilient digital architectures.',
  shortBio:
    'Full stack engineer specializing in TypeScript, Next.js, AI/RAG systems, scalable architectures, and modern interactive web graphics. Passionate about engineering clean systems with uncompromising craft and attention to detail.',
  fullBio: [
    'I build fast, robust, and accessible digital products that bridge the gap between technical complexity and intuitive user interfaces.',
    'With a strong foundation in modern frontend architectures, distributed backend APIs, and real-time computing, I focus on creating production-grade applications that perform at scale.',
    'When not coding, I explore emerging web standards, generative graphics, developer tooling, and open-source contributions.',
  ],
  location: 'Salem, India / Remote',
  email: 'dhanush.dev@example.com',
  github: 'https://github.com/dhanush200322',
  linkedin: 'https://www.linkedin.com/in/dhanush-av-618271378/',
  twitter: 'https://x.com/dhanush_dev',
  portfolio: 'https://personal-portfolio-three-wine-23.vercel.app',
  resumeUrl: 'https://drive.google.com/file/d/1m27RZXR6DjHGMMd8Q0dLEbBQRIYTvqmv/view?usp=drive_link',
  availability: {
    status: 'available',
    label: 'Available for high-impact opportunities',
    targetRoles: [
      'Full Stack Software Engineer',
      'Senior Frontend Engineer',
      'AI & Systems Engineer',
    ],
  },
  stats: [
    { label: 'Years Experience', value: '4+', subtext: 'Building production web apps' },
    { label: 'Completed Projects', value: '25+', subtext: 'From enterprise to open source' },
    { label: 'Code Quality / Coverage', value: '98%', subtext: 'Strict typing & automated CI' },
    { label: 'Lighthouse Performance', value: '99+', subtext: 'Optimized Core Web Vitals' },
  ],
  coreSpecializations: [
    'Next.js & React Ecosystem',
    'TypeScript & Systems Design',
    'Interactive UI & Motion Architecture',
    'Scalable API Architecture',
    'High-Performance Web Graphics',
  ],
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/dhanush200322',
    icon: 'Github',
    ariaLabel: 'View GitHub Profile',
    username: '@dhanush200322',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dhanush-av-618271378/',
    icon: 'Linkedin',
    ariaLabel: 'Connect on LinkedIn',
    username: 'dhanush-av-618271378',
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/dhanush_dev',
    icon: 'Twitter',
    ariaLabel: 'Follow on Twitter',
    username: '@dhanush_dev',
  },
  {
    name: 'Email',
    url: 'mailto:dhanush.dev@example.com',
    icon: 'Mail',
    ariaLabel: 'Send an Email',
    username: 'dhanush.dev@example.com',
  },
];
