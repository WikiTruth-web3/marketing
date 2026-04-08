import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/base/button';
import { heroData } from '@/content/home';
import { ProjectName } from '../base/projectName';
import StackedTruthBoxCarousel from '@/components/custom/stackedTruthBoxCarousel';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Subtitle } from '../base/subtitle';
import { Paragraph } from '../base/paragraph';

export interface CTA {
  text: string
  link: string
}

export interface HeroFeature {
  icon: LucideIcon
  text: string
}

export interface HomeHeroType {
  title: string
  subtitle: string
  description: string
  features: HeroFeature[]
  primaryCta: CTA
  secondaryCta: CTA
}

const mockBoxData = [
  {
    boxId: "8888",
    title: "Jeffrey Epstein Case Archive: Flight Logs, Court Filings, and Related Contact Records",
    nftImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    boxImage: "./images/case/JeffreyEpstein.jpg",
    country: "United States",
    state: "New York",
    eventDate: "2019-07-06",
    price: "280,000",
    status: "Selling",
    tokenSymbol: "USDT",
    tokenDecimals: 6,
    precision: 2,
  },
  {
    boxId: "8889",
    title: "Boeing Whistleblower Dossier: Safety Reports, Internal Communications, and Hearing Notes",
    nftImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    boxImage: "./images/case/Boeing.png",
    country: "United States",
    state: "Washington",
    eventDate: "2024-03-09",
    price: "35,000",
    status: "Pending",
    tokenSymbol: "USDT",
    tokenDecimals: 6,
    precision: 2,
  },
  {
    boxId: "8890",
    title: "Burning Sun / Seungri Case Collection: Chat Logs, Court Timeline, and Media Reports",
    nftImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    boxImage: "./images/case/Seungri.jpeg",
    country: "South Korea",
    state: "Seoul",
    eventDate: "2019-01-29",
    price: "72,000",
    status: "Selling",
    tokenSymbol: "USDT",
    tokenDecimals: 6,
    precision: 2,
  },
];

export const HomeHero: React.FC = () => {

  return (
    <Section >

      <Container className='mt-10 md:mt-20'>

        {/* Grid pattern overlay - using w-full to ensure it covers the desktop properly */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left: Text content */}
          <div className={`w-full flex flex-col items-center md:items-start`}>

            <div className='mb-6 md:mb-8'>
              <ProjectName className='text-5xl md:text-7xl' />
            </div>

            <Subtitle size='lg' className='mb-2 md:mb-3 max-w-xl text-center md:text-left'>
              {heroData.subtitle}
            </Subtitle>

            <Paragraph className='mb-6 md:mb-8 max-w-xl text-center md:text-left text-primary-dim' >
              {heroData.description}
            </Paragraph>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-5">
              <Button
                onClick={() => window.open(heroData.primaryCta.link, '_blank')}
                className=" px-5 md:px-8 py-3 md:py-4 flex flex-row md:text-sm lg:text-base"
              >
                {heroData.primaryCta.text} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open(heroData.secondaryCta.link, '_blank')}
                className="px-5 md:px-8 py-3 md:py-4 flex flex-row md:text-sm lg:text-base"
                variant='outline'
              >
                {heroData.secondaryCta.text}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 md:gap-8 items-center border-t border-white/10 pt-6 md:pt-10 mt-8 md:mt-16">
              {heroData.features.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 md:gap-2.5 text-white/40 text-xs md:text-sm">
                  <div className="text-primary-dim">
                    <item.icon size={18} />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <StackedTruthBoxCarousel
            cards={mockBoxData}
            intervalMs={3000}
            className="max-w-[360px]"
          />
        </div>
      </Container>
    </Section>
  );
};
