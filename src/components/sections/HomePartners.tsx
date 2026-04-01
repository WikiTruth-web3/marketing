import React from 'react';

// Import logos
import ArweaveLogo from '@/assets/partnerLogo/Arweave1.svg';
import ICPLogo from '@/assets/partnerLogo/ICP-Dfinity2.svg';
import PinataLogo from '@/assets/partnerLogo/Pinata.svg';
import TheGraphLogo from '@/assets/partnerLogo/TheGraph.svg';
import OasisLogo from '@/assets/partnerLogo/oasis-network-3.svg';
import FourEverlandLogo from '@/assets/partnerLogo/FourEverland.svg';
import { Title } from '../base/title';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

const partners = [
  { name: 'Oasis Network', logo: OasisLogo },
  { name: 'Arweave', logo: ArweaveLogo },
  { name: 'ICP', logo: ICPLogo },
  { name: 'The Graph', logo: TheGraphLogo },
  { name: 'Pinata', logo: PinataLogo },
  { name: '4EVERLAND', logo: FourEverlandLogo },
];

export const HomePartners: React.FC = () => {
  return (
    <Section >
      <Container>
        <div className="text-center mb-10">
          <Title className="uppercase tracking-widest">Powered By / Partners</Title>
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
