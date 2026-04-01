import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Reward } from '../custom/reward';
import { DelayFee } from '../custom/delayFee';
import { Title } from '../base/title';

export const TwoIncome: React.FC = () => {

  return (
    <Section >
      <Container>
        <Title className='text-text-light text-center '>Two Incomes</Title>
        {/* Exchange Income Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 ">
          <Reward />
          <DelayFee />
        </div>
      </Container>
    </Section>
  );
};
