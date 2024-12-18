import { useState, useEffect } from 'react';

const NEWS = [
  {
    text: "⚠️ ALERT: Major ransomware attack targets healthcare facilities across Europe",
    warning: true
  },
  {
    text: "🔒 New zero-day vulnerability discovered in popular web browsers - Updates recommended",
    warning: true
  },
  {
    text: "🛡️ AI-powered security system thwarts sophisticated phishing campaign",
    warning: false
  },
  {
    text: "💻 Tech giants collaborate on quantum-resistant encryption standards",
    warning: false
  },
  {
    text: "⚡ Critical infrastructure facilities strengthen cybersecurity measures",
    warning: false
  },
  {
    text: "🌐 Global cybersecurity summit announces breakthrough in threat detection",
    warning: false
  },
  {
    text: "⚠️ URGENT: Large-scale DDoS attacks targeting financial institutions",
    warning: true
  },
  {
    text: "🔐 New blockchain-based security protocol shows promising results",
    warning: false
  }
];

export function useCyberNews() {
  const [currentNews, setCurrentNews] = useState(NEWS[0].text);
  const [isWarning, setIsWarning] = useState(NEWS[0].warning);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % NEWS.length;
        setCurrentNews(NEWS[newIndex].text);
        setIsWarning(NEWS[newIndex].warning);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { currentNews, isWarning };
}