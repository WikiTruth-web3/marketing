import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/base/button';
import { heroData } from '@/content/i18n/homeHero';
import { ProjectName } from '../base/projectName';
import StackedTruthBoxCarousel from '@/components/custom/stackedTruthBoxCarousel';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Subtitle } from '../base/subtitle';
import { Paragraph } from '../base/paragraph';
import { mockBoxData } from '@/content/content-en/mockBoxData';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';


export const HomeHero: React.FC<{ lang: LanguageType }> = ({ lang }) => {

  return (
    <Section >

      <Container className='mt-15 md:mt-20'>

        {/* Grid pattern overlay - using w-full to ensure it covers the desktop properly */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-12">
          {/* Left: Text content */}
          <div className={`w-full flex flex-col gap-6 md:gap-8 lg:gap-10`}>

            <ProjectName className='text-5xl md:text-7xl' />

            <div className='w-full flex flex-col gap-4 md:gap-6 lg:gap-7'>

            <Subtitle size='lg' className='max-w-xl '>
              {t(heroData.subheadline, lang)}
            </Subtitle>

            <div className='flex flex-col gap-1 md:gap-2'>

              {heroData.description.length > 1 ? heroData.description.map((item, i) => (
                <Paragraph className='max-w-xl text-white/60' key={i}>
                  {t(item, lang)}
                </Paragraph>
              )) : <Paragraph className='max-w-xl text-white/60' >
                {t(heroData.description[0], lang)}
              </Paragraph>}
            </div>

            {/* CTAs */}
            <div className=" w-full flex flex-row items-center gap-5">
              <Button
                onClick={() => window.open(heroData.primaryCta.link, '_blank')}
                className=" px-5 md:px-8 py-3 md:py-4 flex flex-row md:text-sm lg:text-base"
              >
                {t(heroData.primaryCta.text, lang)} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open(heroData.secondaryCta.link, '_blank')}
                className="px-5 md:px-8 py-3 md:py-4 flex flex-row md:text-sm lg:text-base"
                variant='outline'
              >
                {t(heroData.secondaryCta.text, lang)}
              </Button>
            </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-2 md:gap-4 items-center border-t border-white/10 pt-6 md:pt-10">
              {heroData.features.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 md:gap-2.5 text-white/40 text-xs md:text-sm">
                  <div className="text-primary-dim">
                    <item.icon size={18} />
                  </div>
                  {t(item.text, lang)}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end scale-75 sm:scale-90 md:scale-100 origin-center md:origin-right">
            <StackedTruthBoxCarousel
              cards={mockBoxData}
              intervalMs={3000}
            />
          </div>

        </div>
      </Container>
    </Section>
  );
};

