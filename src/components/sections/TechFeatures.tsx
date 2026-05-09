import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Zap, ShieldCheck, LineChart, Globe, Headset, ArrowRight } from 'lucide-react';
import { CardBorder } from '../base/cardBorder';
import { CardPrimary } from '../base/cardPrimary';
import { Card } from '../base/card';
import { Subtitle } from '../base/subtitle';
import { Paragraph } from '../base/paragraph';
import { features } from '@/content/content-en/tech';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export interface FeatureType {
  title: string
  description: string
  icon: LucideIcon
  color: string
  labels?: string[]
}

export function Features() {
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
              <Subtitle className='mb-2 md:mb-4'>{features[0].title}</Subtitle>
              <Paragraph className='text-text-dim'>
                {features[0].description}
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
              <Subtitle className='mb-2 md:mb-4'>{features[1].title}</Subtitle>
              <Paragraph className='text-primary-dark'>
                {features[1].description}
              </Paragraph>
            </div>
          </CardPrimary>

          {/* Simple Card 1 */}
          <Card>
            <Icon2 className="text-primary-dim mb-6 w-8 h-8 group-hover:scale-110 transition-transform" />
            <Subtitle className='mb-2 md:mb-4'>{features[2].title}</Subtitle>
            <Paragraph className='text-text-dim'>
              {features[2].description}
            </Paragraph>
          </Card>

          {/* Simple Card 2 */}
          <Card>
            <Icon3 className="text-primary-dim mb-6 w-8 h-8 group-hover:scale-110 transition-transform" />
            <Subtitle className='mb-2 md:mb-4'>{features[3].title}</Subtitle>
            <Paragraph className='text-text-dim'>
              {features[3].description}
            </Paragraph>
          </Card>

          {/* Simple Card 3 */}
          <Card>
            <Icon4 className="text-primary-dim mb-6 w-8 h-8 group-hover:scale-110 transition-transform" />
            <Subtitle className='mb-2 md:mb-4'>{features[4].title}</Subtitle>
            <Paragraph className='text-text-dim'>
              {features[4].description}
            </Paragraph>
          </Card>

        </div>
      </Container>
    </Section>
  );
}
