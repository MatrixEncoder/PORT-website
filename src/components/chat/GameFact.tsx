import React from 'react';
import { Lightbulb } from 'lucide-react';

interface GameFactProps {
  fact: string;
}

export default function GameFact({ fact }: GameFactProps) {
  return (
    <div className="absolute bottom-full right-0 mb-4 max-w-sm bg-gray-900/95 backdrop-blur-lg rounded-lg border border-gray-800 shadow-lg p-4 animate-fade-in">
      <div className="flex items-start space-x-3">
        <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
        <p className="text-gray-300 text-sm">{fact}</p>
      </div>
    </div>
  );
}