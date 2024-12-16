import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { useChat } from '../../hooks/useChat';
import type { Message } from '../../types/chat';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const { messages, sendMessage, isLoading } = useChat();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500); // Match this with CSS animation duration
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    sendMessage(input);
    setInput('');
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Interface */}
      {isOpen && (
        <div 
          className={`absolute bottom-16 right-0 w-96 h-[32rem] bg-gray-900/95 backdrop-blur-lg rounded-lg border border-gray-800 shadow-xl flex flex-col
            ${isClosing 
              ? 'animate-slide-out-bottom opacity-0' 
              : 'animate-slide-in-bottom opacity-100'
            }`}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-500" />
              AI Assistant
            </h3>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
          >
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

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => !isOpen && setIsOpen(true)}
        className="relative bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-110"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        
        {/* Hover Message */}
        {isHovered && !isOpen && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
            Greetings! How may I assist you?
          </div>
        )}
      </button>
    </div>
  );
}