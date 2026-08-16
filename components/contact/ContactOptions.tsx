'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { contactData } from '@/data/contact';
import { Icons } from '@/components/ui/Icons';
import { fadeUp } from '@/lib/animations';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';

interface ContactChannel {
  id: string;
  name: string;
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
  isExternal: boolean;
}

const contactChannels: ContactChannel[] = [
  {
    id: 'chan-email',
    name: 'Email Dispatch',
    label: contactData.email,
    description: 'Fastest route for full-time roles, contract inquiries, or technical questions.',
    href: `mailto:${contactData.email}?subject=Engineering%20Inquiry%20from%20Portfolio`,
    icon: <Mail className="w-5 h-5" />,
    accent: '#4F8CFF',
    isExternal: false,
  },
  {
    id: 'chan-linkedin',
    name: 'LinkedIn Network',
    label: 'linkedin.com/in/dhanush-dev',
    description: 'Professional career track, verified recommendations, and direct messaging.',
    href: contactData.linkedin,
    icon: <Icons.Linkedin className="w-5 h-5" />,
    accent: '#9F5CFF',
    isExternal: true,
  },
  {
    id: 'chan-github',
    name: 'GitHub Repositories',
    label: 'github.com/dhanush-dev',
    description: 'Explore full-stack repositories, open-source tooling, and architecture blueprints.',
    href: contactData.github,
    icon: <Icons.Github className="w-5 h-5" />,
    accent: '#38BDF8',
    isExternal: true,
  },
  {
    id: 'chan-resume',
    name: 'Curriculum Vitae',
    label: 'View Engineering Resume',
    description: 'Structured breakdown of career trajectory, academic foundations, and skills.',
    href: '#resume',
    icon: <FileText className="w-5 h-5" />,
    accent: '#10B981',
    isExternal: false,
  },
];

export function ContactOptions() {
  const handleScrollToResume = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#resume') {
      e.preventDefault();
      const resumeEl = document.getElementById('resume');
      if (resumeEl) {
        resumeEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      {contactChannels.map((channel, idx) => (
        <motion.a
          key={channel.id}
          href={channel.href}
          onClick={(e) => handleScrollToResume(e, channel.href)}
          target={channel.isExternal ? '_blank' : undefined}
          rel={channel.isExternal ? 'noopener noreferrer' : undefined}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: idx * 0.08 }}
          className="glass-card-interactive rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between group focus-visible:outline-2 focus-visible:outline-blue-500"
          aria-label={`Open ${channel.name}: ${channel.label}`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-2.5 rounded-xl bg-[#080E1A] border border-white/10 group-hover:border-white/20 transition-colors shadow-xs"
                style={{ color: channel.accent }}
              >
                {channel.icon}
              </div>

              <ArrowUpRight
                className="w-4 h-4 text-[#64748B] group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>

            <h5 className="text-sm font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-1">
              {channel.name}
            </h5>

            <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
              {channel.description}
            </p>
          </div>

          <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono">
            <span
              className="font-semibold truncate max-w-[200px]"
              style={{ color: channel.accent }}
            >
              {channel.label}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
