import React from 'react';
import { roadmapTitle, roadmapDescription } from '@/content/i18n/roadmap';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

export const RoadmapHero: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  return (
    <Section>
      <Container className="text-center pt-10 pb-12">

        {/* <div className="max-w-4xl w-full pt-10 pb-12 text-center px-4"> */}
        <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 animate-pulse-soft">The Future is Coded</p>
        <h1 className="text-white tracking-widest text-xl md:text-2xl lg:text-5xl font-bold leading-tight uppercase">
          {t(roadmapTitle, lang)}
        </h1>
        <p className="text-white/50 mt-8 max-w-xl mx-auto text-base md:text-lg font-light">
          {t(roadmapDescription, lang)}
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <div className="h-px w-12 bg-primary/30 self-center"></div>
          <span className="text-primary text-xs tracking-widest uppercase">Est. 2025 • Wiki Truth Protocol</span>
          <div className="h-px w-12 bg-primary/30 self-center"></div>
        </div>
        {/* </div> */}
      </Container>
    </Section>
  );
};

