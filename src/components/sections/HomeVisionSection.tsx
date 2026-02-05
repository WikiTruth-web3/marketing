import React from 'react';
import { Network } from 'lucide-react';
import { vision } from '@/content/home';

export const HomeVisionSection: React.FC = () => {
  return (
    <section className="w-full max-w-6xl px-6 py-24 mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-primary/20 p-12 md:p-24 text-center bg-gradient-to-b from-surface to-black/50">
        
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Network size={400} className="text-primary" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">The Vision</span>
            
            <h2 className="text-xl md:text-3xl font-bold text-white max-w-4xl leading-tight">
              {vision.title1} <span className="text-primary glow-text">{vision.title2}</span>
            </h2>
            
            {/* <div className="w-20 h-1 bg-primary/50 rounded-full my-4"></div> */}

            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              {vision.description1}
              <br/><br/>
              {vision.description2}
            </p>
        </div>
      </div>
    </section>
  );
};
