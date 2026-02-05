import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonBase } from '../base/buttonBase';
import { heroData } from '@/content/home';

export const HomeHero: React.FC = () => {
  return (
    <section className="
    relative w-full min-h-[85vh] flex flex-col items-center justify-center 
    px-4 overflow-hidden">
      {/* Background Gradients */}
      <div className="
      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] 
      h-[600px] bg-primary/20 blur-[120px] rounded-full 
      pointer-events-none opacity-50" />
      
      <div className="
        relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8"
      >
        <div className="
        inline-flex items-center gap-2 px-3 py-1 rounded-full 
        border border-primary/30 bg-primary/5 text-primary text-xs font-mono 
        uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Beta Live
        </div>
        
        <h1 className="
        text-5xl md:text-7xl lg:text-8xl font-bold text-white 
        leading-[1.1] tracking-tight">
          {heroData.title}
        </h1>

        <h2 className="
        text-2xl md:text-4xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-primary to-emerald-400 neon-text 
        leading-tight">
          {heroData.subtitle}
        </h2>
        
        <p className="
        text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          {heroData.description}
        </p>

        {/* Features Pills */}
        <div className="flex flex-wrap justify-center gap-3">
            {heroData.features.map((feature, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:border-primary/30 transition-colors">
                    {feature}
                </span>
            ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <ButtonBase variant="primary" onClick={() => window.open(heroData.primaryCta.link, '_blank')}>
              {heroData.primaryCta.text} <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonBase>
          <ButtonBase variant="secondary" onClick={() => window.open(heroData.secondaryCta.link, '_blank')}>
            {heroData.secondaryCta.text}
          </ButtonBase>
        </div>
      </div>
    </section>
  );
};
