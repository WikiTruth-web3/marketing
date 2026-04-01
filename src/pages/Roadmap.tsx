

import React from 'react';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { RoadmapCTA } from '@/components/sections/RoadmapCTA';
import { RoadmapHero } from '@/components/sections/RoadmapHero';


export default function Roadmap() {
    return (

        <div>
            {/* Background Glows */}
            <RoadmapHero />
            <RoadmapTimeline />
            <RoadmapCTA />
        </div>

    );
}
