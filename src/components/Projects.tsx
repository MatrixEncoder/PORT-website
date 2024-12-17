import React from 'react';
import { Shield, Brain, Network, Bot } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectGrid } from './projects/ProjectGrid';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
             style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectGrid>
      </div>
    </section>
  );
}