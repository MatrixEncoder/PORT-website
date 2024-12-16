import React from 'react';
import { cn } from '../../../utils/cn';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function GlowButton({ children, variant = 'primary', className, ...props }: GlowButtonProps) {
  return (
    <button
      className={cn(
        'relative rounded-lg px-4 py-2 transition-all duration-300',
        'hover:scale-105',
        'after:absolute after:inset-0 after:rounded-lg after:blur-xl after:opacity-0 after:transition-opacity after:duration-300',
        'hover:after:opacity-100',
        variant === 'primary' 
          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500'
          : 'bg-gray-800 text-gray-200 after:bg-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}