import React from 'react';
import { DataCard } from '@/components/custom/dataCard';
import { crimeData, moreData } from '@/content/i18n/globalCrimeData';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ArrowRight, Globe as GlobeIcon } from 'lucide-react';
import Globe from '@/components/globeCobe';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

export const GlobalCrimeData: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  return (
    <Section className="relative overflow-hidden">
      {/* Background radial glow */}

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          <div className="flex-1 space-y-8 text-center lg:text-left transition-all duration-700">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {crimeData && crimeData.map((stat, index) => (
                <DataCard
                  key={index}
                  label={t(stat.label, lang)}
                  value={stat.value}
                  sub={t(stat.description, lang)}
                  icon={stat.icon}
                  color={stat.color}
                  link={stat.link}
                />
              ))}
            </div>
            
        <div className="flex justify-center md:justify-end  ">
          <a
            href={moreData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 transition-all backdrop-blur-sm border-b border-primary/30 hover:border-primary"
          >
            <span className="text-primary/60 text-sm flex items-center gap-2 group-hover:text-primary transition-colors">
              <GlobeIcon size={16} className="group-hover:rotate-45 transition-transform" />
              {t(moreData.title, lang)}: {moreData.website}
            </span>
            <ArrowRight size={16} className="text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </a>
        </div>
          </div>
          <div className="flex-1 w-full max-w-[500px] aspect-square relative group">
            <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full group-hover:bg-red-600/10 transition-colors duration-1000" />
            <Globe showcaseKey="stickers" />
          </div>
        </div>

      </Container>
    </Section>
  );
};

