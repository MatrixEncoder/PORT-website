import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  href: string;
  color?: 'cyan' | 'purple';
}

export function IconButton({ icon: Icon, href, color = 'cyan' }: IconButtonProps) {
  return (
    <a
      href={href}
      className={`text-gray-400 hover:text-${color}-500 transition-colors`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6" />
    </a>
  );
}