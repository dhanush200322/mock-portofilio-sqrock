import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

export const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(
  (
    {
      className,
      variant = 'secondary',
      size = 'md',
      'aria-label': ariaLabel,
      href,
      target,
      rel,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none active:scale-95 cursor-pointer shrink-0';

    const variants = {
      primary:
        'bg-[#4F8CFF] hover:bg-[#3B7BF6] text-white shadow-md shadow-[#4F8CFF]/20 border border-[#4F8CFF]/40',
      secondary:
        'bg-[#0D1627] hover:bg-[#15233D] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10 hover:border-white/20',
      outline:
        'bg-transparent hover:bg-[#4F8CFF]/10 text-[#4F8CFF] border border-[#4F8CFF]/40 hover:border-[#4F8CFF]',
      ghost:
        'bg-transparent hover:bg-white/5 text-[#94A3B8] hover:text-[#F8FAFC]',
    };

    const sizes = {
      sm: 'w-8 h-8 p-1.5 text-xs',
      md: 'w-10 h-10 p-2 text-sm',
      lg: 'w-12 h-12 p-3 text-base',
    };

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          aria-label={ariaLabel}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        disabled={disabled}
        aria-label={ariaLabel}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
