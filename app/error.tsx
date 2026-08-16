'use client';

import React, { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely without exposing sensitive traces to DOM
    console.error('Application Runtime Error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24 bg-radial-gradient">
      <Container size="sm" className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#0D1627] border border-red-500/20 flex items-center justify-center text-red-400 mx-auto mb-6 shadow-glow">
          <AlertTriangle className="w-8 h-8 animate-pulse" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2 block">
          Runtime Exception
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
          System Interruption
        </h1>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-md mx-auto mb-8 leading-relaxed">
          An unexpected error occurred while executing digital subsystems. You can attempt to reset the system runtime or return to home.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="md"
            variant="primary"
            onClick={() => reset()}
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Reset Runtime
          </Button>

          <Link href="/">
            <Button
              size="md"
              variant="secondary"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Return Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
