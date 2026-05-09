import React from 'react';
import { Button } from '../base/button';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Paragraph } from '../base/paragraph';
import { Subtitle } from '../base/subtitle';
import { roadmapCTA } from '@/content/i18n/roadmap';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

export const RoadmapCTA: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  return (
    <Section>
      <Container>
        {/* <section className="max-w-6xl w-full px-4 pb-32"> */}
        <div className="p-[1px] rounded-xl md:rounded-3xl bg-surface-low">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl bg-background-dark p-12 lg:p-20 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <Subtitle size='lg' className='text-text-light'>{t(roadmapCTA.title, lang)}</Subtitle>
              <Paragraph className=" max-w-xl font-light">
                {t(roadmapCTA.description, lang)}
              </Paragraph>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full lg:w-auto">
              <Button variant="primary">
                {t(roadmapCTA.whitepaper, lang)}
              </Button>
              <Button variant="outline">
                {t(roadmapCTA.telegram, lang)}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

