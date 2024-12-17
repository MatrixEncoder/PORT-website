import React from 'react';

interface ProjectGridProps {
  children: React.ReactNode;
}

export function ProjectGrid({ children }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {children}
    </div>
  );
}