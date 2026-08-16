export type SkillCategory = 
  | 'Frontend' 
  | 'Backend' 
  | 'Database' 
  | 'AI / Automation' 
  | 'Tools / DevOps' 
  | 'Architecture';

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  iconName?: string;
  level: SkillLevel;
  featured?: boolean;
  yearsOfExperience?: number;
  tags?: string[];
}

export type ProjectCategory = 'Full Stack' | 'Frontend' | 'AI / RAG' | 'Systems' | 'Automation';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureNode {
  step: string;
  title: string;
  description?: string;
  tech: string;
}

export interface TechnicalDecision {
  number: string;
  title: string;
  decision: string;
  rationale: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  year: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  infrastructure: string[];
  aiTechnologies?: string[];
  features: string[];
  architecture: ArchitectureNode[];
  technicalHighlights: TechnicalDecision[];
  projectType: string;
  status: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  previewImages?: string[];
  featured: boolean;
  accent: string;
  metrics: ProjectMetric[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  projects: string[];
  current: boolean;
  companyUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location?: string;
  startDate: string;
  endDate: string;
  duration?: string;
  current?: boolean;
  grade?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  capabilities: string[];
  technologies: string[];
  deliverables: string[];
  relatedProjects: string[];
  accent: string;
  featured?: boolean;
}

export interface ContactInfo {
  name: string;
  role: string;
  location: string;
  availability: 'available' | 'busy' | 'selective';
  availabilityLabel: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  portfolio: string;
  resumeUrl: string;
  responseTime: string;
  preferredWork: string[];
  collaborationTypes: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
  username?: string;
}

export interface ProfileStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  portfolio: string;
  resumeUrl: string;
  availability: {
    status: 'available' | 'busy' | 'selective';
    label: string;
    targetRoles: string[];
  };
  stats: ProfileStat[];
  coreSpecializations: string[];
}

export interface NavItem {
  name: string;
  href: string;
  isAnchor?: boolean;
}
