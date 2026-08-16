import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: React.ElementType;
}

export function Container({
  className,
  size = 'lg',
  as: Component = 'div',
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
