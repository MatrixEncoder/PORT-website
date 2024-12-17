import { useState, useCallback, useEffect } from 'react';
import type { Message } from '../types/chat';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there, how can I help you?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (isDisabled) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Add maintenance message and disable chat
    setTimeout(() => {
      const botMessage: Message = {
        role: 'assistant',
        content: "Sorry, the services are currently under maintanance. Please contact Sir Suryansh Srivastava for further updates."
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      setIsDisabled(true);

      // Close chat after delay
      setTimeout(() => {
        document.dispatchEvent(new CustomEvent('closeChatBot'));
      }, 3000);
    }, 1000);
  }, [isDisabled]);

  return { messages, sendMessage, isLoading, isDisabled };
}