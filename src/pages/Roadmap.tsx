

import React from 'react';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { RoadmapCTA } from '@/components/sections/RoadmapCTA';
import { RoadmapHero } from '@/components/sections/RoadmapHero';
import Grid from '@/components/background/Grid';

export default function Roadmap() {
    return (
        <div className="relative ">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Grid
                    color="rgba(122, 187, 58, 0.1)"
                    variant='dots'
                    size={40}
                    lineWidth={4}
                    opacity={1}
                    enableMouseGlow
                    glowColor="rgba(102, 187, 58, 0.85)"
                    glowRadius={160}
                    glowFadePercent={65}
                    projectionBlur={5}
                    projectionOpacity={0.3}
                    projectionColor="rgba(55, 145, 45)"
                />
            </div>
            {/* Background Glows */}
            <RoadmapHero />
            <RoadmapTimeline />
            <RoadmapCTA />
        </div>

    );
}
