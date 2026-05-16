import React from 'react';
import { ShieldAlert, Landmark, Building2, Scale, EyeOff, Trash2, CircleDollarSign, AlertCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { Paragraph } from '../base/paragraph';
import { homeProblem } from '@/content/i18n/homeProblem';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

const pointIcons = [
    ShieldAlert,
    Landmark,
    Building2,
    Scale,
    EyeOff,
    Trash2,
    CircleDollarSign
];

export const HomeProblem: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="bg-background-dark/50 py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
            
            <Container>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-widest mb-6">
                        <AlertCircle size={14} />
                        Current State
                    </div>
                    <Title size="lg" className="mb-6">
                        {t(homeProblem.title, lang)}
                    </Title>
                    <Paragraph size="lg" className="text-text-dim max-w-2xl mx-auto">
                        {t(homeProblem.subtitle, lang)}
                    </Paragraph>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {homeProblem.points.map((point, index) => {
                        const Icon = pointIcons[index % pointIcons.length];
                        return (
                            <div key={index} className="p-6 rounded-2xl bg-surface-low/30 border border-white/5 hover:border-red-500/20 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 text-red-500 group-hover:scale-110 transition-transform">
                                    <Icon size={20} />
                                </div>
                                <h4 className="text-text-light font-bold text-sm md:text-base">
                                    {t(point, lang)}
                                </h4>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <div className="inline-block p-6 rounded-3xl bg-surface-low border border-white/5 shadow-2xl">
                        <p className="text-white/60 italic text-base md:text-lg">
                            &ldquo;{t(homeProblem.closing, lang)}&rdquo;
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
