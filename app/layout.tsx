import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { personalProfile } from '@/data/profile';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(personalProfile.portfolio || 'https://dhanush.dev'),
  title: {
    default: `${personalProfile.name} | ${personalProfile.title}`,
    template: `%s | ${personalProfile.name}`,
  },
  description: personalProfile.headline,
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'AI Systems Engineer',
    'Next.js 16',
    'TypeScript',
    'Web Architecture',
    'Interactive 3D UI',
    'RAG Systems',
    'PostgreSQL',
    'n8n Automation',
  ],
  authors: [{ name: personalProfile.name, url: personalProfile.portfolio }],
  creator: personalProfile.name,
  publisher: personalProfile.name,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalProfile.portfolio,
    title: `${personalProfile.name} | ${personalProfile.title}`,
    description: personalProfile.headline,
    siteName: `${personalProfile.name} Portfolio System`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalProfile.name} | ${personalProfile.title}`,
    description: personalProfile.headline,
    creator: '@dhanush_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#04070D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${personalProfile.portfolio}/#person`,
        name: personalProfile.name,
        jobTitle: 'Full Stack Software Developer & AI Systems Engineer',
        url: personalProfile.portfolio,
        email: personalProfile.email,
        sameAs: [
          personalProfile.github,
          personalProfile.linkedin,
          personalProfile.twitter,
        ].filter(Boolean),
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Salem',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'India',
        },
        knowsAbout: [
          'Full Stack Web Development',
          'Next.js & React Ecosystem',
          'TypeScript & Node.js',
          'PostgreSQL & Prisma ORM',
          'AI & RAG Systems',
          'pgvector & Vector Search',
          'Autonomous n8n Workflow Automation',
          'Docker Containerization',
          'Hardware Canvas 2D & WebGL Graphics',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${personalProfile.portfolio}/#website`,
        url: personalProfile.portfolio,
        name: `${personalProfile.name} // Developer Universe`,
        description: personalProfile.headline,
        publisher: {
          '@id': `${personalProfile.portfolio}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#04070D] text-[#F8FAFC] antialiased flex flex-col font-sans selection:bg-[#4F8CFF]/20 selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
