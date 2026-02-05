import React, { useState, useEffect } from 'react';
import famous from '@/content/famousQuotes';

const FooterQuotes: React.FC = () => {
  const [quote, setQuote] = useState(famous[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Initial random quote
    setQuote(famous[Math.floor(Math.random() * famous.length)]);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setQuote(famous[Math.floor(Math.random() * famous.length)]);
        setIsVisible(true);
      }, 500); // Wait for fade out
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 max-w-md min-h-[80px]">
      <p 
        className={`text-white/60 text-sm md:text-base italic transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        "{quote.proverb}"
      </p>
      <p 
        className={`text-primary/60 text-xs font-mono uppercase tracking-wider transition-opacity duration-500 ease-in-out delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        — {quote.from || 'Unknown'}
      </p>
    </div>
  );
};

export default FooterQuotes;
