import React from 'react';
import { 
  Shield, Brain, Lock, Terminal, Code, Database,
  Server, Network, Cpu, Cloud, Bot, LineChart
} from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const skills = [
  { name: "Cybersecurity", icon: Shield, color: "cyan" },
  { name: "Machine Learning", icon: Brain, color: "purple" },
  { name: "Cryptography", icon: Lock, color: "cyan" },
  { name: "Network Security", icon: Network, color: "purple" },
  { name: "Cloud Security", icon: Cloud, color: "cyan" },
  { name: "Data Analysis", icon: LineChart, color: "purple" },
  { name: "System Architecture", icon: Server, color: "cyan" },
  { name: "AI Development", icon: Bot, color: "purple" },
  { name: "Penetration Testing", icon: Terminal, color: "cyan" },
  { name: "Secure Coding", icon: Code, color: "purple" },
  { name: "Database Security", icon: Database, color: "cyan" },
  { name: "Hardware Security", icon: Cpu, color: "purple" }
] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-black/95 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full filter blur-3xl animate-pulse"
            style={{
              background: i % 2 === 0 ? 'rgba(34, 211, 238, 0.1)' : 'rgba(168, 85, 247, 0.1)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex flex-col items-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-300">
                <skill.icon className={`h-10 w-10 mb-4 text-${skill.color}-500 group-hover:animate-pulse`} />
                <span className="text-gray-300 text-center group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}