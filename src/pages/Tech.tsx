
import React from 'react';

import { Features } from '@/components/sections/TechFeatures';
import { TechComparison } from '@/components/sections/TechComparison';
import { TechSecurity } from '@/components/sections/TechSecurity';
import CodeRain from '@/components/background/CodeRain';

export default function Tech() {
    return (

        <div className="relative">
            {/* Code Rain Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <CodeRain
                    count={300}
                    gap={18}
                    speed={0.05}
                    fontSize={18}
                    color="rgba(122, 187, 58, 0.1)"
                    tailLength={18}
                    headColor="rgba(122, 187, 58, 0.15)"
                    headGlowBlur={5}
                    trailFade={0.2}
                    pulseStrength={0.12}
                    jitter={0.5}
                    charHoldMs={95}
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
