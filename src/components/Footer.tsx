import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 bg-black/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
          <Sparkles className="h-4 w-4 text-cyan-500" />
          <p>
            This website was built using various AI tools and hundreds of command prompts
          </p>
          <Sparkles className="h-4 w-4 text-purple-500" />
        </div>
      </div>
      
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-px bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50" />
    </footer>
  );
}