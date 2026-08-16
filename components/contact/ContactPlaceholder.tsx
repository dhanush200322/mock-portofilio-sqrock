'use client';

import React, { useState } from 'react';
import { personalProfile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Icons } from '@/components/ui/Icons';
import { Mail, Copy, Check, Send } from 'lucide-react';

export function ContactPlaceholder() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/[0.06] bg-radial-gradient relative">
      <Container size="md" className="text-center">
        <SectionHeading
          badge="Initiate Dialogue"
          title="Let's build something extraordinary together"
          subtitle="Whether you're looking for engineering leadership, system architecture, or full stack execution, my inbox is open."
        />

        <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto">
          {/* Status Indicator */}
          <div className="inline-flex mb-6">
            <Badge variant="success" dot>
              {personalProfile.availability.label}
            </Badge>
          </div>

          <p className="text-sm text-[#94A3B8] mb-8 leading-relaxed">
            I am currently open to high-impact software engineering roles, technical advisory, and select client collaborations.
          </p>

          {/* Email Box & Copy Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2 rounded-2xl bg-[#080E1A] border border-white/10 mb-8 max-w-lg mx-auto">
            <div className="flex items-center gap-2.5 px-3 text-sm font-mono text-[#F8FAFC]">
              <Mail className="w-4 h-4 text-[#4F8CFF]" />
              <span>{personalProfile.email}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleCopyEmail}
                leftIcon={copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                className="w-full sm:w-auto"
                aria-label="Copy email address"
              >
                {copied ? 'Copied' : 'Copy'}
              </Button>
              <a
                href={`mailto:${personalProfile.email}`}
                className="w-full sm:w-auto"
              >
                <Button
                  size="sm"
                  variant="primary"
                  leftIcon={<Send className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto"
                >
                  Email Me
                </Button>
              </a>
            </div>
          </div>

          {/* Social Channels */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-white/[0.06]">
            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="ghost" leftIcon={<Icons.Github className="w-3.5 h-3.5" />}>
                GitHub
              </Button>
            </a>
            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="ghost" leftIcon={<Icons.Linkedin className="w-3.5 h-3.5" />}>
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
