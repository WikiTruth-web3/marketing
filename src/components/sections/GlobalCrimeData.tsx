import React from 'react';
import { DataCard } from '@/components/custom/dataCard';
import { crimeData, moreData } from '@/content/home';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ArrowRight } from 'lucide-react';

export interface CrimeDataType {
  icon: any
  label: string
  value: string
  description: string
  link: string
  color: string
}


export const GlobalCrimeData: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crimeData.map((stat, index) => (
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

        <div className="flex justify-end mt-4">
          <a href={moreData.link} target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs flex items-center gap-1 hover:text-primary transition-colors">
            {moreData.title}: {moreData.website} <ArrowRight size={12} />
          </a>
        </div>
      </Container>
    </Section>
  );
};
