import React from 'react';
import { comparison } from '@/content/content-en/tech';
import { Check, X } from 'lucide-react';
import { Title } from '../base/title';
import { Paragraph } from '../base/paragraph';

export const TechComparison: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Title className='mb-2 md:mb-4'>{comparison.title}</Title>
        <Paragraph size='md' className='max-w-2xl mx-auto text-text-dim'>{comparison.subtitle}</Paragraph>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px] rounded-2xl overflow-hidden bg-surface-low border border-white/5">
          {/* Header */}
          <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 p-3 md:p-6 text-sm uppercase tracking-widest text-white/50">
            <div className="col-span-4 pl-4">Feature</div>
            <div className="col-span-4 text-center">Traditional</div>
            <div className="col-span-4 text-center text-primary font-bold">Wiki Truth</div>
          </div>

          {/* Rows */}
          {comparison.comparisons.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-12 p-3 md:p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors items-center group"
            >
              <div className="col-span-4 pl-4 font-bold group-hover:text-primary-dim transition-colors text-sm md:text-base">
                {row.aspect}
              </div>

              <div className="col-span-4 text-center text-white/60 relative text-sm md:text-base">
                {/* Optional: Add X icon for negative framing implicitly, or just text */}
                {row.traditional}
              </div>

              <div className="col-span-4 text-center text-white font-bold relative">
                <div className="absolute inset-x-0 -inset-y-6 bg-primary/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-primary-dim text-sm md:text-base">
                  {row.wikitruth}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
