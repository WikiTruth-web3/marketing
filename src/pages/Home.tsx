import React from 'react';

import { HomeHero } from '@/components/sections/HomeHero';
import { GlobalCrimeData } from '../components/sections/GlobalCrimeData';
import BoxSwapDemo from '@/components/boxSwapDemo';
import { WhyWeWork } from '../components/sections/WhyWeWork';
import { TwoIncome } from '../components/sections/TwoIncome';
import { HomePartners } from '../components/sections/HomePartners';
import { HomeVisionSection } from '../components/sections/HomeVisionSection';

export default function Home() {
    return (

        <div>
            <HomeHero />
            <BoxSwapDemo />
            <TwoIncome />
            <WhyWeWork />
            <GlobalCrimeData />
            <HomePartners />

            <HomeVisionSection />
        </div>

    );
}
