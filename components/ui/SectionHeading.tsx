import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  gradientTitle?: boolean;
}

export function SectionHeading({
  className,
  badge,
  title,
  subtitle,
  align = 'center',
  gradientTitle = false,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col mb-12 sm:mb-16',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
      {...props}
    >
      {badge ? (
        <div className="mb-3">
          <Badge variant="accent" dot>
            {badge}
          </Badge>
        </div>
      ) : null}

      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC]',
          gradientTitle && 'text-gradient-primary'
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3.5 text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
