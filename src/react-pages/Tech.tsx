// import React from 'react';
import { Features } from '@/components/sections/TechFeatures';
import { TechComparison } from '@/components/sections/TechComparison';
import { TechSecurity } from '@/components/sections/TechSecurity';
import { TechPrivacy } from '@/components/sections/TechPrivacy';
import { FAQ } from '@/components/sections/FAQ';
import { faqSection } from '@/content/i18n/faq-tech';
import CodeRain from '@/components/background/CodeRain';
import type { LanguageType } from '@/types/language';

export default function Tech({ lang = 'en' }: { lang?: LanguageType }) {
    return (
        <div className="relative">
            {/* Code Rain Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <CodeRain
                    count={300}
                    gap={18}
                    speed={0.05}
                    fontSize={18}
                    color="rgba(122, 187, 58, 0.1)"
                    tailLength={18}
                    headColor="rgba(122, 187, 58, 0.15)"
                    headGlowBlur={5}
                    trailFade={0.2}
                    pulseStrength={0.12}
                    jitter={0.5}
                    charHoldMs={95}
                />
            </div>
            <div className="relative z-10">
                <TechPrivacy lang={lang} />
                <TechSecurity lang={lang} />
                <Features lang={lang} />
                <TechComparison lang={lang} />
                <FAQ data={faqSection} lang={lang} className="py-24 bg-background-dim/30" />
            </div>
        </div>
    );
}
