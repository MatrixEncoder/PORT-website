import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isDisabled: boolean;
  isLoading: boolean;
}

export function ChatInput({ value, onChange, onSubmit, isDisabled, isLoading }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-4 border-t border-gray-800">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={isDisabled ? "Chat disabled" : "Type your message..."}
          disabled={isDisabled}
          className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || isDisabled}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-2 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}