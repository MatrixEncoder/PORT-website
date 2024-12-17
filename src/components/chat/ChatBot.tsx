import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';
import { useChat } from '../../hooks/useChat';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const { messages, sendMessage, isLoading, isDisabled } = useChat();

  useEffect(() => {
    const handleClose = () => {
      handleCloseChat();
    };

    document.addEventListener('closeChatBot', handleClose);
    return () => document.removeEventListener('closeChatBot', handleClose);
  }, []);

  const handleCloseChat = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isDisabled) return;
    
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
      {isOpen && (
        <div 
          className={`absolute bottom-16 right-0 w-96 h-[32rem] bg-gray-900/95 backdrop-blur-lg rounded-lg border border-gray-800 shadow-xl flex flex-col
            ${isClosing 
              ? 'animate-slide-out-bottom opacity-0 scale-95' 
              : 'animate-slide-in-bottom opacity-100 scale-100'
            } transition-all duration-500 ease-in-out`}
        >
          <ChatHeader onClose={handleCloseChat} />
          <ChatMessages messages={messages} isLoading={isLoading} />
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onSubmit={handleSubmit}
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
        </div>
      )}

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => !isOpen && setIsOpen(true)}
        className="relative bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        
        {isHovered && !isOpen && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
            Greetings! How may I assist you?
          </div>
        )}
      </button>
    </div>
  );
}