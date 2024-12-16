import { useState, useEffect } from 'react';

const FACTS = [
  "Did you know? The first computer game was created in 1962 called 'Spacewar!'",
  "The gaming industry generates more revenue than movies and music combined!",
  "The term 'Easter Egg' in gaming originated from Adventure on Atari 2600",
  "The PlayStation 2 is the best-selling gaming console of all time",
  "Nintendo was founded in 1889 as a playing card company",
  "The first gaming console, the Magnavox Odyssey, was released in 1972",
  "Minecraft has sold over 238 million copies worldwide",
  "The most expensive game ever developed was GTA V at $265 million",
  "The first video game tournament was held in 1972 at Stanford University",
  "Super Mario was originally called 'Jumpman' in Donkey Kong"
];

export function useFacts() {
  const [currentFact, setCurrentFact] = useState<string>('');

  useEffect(() => {
    const showNewFact = () => {
      const randomFact = FACTS[Math.floor(Math.random() * FACTS.length)];
      setCurrentFact(randomFact);
    };

    // Show initial fact
    showNewFact();

    // Change fact every 10 seconds
    const interval = setInterval(showNewFact, 10000);

    return () => clearInterval(interval);
  }, []);

  return { currentFact };
}