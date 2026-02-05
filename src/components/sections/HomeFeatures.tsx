import React from 'react';
import { FeatureCard } from '../customer/FeatureCard';
import { features } from '@/content/home';

export const HomeFeatures: React.FC = () => {
  return (
    <section className="w-full max-w-7xl px-6 py-32">
      <div className="text-center mb-16">
        <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">Core Architecture</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">The Truth Mechanisms</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
            <FeatureCard 
              key={idx}
              icon={feature.icon} 
              title={feature.title} 
              desc={feature.description}
            />
        ))}
      </div>
    </section>
  );
};
