import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Subtitle } from '../base/subtitle';
import { Paragraph } from '../base/paragraph';
import { features } from '@/content/i18n/tech';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { CardBorder } from '../base/cardBorder';
import { CardPrimary } from '../base/cardPrimary';
import { Card } from '../base/card';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

export interface FeatureType {
  title: string
  description: string
  icon: LucideIcon
  color: string
  labels?: string[]
}

export function Features({ lang }: { lang: LanguageType }) {
  const Icon0 = features[0].icon
  const Icon1 = features[1].icon
  const Icon2 = features[2].icon
  const Icon3 = features[3].icon
  const Icon4 = features[4].icon
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Large Card */}
          <CardBorder>
            <div>
              <Icon0 className="text-primary-dim mb-6 w-8 h-8 group-hover:scale-110 transition-transform" />
              <Subtitle className='mb-2 md:mb-4'>{t(features[0].title, lang)}</Subtitle>
              <Paragraph className='text-text-dim'>
                {t(features[0].description, lang)}
              </Paragraph>
            </div>
            <div className="flex gap-4 mt-8">
              {
                features[0].labels?.map((label, index) => (
                  <span key={index} className="bg-surface-high hover:bg-primary/30 hover:text-white transition-colors px-4 py-2 rounded-full text-xs font-bold">{label}</span>
                ))
              }
            </div>
          </CardBorder>

          {/* Tall Card */}
          <CardPrimary>
            <Icon1 className="w-8 h-8 mb-6" />
            <div>
              <Subtitle className='mb-2 md:mb-4'>{t(features[1].title, lang)}</Subtitle>
              <Paragraph className='text-primary-dark'>
                {t(features[1].description, lang)}
              </Paragraph>
            </div>
          </CardPrimary>

          {/* Simple Card 1 */}
          <Card>
            <Icon2 className="text-primary-dim mb-6 w-8 h-8 group-hover:scale-110 transition-transform" />
            <Subtitle className='mb-2 md:mb-4'>{t(features[2].title, lang)}</Subtitle>
            <Paragraph className='text-text-dim'>
              {t(features[2].description, lang)}
            </Paragraph>
          </Card>

          {/* Simple Card 2 */}
          <Card>
            <Icon3 className="text-primary-dim mb-6 w-8 h-8 group-hover:scale-110 transition-transform" />
            <Subtitle className='mb-2 md:mb-4'>{t(features[3].title, lang)}</Subtitle>
            <Paragraph className='text-text-dim'>
              {t(features[3].description, lang)}
            </Paragraph>
          </Card>

          {/* Simple Card 3 */}
          <Card>
            <Icon4 className="text-primary-dim mb-6 w-8 h-8 group-hover:scale-110 transition-transform" />
            <Subtitle className='mb-2 md:mb-4'>{t(features[4].title, lang)}</Subtitle>
            <Paragraph className='text-text-dim'>
              {t(features[4].description, lang)}
            </Paragraph>
          </Card>

        </div>
      </Container>
    </Section>
  );
}

