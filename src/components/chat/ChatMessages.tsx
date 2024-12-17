import React from 'react';
import ChatMessage from './ChatMessage';
import type { Message } from '../../types/chat';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      {isLoading && (
        <div className="flex items-center space-x-2 text-gray-400">
          <div className="animate-bounce">●</div>
          <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</div>
          <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>●</div>
        </div>
      )}
    </div>
  );
}