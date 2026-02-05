import React from 'react';
import { roadmapTitle, roadmapDescription } from '@/content/roadmap';

export const RoadmapHero: React.FC = () => {
  return (
    <section className="max-w-4xl w-full pt-10 pb-12 text-center px-4">
      <p className="text-primary font-mono text-xs tracking-[0.4em] uppercase mb-4 animate-pulse-soft">The Future is Coded</p>
      <h1 className="text-white tracking-widest text-5xl md:text-8xl font-bold leading-tight uppercase">
        {roadmapTitle}
      </h1>
      <p className="text-white/50 mt-8 max-w-xl mx-auto text-lg md:text-xl font-light">
        {roadmapDescription}
      </p>
    </section>
  );
};
