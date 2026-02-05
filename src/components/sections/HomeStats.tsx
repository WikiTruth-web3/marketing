import React from 'react';
import { StatCard } from '../customer/StatCard';
import { crimeStats, moreData } from '@/content/home';
import { ArrowRight } from 'lucide-react';

export const HomeStats: React.FC = () => {
  return (
    <section className="w-full max-w-7xl px-6 -mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {crimeStats.map((stat, index) => (
            <StatCard 
                key={index}
                label={stat.label} 
                value={stat.value} 
                sub={stat.description}
                icon={stat.icon}
                color={stat.color}
                link={stat.link}
            />
        ))}
      </div>
      
      <div className="flex justify-end mt-4">
          <a href={moreData.link} target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs flex items-center gap-1 hover:text-primary transition-colors">
              {moreData.title}: {moreData.website} <ArrowRight size={12} />
          </a>
      </div>
    </section>
  );
};
