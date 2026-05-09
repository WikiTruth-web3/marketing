import React from 'react';
import { incomeExchange } from '@/content/content-en/home';
import { PieChart } from '../base/pieChart';
import { twMerge } from 'tailwind-merge';
import { Subtitle } from '../base/subtitle';
import { Paragraph } from '../base/paragraph';

interface RewardProps {
  className?: string;
}

export const Reward: React.FC<RewardProps> = ({ className }) => {
  const ratioValue = parseFloat(incomeExchange.ratio.replace('%', ''));

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
            High Yield Rewards
          </span>
          <Subtitle size='lg' className='text-text-light'>
            {incomeExchange.title}
          </Subtitle>
        </div>

        <Paragraph >
          {incomeExchange.description}
        </Paragraph>
      </div>

      {/* Visual Chart */}
      <div className="flex-shrink-0 relative group ">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>

        <PieChart
          size={300}
          targetPercentage={ratioValue}
          label="Distribution"
          showPercentage={true}
          className="relative z-10"
        />

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"></div>
      </div>
    </div>
  );
};
