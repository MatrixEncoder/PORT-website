import React from 'react';
import { MessageSquare, X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
      <h3 className="text-white font-semibold flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-cyan-500" />
        AI Assistant
      </h3>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white transition-colors transform hover:rotate-90 duration-300"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}