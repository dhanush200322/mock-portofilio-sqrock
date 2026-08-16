import { Education } from '@/types';

export const educationData: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science and Engineering',
    institution: 'Anna University Affiliated Engineering Institute',
    location: 'Tamil Nadu, India',
    startDate: '2019',
    endDate: '2023',
    duration: '2019 — 2023',
    current: false,
    grade: 'First Class with Distinction',
    description:
      'Rigorous foundational computer science curriculum with intensive focus on algorithmic problem solving, software engineering methodologies, distributed systems, and modern web application development.',
    highlights: [
      'Core Academic Focus: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Object-Oriented System Design.',
      'Undergraduate Capstone: Architected a real-time collaborative web application with WebSocket synchronization and relational database persistence.',
      'Active leadership in Technical Symposiums, Hackathons, and Open Source Software Workshops.',
    ],
    technologies: [
      'Data Structures & Algorithms',
      'DBMS & SQL',
      'Computer Networks',
      'Operating Systems',
      'System Architecture',
      'C / C++',
      'Java',
      'JavaScript / TypeScript',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Specialization & Continuous Craft',
    field: 'Full Stack Web Architecture & Modern AI Workflows',
    institution: 'Advanced Industry Engineering Tracks',
    location: 'Online / Self-Directed',
    startDate: '2023',
    endDate: 'Present',
    duration: '2023 — Present',
    current: true,
    description:
      'Continuous advanced specialization in modern Next.js 16 App Router paradigms, pgvector semantic search, autonomous n8n workflows, and production cloud infrastructure.',
    highlights: [
      'Engineered multi-tenant microservices and event-driven architectures with strict TypeScript typing.',
      'Deep dive into RAG vector pipelines, semantic search grounding, and streaming token architectures.',
      'Automated DevOps workflows, containerization with Docker, and edge deployments on Vercel.',
    ],
    technologies: [
      'Next.js App Router',
      'PostgreSQL / pgvector',
      'Node.js Microservices',
      'RAG & Vector Embeddings',
      'n8n Automation',
      'Docker Containers',
    ],
  },
];
