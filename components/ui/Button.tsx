import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer rounded-lg';

    const variants = {
      primary:
        'bg-[#4F8CFF] hover:bg-[#3B7BF6] text-white shadow-md shadow-[#4F8CFF]/20 border border-[#4F8CFF]/40 hover:shadow-lg hover:shadow-[#4F8CFF]/30',
      secondary:
        'bg-[#0D1627] hover:bg-[#15233D] text-[#F8FAFC] border border-white/10 hover:border-white/20 shadow-sm',
      outline:
        'bg-transparent hover:bg-[#4F8CFF]/10 text-[#4F8CFF] border border-[#4F8CFF]/40 hover:border-[#4F8CFF] shadow-sm',
      ghost:
        'bg-transparent hover:bg-white/5 text-[#94A3B8] hover:text-[#F8FAFC]',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-md min-h-[32px]',
      md: 'text-sm px-4 py-2.5 gap-2 rounded-lg min-h-[40px]',
      lg: 'text-base px-6 py-3.5 gap-2.5 rounded-xl min-h-[48px]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        <span>{children}</span>
        {!isLoading && rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
      </button>
    );
  }
);

Button.displayName = 'Button';
