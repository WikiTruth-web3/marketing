
// import React from 'react';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { RoadmapCTA } from '@/components/sections/RoadmapCTA';
import { RoadmapHero } from '@/components/sections/RoadmapHero';
import Particles from '@/components/background/Particles';
import type { LanguageType } from '@/types/language';

export default function Roadmap({ lang = 'en' }: { lang?: LanguageType }) {
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
            <RoadmapHero lang={lang} />
            <RoadmapTimeline lang={lang} />
            <RoadmapCTA lang={lang} />
        </div>

    );
}

