
import React from 'react';

import { Features } from '@/components/sections/TechFeatures';
import { TechComparison } from '@/components/sections/TechComparison';
import { TechSecurity } from '@/components/sections/TechSecurity';
import PixelBlast from '@/components/background/PixelBlast/index';

export default function Tech() {
    return (

        <div className="relative">
            {/* Pixel Blast Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <PixelBlast
                    variant="circle"
                    pixelSize={5}
                    color="#405714"
                    patternScale={3}
                    patternDensity={1}
                    pixelSizeJitter={0.5}
                    enableRipples={false}
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.5}
                    edgeFade={0.25}
                    transparent
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
