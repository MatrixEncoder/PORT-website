import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { useCyberNews } from '../../hooks/useCyberNews';

export function CyberNewsTicker() {
  const { currentNews, isWarning } = useCyberNews();

  return (
    <div className="fixed top-16 left-0 w-full bg-black/90 border-b border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center space-x-3">
          {isWarning ? (
            <AlertTriangle className="h-5 w-5 text-red-500 animate-pulse" />
          ) : (
            <Shield className="h-5 w-5 text-cyan-500" />
          )}
          <div className="overflow-hidden">
            <p 
              className={`whitespace-nowrap animate-marquee ${
                isWarning ? 'text-red-500' : 'text-cyan-500'
              }`}
            >
              {currentNews}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}