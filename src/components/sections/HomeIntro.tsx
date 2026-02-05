import React from 'react';
import { thinking, thinkingLink } from '@/content/home';
import { ArrowRight, Quote } from 'lucide-react';

export const HomeIntro: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="relative inline-block">
         <Quote className="absolute -top-8 -left-8 text-primary/20 w-16 h-16 rotate-180" />
         
         <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">
            {thinking.question}
         </h2>
         
         <p className="text-xl md:text-2xl text-white/80 font-serif italic mb-12 leading-relaxed">
            "{thinking.answer}"
         </p>

         <div className="space-y-4">
             <p className="text-lg md:text-xl text-white/60">
                {thinking.thinking}
             </p>
             <p className="text-2xl font-bold text-primary animate-pulse">
                {thinking.thinking2}
             </p>
         </div>
      </div>

      <div className="
          flex items-center justify-center  p-2
        mt-6 md:mt-8 
        border border-white/10
        rounded-full
      ">
          <a 
            href={thinkingLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 
              text-white/60 hover:text-white/100 
              transition-colors text-sm md:text-lg
              hover:underline"
          >
            {thinkingLink.title} <ArrowRight size={14} />
          </a>
      </div>
    </section>
  );
};
