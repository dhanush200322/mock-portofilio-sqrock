'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { personalProfile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '#resume' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3.5 bg-[#04070D]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      )}
    >
      <Container size="xl">
        <nav
          className="flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-blue-500 rounded-md p-1"
            aria-label={`${personalProfile.name} - Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-[#0D1627] border border-white/15 flex items-center justify-center text-[#4F8CFF] group-hover:border-[#4F8CFF]/50 transition-colors shadow-xs">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[#F8FAFC] group-hover:text-[#4F8CFF] transition-colors">
                {personalProfile.name}
              </span>
              <span className="text-[10px] text-[#64748B] font-mono tracking-wider uppercase">
                Systems & Creative Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 bg-[#080E1A]/80 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 block select-none',
                      isActive
                        ? 'text-white bg-[#1A263D] shadow-xs'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex"
            >
              <Button size="sm" variant="primary" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                Let&apos;s Connect
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-[#0D1627] border border-white/10 text-[#94A3B8] hover:text-white focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen ? (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#080E1A] border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        'block px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                        isActive
                          ? 'text-white bg-[#121E36] font-semibold'
                          : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full block"
              >
                <Button size="sm" variant="primary" className="w-full justify-center">
                  Let&apos;s Connect
                </Button>
              </a>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
