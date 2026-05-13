
import Grid from '@/components/background/Grid';
import React from 'react';
import { TwoIncome } from '../components/sections/TwoIncome';
import type { LanguageType } from '@/types/typesDapp/language';
import { HowItWorks } from '@/components/sections/HowItWorks';
import BoxSwapDemo from '@/components/boxSwapDemo';

export default function Demo({ lang }: { lang: LanguageType }) {


    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Grid
                    color="rgba(62, 187, 78, 0.1)"
                    size={50}
                    lineWidth={1}
                    opacity={1}
                    enableMouseGlow
                    glowColor="rgba(102, 157, 58, 0.7)"
                    glowRadius={140}
                    glowFadePercent={80}
                    enableProjectionGlow
                    projectionBlur={5}
                    projectionOpacity={0.3}
                    projectionColor="rgba(55, 145, 45)"
                />
            </div>
            <HowItWorks lang={lang} />

            <BoxSwapDemo lang={lang} />
            <TwoIncome lang={lang} />
            


        </div>
    );
};