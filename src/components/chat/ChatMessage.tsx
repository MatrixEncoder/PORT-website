import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Bot, User } from 'lucide-react';
import type { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'assistant';

  return (
    <div className={`flex items-start space-x-3 ${isBot ? 'text-cyan-500' : 'text-purple-500'}`}>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
        {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <div className={`rounded-lg p-3 ${isBot ? 'bg-cyan-500/10' : 'bg-purple-500/10'}`}>
          <ReactMarkdown
            className="text-white prose prose-invert prose-sm max-w-none"
            components={{
              p: ({ children }) => <p className="mb-0">{children}</p>,
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}