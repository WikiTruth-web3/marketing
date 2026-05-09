

import React from 'react';
import { TeamHero } from '@/components/sections/TeamHero';
// import { TeamGrid } from '@/components/sections/TeamGrid';
import { JoinUs } from '@/components/sections/JoinUs';

export default function Team() {
    return (

        <div>
            {/* Background Glows */}
            <TeamHero />
            {/* <TeamGrid /> */}
            <JoinUs />
        </div>

    );
}
