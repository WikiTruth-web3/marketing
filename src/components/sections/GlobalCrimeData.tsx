import React from 'react';
import { DataCard } from '@/components/custom/dataCard';
import { crimeData, moreData } from '@/content/home';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ArrowRight, Globe as GlobeIcon, ShieldAlert } from 'lucide-react';
import Globe from '@/components/globeCobe';

export const GlobalCrimeData: React.FC = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,100,100,0.05)_0%,transparent_60%)] -z-10" />

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          <div className="flex-1 space-y-8 text-center lg:text-left transition-all duration-700">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {crimeData && crimeData.map((stat, index) => (
                <DataCard
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
          </div>
          <div className="flex-1 w-full max-w-[500px] aspect-square relative group">
            <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full group-hover:bg-red-600/10 transition-colors duration-1000" />
            <Globe showcaseKey="stickers" />
          </div>
        </div>



        <div className="flex justify-center  ">
          <a
            href={moreData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 transition-all backdrop-blur-sm"
          >
            <span className="text-primary/60 text-sm flex items-center gap-2 group-hover:text-primary transition-colors">
              <GlobeIcon size={16} className="group-hover:rotate-45 transition-transform" />
              {moreData.title}: {moreData.website}
            </span>
            <ArrowRight size={16} className="text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </Container>
    </Section>
  );
};
