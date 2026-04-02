
import React from 'react';

import { Features } from '@/components/sections/TechFeatures';
import { TechComparison } from '@/components/sections/TechComparison';
import { TechSecurity } from '@/components/sections/TechSecurity';
import Particles from '@/components/background/Particles';

export default function Tech() {
    return (

        <div className="relative">
            {/* Pixel Blast Background */}
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
                    pixelRatio="5"
                />
            </div>
            <div className="relative z-10">
                <TechSecurity />
                <Features />
                <TechComparison />
            </div>
        </div>

    );
}
