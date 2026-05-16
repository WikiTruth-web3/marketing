import React from 'react';
import { Upload, Package, Gavel, Unlock, HelpCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { homeHowItWorks } from '@/content/i18n/howItWorks';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

const stepIcons = [
    Upload,
    Package,
    Gavel,
    Unlock
];

export const HowItWorks: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="py-24 bg-background-dark/30">
            <Container>
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                        <HelpCircle size={14} />
                        Protocol Mechanics
                    </div>
                    <Title size="lg">
                        {t(homeHowItWorks.title, lang)}
                    </Title>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {homeHowItWorks.steps.map((step, index) => {
                            const Icon = stepIcons[index % stepIcons.length];
                            return (
                                <div key={index} className="relative group">
                                    <div className="p-8 rounded-[2rem] bg-surface-low border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 relative z-10 h-full flex flex-col">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                            <Icon size={28} />
                                        </div>
                                        <div className="absolute top-6 right-8 text-6xl font-bold text-white/5 font-mono group-hover:text-primary/10 transition-colors">
                                            {step.number}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">
                                            {t(step.title, lang)}
                                        </h3>
                                        <p className="text-text-dim text-sm leading-relaxed">
                                            {t(step.description, lang)}
                                        </p>
                                    </div>
                                    
                                    {/* Decoration for connection points */}
                                    <div className="absolute top-1/2 left-0 -translate-x-full w-4 h-4 rounded-full border-2 border-primary/20 bg-background-dark hidden lg:block group-first:hidden" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
