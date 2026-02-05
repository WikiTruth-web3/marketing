import React, { useEffect, useRef, useState } from 'react';
import { incomeDelay} from '@/content/home';

export const HomeRevenueDelay: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col gap-24">
      {/* Delay Income Section */}
      <div >
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Text Content */}
             <div className="flex flex-col gap-6 order-last lg:order-first"> {/* Text first on desktop */}
                 <h4 className="text-2xl md:text-3xl font-bold text-white">{incomeDelay.title}</h4>
                 <p className="text-white/60 text-md md:text-lg leading-relaxed">{incomeDelay.description}</p>
                 
                 <div className="mt-4 flex items-center gap-4">
                     <div>
                         <span className="text-sm text-white/40 uppercase tracking-widest block mb-1">Growth Rate</span>
                         <span className="text-4xl font-bold text-cyan-400">{incomeDelay.ratio}</span>
                     </div>
                 </div>
             </div>

             {/* Bar Chart */}
             <div className="h-80 w-full flex items-end justify-between gap-4 md:gap-8 px-4 relative">
                {/* Grid lines background */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                    <div className="w-full h-px bg-white border-t border-dashed"></div>
                </div>

                {incomeDelay.map.map((item, index) => {
                    const val = parseInt(item.value.replace(/[^0-9]/g, ''));
                    const maxVal = 8; // Max value in dataset is 8 million
                    // Ensure at least some height for visibility even if 0, but here values are > 0.
                    // Scale it so 8m is ~90% height to leave room for tooltips
                    const heightPercent = (val / maxVal) * 90; 
                    
                    return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group/bar z-10">
                            <div className="w-full relative flex items-end justify-center h-full"> 
                                <div 
                                    className="w-full max-w-[80px] bg-gradient-to-t from-cyan-500/10 to-cyan-400 rounded-t-lg relative transition-all duration-[1500ms] cubic-bezier(0.34, 1.56, 0.64, 1) group-hover/bar:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                                    style={{ 
                                        height: isVisible ? `${heightPercent}%` : '0%',
                                        transitionDelay: `${index * 200}ms`
                                    }}
                                >
                                    {/* Value Label */}
                                    <div className={`absolute -top-8 left-1/2 -translate-x-1/2 text-cyan-300 font-bold text-sm md:text-base whitespace-nowrap transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: `${1000 + index * 200}ms`}}>
                                        {item.value}
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs md:text-sm text-white/40 font-mono text-center">{item.label}</span>
                        </div>
                    );
                })}
             </div>
         </div>
      </div>

    </section>
  );
};
