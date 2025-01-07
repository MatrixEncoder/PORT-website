import React, { useState } from 'react';
import { Shield, Brain, Menu, X, Lock } from 'lucide-react';
import { RobotMascot } from './mascot/RobotMascot';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShieldHovered, setIsShieldHovered] = useState(false);
  const [isBrainHovered, setIsBrainHovered] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div 
                className="relative group"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <Shield className={`h-8 w-8 text-cyan-500 transition-all duration-500 transform ${
                  isShieldHovered ? 'scale-110' : 'animate-float'
                }`} />
                {isShieldHovered && (
                  <div className="absolute inset-0 animate-ping">
                    <Shield className="h-8 w-8 text-cyan-500 opacity-75" />
                  </div>
                )}
                <div className={`absolute inset-0 bg-cyan-500 rounded-full filter blur-xl transition-opacity duration-300 ${
                  isShieldHovered ? 'opacity-20' : 'opacity-0'
                }`} />
              </div>

              <div 
                className="relative group"
                onMouseEnter={() => setIsBrainHovered(true)}
                onMouseLeave={() => setIsBrainHovered(false)}
              >
                <Brain className={`h-8 w-8 text-purple-500 transition-all duration-500 transform ${
                  isBrainHovered ? 'scale-110' : 'animate-float'
                }`} style={{ animationDelay: '0.2s' }} />
                {isBrainHovered && (
                  <>
                    <div className="absolute inset-0 animate-ping">
                      <Brain className="h-8 w-8 text-purple-500 opacity-75" />
                    </div>
                    <div className="absolute inset-0 animate-pulse">
                      <Brain className="h-8 w-8 text-purple-500 opacity-50" />
                    </div>
                  </>
                )}
                <div className={`absolute inset-0 bg-purple-500 rounded-full filter blur-xl transition-opacity duration-300 ${
                  isBrainHovered ? 'opacity-20' : 'opacity-0'
                }`} />
              </div>

              <RobotMascot />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#projects" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                <a href="#skills" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
                <a href="#contact" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Glowing lock icon */}
            <div className="relative hidden md:block">
              <Lock className="h-6 w-6 text-cyan-500 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-500 rounded-full filter blur-md opacity-50 animate-pulse" />
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-cyan-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-500 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-500 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}