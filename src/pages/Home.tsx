import React from 'react';

import { HomeHero } from '@/components/sections/HomeHero';
import { GlobalCrimeData } from '../components/sections/GlobalCrimeData';
import BoxSwapDemo from '@/components/boxSwapDemo';
import { WhyWeWork } from '../components/sections/WhyWeWork';
import { TwoIncome } from '../components/sections/TwoIncome';
import { HomePartners } from '../components/sections/HomePartners';
import { HomeVisionSection } from '../components/sections/HomeVisionSection';
import Threads from '@/components/background/Threads/index';
import CrimeType from '@/components/sections/CrimeType';

export default function Home() {
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
            <HomeHero />
            <CrimeType/>
            <BoxSwapDemo />
            <TwoIncome />
            <WhyWeWork />
            <GlobalCrimeData />
            <HomePartners />

            <HomeVisionSection />
        </div>

    );
}
