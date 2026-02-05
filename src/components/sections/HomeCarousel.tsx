import React from 'react';
import { carouselData, carouselTitle } from '@/content/home';

export const HomeCarousel: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {carouselTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carouselData.map((item, index) => {
            const Icon = item.icon;
            return (
                <div key={index} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary w-6 h-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">
                        {item.title}
                    </h3>
                    
                    <p className="text-white/60 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            );
        })}
      </div>
    </section>
  );
};
