import React from 'react';
import { marketAdvantages } from '@/content/home';
import { Check, X } from 'lucide-react';

export const HomeComparison: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">Comparison</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {marketAdvantages.title}
        </h3>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {marketAdvantages.subtitle}
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px] rounded-2xl overflow-hidden glass-panel border border-white/5">
            {/* Header */}
            <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 p-6 text-sm font-mono uppercase tracking-widest text-white/50">
                <div className="col-span-4 pl-4">Feature</div>
                <div className="col-span-4 text-center">Traditional</div>
                <div className="col-span-4 text-center text-primary font-bold">Wiki Truth</div>
            </div>

            {/* Rows */}
            {marketAdvantages.comparisons.map((row, index) => (
                <div 
                    key={index} 
                    className="grid grid-cols-12 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors items-center group"
                >
                    <div className="col-span-4 pl-4 font-bold text-white group-hover:text-primary transition-colors">
                        {row.aspect}
                    </div>
                    
                    <div className="col-span-4 text-center text-white/60 relative">
                         {/* Optional: Add X icon for negative framing implicitly, or just text */}
                         {row.traditional}
                    </div>
                    
                    <div className="col-span-4 text-center text-white font-bold relative">
                        <div className="absolute inset-x-0 -inset-y-6 bg-primary/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-primary drop-shadow-[0_0_8px_rgba(19,236,91,0.3)]">
                            {row.wikitruth}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
