import React from 'react';
import { Network } from 'lucide-react';
import { visionContent } from '@/content/i18n/vision';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

export const HomeVisionSection: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  return (
    <section className="w-full max-w-6xl px-6 py-24 mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-primary/20 p-12 md:p-24 text-center bg-gradient-to-b from-surface to-black/50">

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Network size={300} className="text-primary" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">The Vision</span>

          <h2 className="text-xl md:text-3xl font-bold text-white max-w-4xl leading-tight">
            {t(visionContent.title1, lang)} <span className="text-primary glow-text">{t(visionContent.title2, lang)}</span>
          </h2>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {t(visionContent.description1, lang)}
          </p>
        </div>
      </div>
    </section>
  );
};

