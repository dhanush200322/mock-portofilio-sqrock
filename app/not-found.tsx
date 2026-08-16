import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24 bg-radial-gradient">
      <Container size="sm" className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#0D1627] border border-white/10 flex items-center justify-center text-[#4F8CFF] mx-auto mb-6 shadow-glow">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block">
          404 Error
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
          Coordinates Not Found
        </h1>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-md mx-auto mb-8 leading-relaxed">
          The requested route does not exist in this digital system. Let&apos;s navigate back to safety.
        </p>

        <Link href="/">
          <Button size="md" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Return to Command Center
          </Button>
        </Link>
      </Container>
    </div>
  );
}
