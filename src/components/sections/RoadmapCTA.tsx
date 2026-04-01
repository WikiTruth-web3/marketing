import React from 'react';
import { Button } from '../base/button';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Paragraph } from '../base/paragraph';
import { Subtitle } from '../base/subtitle';

export const RoadmapCTA: React.FC = () => {
  return (
    <Section>
      <Container>
        {/* <section className="max-w-6xl w-full px-4 pb-32"> */}
        <div className="p-[1px] rounded-xl md:rounded-3xl bg-surface">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl bg-background-dark p-12 lg:p-20 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <Subtitle size='lg' className='text-text-light'>Ready to join the future of finance?</Subtitle>
              <Paragraph className=" max-w-xl font-light">
                Download our technical whitepaper to learn more about the circuit protocol and our vision for a private, decentralized world.
              </Paragraph>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full lg:w-auto">
              <Button variant="primary">
                View Whitepaper
              </Button>
              <Button variant="outline">
                Telegram Group
              </Button>
            </div> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};
