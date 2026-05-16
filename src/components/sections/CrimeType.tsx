import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { CRIME_TYPES } from '@/content/i18n/crimeType';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

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

export default function CrimeType({ lang }: { lang: LanguageType }) {

    const localizedCrimes = CRIME_TYPES.map(item => t(item, lang));
    const half = Math.ceil(localizedCrimes.length / 2);
    const firstRow = localizedCrimes.slice(0, half);
    const secondRow = localizedCrimes.slice(half);

    return (
        <Section >
            <Container>
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

