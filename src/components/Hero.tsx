import React from 'react';
import { Shield, Brain, Terminal, Code, Database, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="h-8 bg-cyan-900/20 animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center space-x-4 mb-8">
          <Shield className="h-12 w-12 text-cyan-500 animate-pulse" />
          <Brain className="h-12 w-12 text-purple-500 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
            Cybersecurity & AI
          </span>
          <br />
          Expert
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Specializing in AI-powered security solutions and machine learning systems
          that protect and innovate.
        </p>
        
        <div className="flex justify-center space-x-6">
          <Terminal className="h-8 w-8 text-cyan-500" />
          <Code className="h-8 w-8 text-purple-500" />
          <Database className="h-8 w-8 text-cyan-500" />
          <Lock className="h-8 w-8 text-purple-500" />
        </div>
      </div>
      
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
    </div>
  );
}