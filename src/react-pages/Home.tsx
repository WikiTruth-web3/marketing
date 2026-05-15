// import React from 'react';

import { HomeHero } from '@/components/sections/HomeHero';
import { GlobalCrimeData } from '../components/sections/GlobalCrimeData';
import { WhyWeWork } from '../components/sections/WhyWeWork';
import { HomePartners } from '../components/sections/HomePartners';
import Threads from '@/components/background/Threads/index';

// New Sections from Content Planning
import { HomeProblem } from '@/components/sections/HomeProblem';
import { HomeSolution } from '@/components/sections/HomeSolution';
import { HomeCoreFeatures } from '@/components/sections/HomeCoreFeatures';
import { HomeWhyThisMatters } from '@/components/sections/HomeWhyThisMatters';
import { HomeUseCases } from '@/components/sections/HomeUseCases';
import { HomePhilosophy } from '@/components/sections/HomePhilosophy';
import { HomeCoreProducts } from '@/components/sections/HomeCoreProducts';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { FAQ } from '@/components/sections/FAQ';
import { faqSection } from '@/content/i18n/faq-home';

import type { LanguageType } from '@/types/typesDapp/language';

export default function Home({ lang }: { lang: LanguageType }) {
    return (
        <div className="relative ">
            <div className="h-screen inset-0 -z-10 fixed overflow-hidden pointer-events-none">
                <Threads
                    color={[0.3, 0.5, 0.15]}
                    amplitude={5}
                    distance={0}
                    enableMouseInteraction={false}
                />
            </div>
            <HomeHero lang={lang} />
            <HomeCoreProducts lang={lang} />
            
            <HomeProblem lang={lang} />
            <HomeSolution lang={lang} />
                        
            <HomeCoreFeatures lang={lang} />
            
            <HomeWhyThisMatters lang={lang} />
            <HomeUseCases lang={lang} />
            
            <WhyWeWork lang={lang} />
            <GlobalCrimeData lang={lang} />
            
            <HomePhilosophy lang={lang} />
            <HomePartners lang={lang} />

            <FAQ data={faqSection} lang={lang} className="py-24 bg-background-dim/50" />
            <HomeCTA lang={lang} />
        </div>
    );
}
