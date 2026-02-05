import React, { useEffect, useRef, useState } from 'react';
import { incomeDelay, incomeExchange } from '@/content/home';

export const HomeRevenue: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Pie Chart Calculation
  const radius = 100; // Maximized radius
  const circumference = 2 * Math.PI * radius;
  const percentage = parseFloat(incomeExchange.ratio) / 100;
  const strokeDashoffset = isVisible ? circumference * (1 - percentage) : circumference;

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col gap-24">
      
      {/* Exchange Income Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-3 md:gap-5">
                <h4 className="text-2xl md:text-3xl  font-bold text-white">{incomeExchange.title}</h4>
                <p className="text-white/60 text-md md:text-lg leading-relaxed">{incomeExchange.description}</p>
                
                <div className="mt-4">
                    <span className="text-sm text-primary/70 uppercase tracking-widest block mb-2">Minter Ratio</span>
                    <span className="text-6xl font-bold text-white tracking-tighter shimmer-text">
                        {incomeExchange.ratio}
                    </span>
                </div>
            </div>

            {/* Pie Chart */}
            <div className="flex justify-center relative">
                <div className="flex items-center justify-center relative ">
                    <div className="w-[250px] h-[250px]">
                      <svg className="w-full h-full transform  ">
                        <circle
                            cx="125"
                            cy="125"
                            r={radius}
                            stroke="rgba(97, 95, 95, 0.5)"
                            strokeWidth="30" 
                            fill="transparent"
                            viewBox="0 0 250 250"
                        />
                        <circle
                            cx="125"
                            cy="125"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="30" 
                            fill="transparent"
                            viewBox="0 0 250 250"
                            className="
                            text-primary 
                            transition-all duration-[2500ms] 
                            cubic-bezier(0.34, 1.56, 0.64, 1)"
                            style={{
                                strokeDasharray: circumference,
                                strokeDashoffset: strokeDashoffset,
                                // strokeLinecap: 'round'
                            }}
                        />
                    </svg>

                    </div>
                    
                    {/* Inner Content for Pie */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="text-center">
                          <span className="text-white/80 text-sm font-mono">MAX YIELD</span>
                       </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};
