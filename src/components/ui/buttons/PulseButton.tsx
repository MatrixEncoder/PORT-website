import React from 'react';
import { cn } from '../../../utils/cn';

interface PulseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function PulseButton({ children, variant = 'primary', className, ...props }: PulseButtonProps) {
  return (
    <button
      className={cn(
        'relative overflow-hidden rounded-lg px-4 py-2 transition-all duration-300',
        'hover:scale-105 hover:shadow-lg',
        'before:absolute before:inset-0 before:animate-pulse-slow',
        variant === 'primary' 
          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white before:bg-white/20'
          : 'bg-gray-800 text-gray-200 before:bg-gray-700/20',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}