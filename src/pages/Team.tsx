import React from 'react';
import { TeamGrid } from '../components/sections/TeamGrid';
import { JoinUs } from '../components/sections/JoinUs';
import { team } from '@/content/team';

const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">{team.title}</h1>
        <p className="
        text-primary/70 text-md md:text-lg font-mono 
        uppercase tracking-widest mb-6"
        >
          {team.subtitle}
        </p>
        <p className="
        text-white/60 text-sm md:text-md max-w-3xl leading-relaxed"
        >
            {team.description}
        </p>
      </div>

      <TeamGrid />
      <JoinUs />
    </div>
  );
};

export default Team;