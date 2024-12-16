import { useState, useCallback } from 'react';
import { getResponse } from '../services/chatbot';
import type { Message } from '../types/chat';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "QUIET 🙂🙂🙂"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI thinking
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get response
    const response = getResponse();
    
    const botMessage: Message = {
      role: 'assistant',
      content: response.text
    };
    
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  }, []);

  return { messages, sendMessage, isLoading };
}