import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Reward } from '../custom/reward';
import { DelayFee } from '../custom/delayFee';
import { Title } from '../base/title';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';
import { globalContent } from '@/content/i18n/global';

export const TwoIncome: React.FC<{ lang: LanguageType }> = ({ lang }) => {

  return (
    <Section >
      <Container>
        <Title className='text-text-light text-center '>{t(globalContent.twoIncomes, lang)}</Title>
        {/* Exchange Income Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 ">
          <Reward lang={lang} />
          <DelayFee lang={lang} />
        </div>
      </Container>
    </Section>
  );
};

