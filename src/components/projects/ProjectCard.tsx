import React from 'react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
        <Icon className={`h-12 w-12 mb-4 text-${project.color}-500 group-hover:animate-pulse`} />
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
      </div>
    </div>
  );
}