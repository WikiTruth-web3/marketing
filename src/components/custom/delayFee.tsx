import React from 'react';
import { incomeDelay } from '@/content/i18n/twoIncome';
import { globalContent } from '@/content/i18n/global';
import { BarChart } from '../base/barChart';
import { Subtitle } from '../base/subtitle';
import { Paragraph } from '../base/paragraph';
import { twMerge } from 'tailwind-merge';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

interface DelayFeeProps {
  className?: string;
  lang: LanguageType;
}

export const DelayFee: React.FC<DelayFeeProps> = ({ className, lang }) => {
  // Map the content data to translate labels
  const translatedData = incomeDelay.map.map(item => ({
    ...item,
    label: t(item.label, lang)
  }));

  return (
    <div className={twMerge(
      "flex flex-col items-center justify-between",
      "bg-surface/50 backdrop-blur-sm border border-white/5",
      "hover:bg-surface-low/60 hover:border-white/10 transition-all duration-500",
      "rounded-lg md:rounded-3xl p-4 md:p-8 lg:p-12 gap-4 md:gap-10 ",
      className
    )}>
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-4 md:gap-6 ">
        <div className="flex flex-col gap-2">
          <span className="text-primary text-sm tracking-widest uppercase mb-1 flex items-center justify-start gap-2">
            <span className="w-8 h-[1px] bg-primary"></span>
            {t(globalContent.growthPotential, lang)}
          </span>
          <Subtitle size='lg' className='text-text-light'>
            {t(incomeDelay.title, lang)}
          </Subtitle>
        </div>

        <Paragraph >
          {t(incomeDelay.description, lang)}
        </Paragraph>
      </div>

      {/* Visual Chart Section */}
      <div className="w-full relative px-2 py-8 bg-black/20 rounded-2xl border border-white/5 shadow-inner">

        <BarChart
          data={translatedData}
          height={250}
          className="relative z-10"
        />
      </div>
    </div>
  );
};

