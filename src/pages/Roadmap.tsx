

import React from 'react';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { RoadmapCTA } from '@/components/sections/RoadmapCTA';
import { RoadmapHero } from '@/components/sections/RoadmapHero';
import PixelSnow from '@/components/PixelSnow';

export default function Roadmap() {
    return (
        <div className="relative ">
            <div className="min-h-screen fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <PixelSnow
                    color="#416812"
                    flakeSize={0.031}
                    minFlakeSize={1.25}
                    pixelResolution={430}
                    speed={0.8}
                    density={0.3}
                    direction={135}
                    brightness={1.6}
                    depthFade={8}
                    farPlane={38}
                    gamma={0.4545}
                    variant="square"
                />
            </div>
            {/* Background Glows */}
            <RoadmapHero />
            <RoadmapTimeline />
            <RoadmapCTA />
        </div>

    );
}
