import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { CRIME_TYPES } from '@/content/content-en/crimeType';

const renderRow = (types: string[], rowKey: string) => (
    <div className="relative overflow-hidden py-2">
        <div className="crime-marquee-track flex w-max items-center gap-3">
            {[...types, ...types].map((item, index) => (
                <span
                    key={`${rowKey}-${item}-${index}`}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text-light md:text-sm"
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
);

import type { LanguageType } from '@/types/typesDapp/language';

export default function CrimeType({ lang }: { lang: LanguageType }) {

    const half = Math.ceil(CRIME_TYPES.length / 2);
    const firstRow = CRIME_TYPES.slice(0, half);
    const secondRow = CRIME_TYPES.slice(half);

    return (
        <Section >
            <Container>
                {/* <h3 className="mb-4 text-center text-base text-text-dim md:text-lg">
                    Common Crime Categories
                </h3> */}

                {renderRow(firstRow, 'row-a')}

                <div className="crime-marquee-reverse">
                    {renderRow(secondRow, 'row-b')}
                </div>
                </Container>

            <style>{`
        .crime-marquee-track {
            animation: crime-marquee 45s linear infinite;
        }
        .crime-marquee-reverse .crime-marquee-track {
            animation-direction: reverse;
            animation-duration: 55s;
        }
        @keyframes crime-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        `}</style>
        </Section>
    );
}
