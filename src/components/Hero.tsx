import React from 'react';
import { Shield, Brain, Terminal, Code, Database, Lock } from 'lucide-react';
import { GradientText } from './ui/GradientText';

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
        <div className="flex justify-center mb-4">
          <Shield className="h-16 w-16 text-cyan-500 animate-pulse" />
        </div>
        
        <h2 className="text-2xl text-cyan-400 font-bold mb-2 animate-fade-in">
          CYBER-SENTINEL
        </h2>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <GradientText className="animate-gradient">
            Digital Guardians of
          </GradientText>
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 text-transparent bg-clip-text animate-gradient">
            Tomorrow's Security
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Pioneering the fusion of AI-driven security solutions and advanced threat detection
          to safeguard the digital frontier.
        </p>
        
        <div className="flex justify-center space-x-6">
          <Terminal className="h-8 w-8 text-cyan-500 animate-float" style={{ animationDelay: '0s' }} />
          <Code className="h-8 w-8 text-purple-500 animate-float" style={{ animationDelay: '0.2s' }} />
          <Database className="h-8 w-8 text-cyan-500 animate-float" style={{ animationDelay: '0.4s' }} />
          <Lock className="h-8 w-8 text-purple-500 animate-float" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>
      
      {/* Enhanced glowing orb effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-slow" />
    </div>
  );
}