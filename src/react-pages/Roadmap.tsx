

import React from 'react';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { RoadmapCTA } from '@/components/sections/RoadmapCTA';
import { RoadmapHero } from '@/components/sections/RoadmapHero';
// import Grid from '@/components/background/Grid';
import Particles from '@/components/background/Particles';


export default function Roadmap() {
    return (
        <div className="relative ">
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <Particles
                    particleColors={["#477510"]}
                    particleCount={800}
                    particleSpread={10}
                    speed={0.2}
                    particleBaseSize={300}
                    moveParticlesOnHover
                    alphaParticles
                    disableRotation
                    pixelRatio={5}
                />
            </div>
            {/* Background Glows */}
            <RoadmapHero />
            <RoadmapTimeline />
            <RoadmapCTA />
        </div>

    );
}
