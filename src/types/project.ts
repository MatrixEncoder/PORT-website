import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'cyan' | 'purple';
}