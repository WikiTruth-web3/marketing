import React from 'react';
import { Title } from '../base/title';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';
import { globalContent } from '@/content/i18n/global';

const partners = [
  { name: 'Oasis Network', logo: '/partnerLogo/oasis-network-3.svg' },
  { name: 'Arweave', logo: '/partnerLogo/Arweave1.svg' },
  { name: 'ICP', logo: '/partnerLogo/ICP-Dfinity2.svg' },
  { name: 'The Graph', logo: '/partnerLogo/TheGraph.svg' },
  { name: 'Pinata', logo: '/partnerLogo/Pinata.svg' },
  { name: '4EVERLAND', logo: '/partnerLogo/FourEverland.svg' },
];

export const HomePartners: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  return (
    <Section >
      <Container>
        <div className="text-center mb-10">
          <Title className="uppercase tracking-widest">{t(globalContent.poweredByPartners, lang)}</Title>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner) => (
            <div key={partner.name} className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

