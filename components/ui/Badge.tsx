import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'secondary' | 'outline' | 'success' | 'warning';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center font-medium tracking-wide transition-colors rounded-full select-none';

  const variants = {
    default:
      'bg-[#0D1627] text-[#94A3B8] border border-white/10 shadow-xs',
    accent:
      'bg-[#4F8CFF]/10 text-[#4F8CFF] border border-[#4F8CFF]/25 shadow-xs',
    secondary:
      'bg-[#9F5CFF]/10 text-[#9F5CFF] border border-[#9F5CFF]/25 shadow-xs',
    outline:
      'bg-transparent text-[#94A3B8] border border-white/15',
    success:
      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    warning:
      'bg-amber-500/10 text-amber-400 border border-amber-500/25',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {dot ? (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full shrink-0',
            variant === 'accent' && 'bg-[#4F8CFF] animate-pulse',
            variant === 'secondary' && 'bg-[#9F5CFF] animate-pulse',
            variant === 'success' && 'bg-emerald-400 animate-pulse',
            variant === 'warning' && 'bg-amber-400',
            variant === 'default' && 'bg-slate-400',
            variant === 'outline' && 'bg-slate-400'
          )}
        />
      ) : null}
      {children}
    </span>
  );
}
