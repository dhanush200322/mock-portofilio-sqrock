import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { personalProfile, socialLinks } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { IconButton } from '@/components/ui/IconButton';
import { Icons } from '@/components/ui/Icons';

const iconMap: Record<string, React.ReactNode> = {
  Github: <Icons.Github className="w-4 h-4" />,
  Linkedin: <Icons.Linkedin className="w-4 h-4" />,
  Twitter: <Icons.Twitter className="w-4 h-4" />,
  Mail: <Icons.Mail className="w-4 h-4" />,
};

const footerNav = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '#resume' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#020408] text-[#94A3B8] py-14 relative select-none">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-white/[0.06]">
          {/* Brand Info (md:col-span-6) */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#0D1627] border border-white/10 flex items-center justify-center text-[#4F8CFF]">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-lg font-bold text-[#F8FAFC]">
                {personalProfile.name}
              </span>
            </div>

            <p className="text-xs text-[#64748B] max-w-md leading-relaxed mb-3">
              Full Stack Software Developer & AI Systems Engineer specializing in deterministic web applications, RAG pipelines, and autonomous workflow architectures.
            </p>

            <span className="text-[10px] font-mono text-[#4F8CFF] uppercase tracking-widest font-semibold">
              BUILD WITH INTENT. SHIP WITH PURPOSE.
            </span>
          </div>

          {/* Quick Nav Links (md:col-span-3) */}
          <div className="md:col-span-3 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs font-mono">
            {footerNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#94A3B8] hover:text-[#4F8CFF] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top (md:col-span-3) */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-2.5">
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                href={link.url}
                target="_blank"
                variant="secondary"
                size="md"
                aria-label={link.ariaLabel}
              >
                {iconMap[link.icon] || <Icons.Mail className="w-4 h-4" />}
              </IconButton>
            ))}

            {/* Back to top */}
            <IconButton
              href="#home"
              variant="ghost"
              size="md"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#94A3B8]" />
            </IconButton>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4 font-mono">
          <p>© {currentYear} {personalProfile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Next.js 16 • TypeScript • Tailwind CSS • Framer Motion</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
