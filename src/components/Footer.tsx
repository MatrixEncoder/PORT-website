import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-6 bg-black/80 border-t border-gray-800">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      {/* Logo */}
      <div className="relative flex justify-center mb-2">
        <Shield className="h-6 w-6 text-cyan-500/50" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-px bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </footer>
  );
}