import React from 'react';
import { UserX, Box, FileCode, Clock, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { Paragraph } from '../base/paragraph';
import { homeSolution } from '@/content/i18n/homeSolution';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

const featureIcons = [
    UserX,
    Box,
    FileCode,
    Clock,
    Eye
];

export const HomeSolution: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="bg-background-dark py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                            <Sparkles size={14} />
                            The Breakthrough
                        </div>
                        <Title size="lg" className="mb-6">
                            {t(homeSolution.title, lang)}
                        </Title>
                        <Paragraph size="lg" className="text-text-dim mb-10">
                            {t(homeSolution.subtitle, lang)}
                        </Paragraph>

                        <div className="space-y-4">
                            {homeSolution.features.map((feature, index) => {
                                const Icon = featureIcons[index % featureIcons.length];
                                return (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-surface-low/30 border border-white/5 hover:border-primary/20 transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-text-light font-medium text-sm md:text-base">
                                            {t(feature, lang)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-surface-low p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                            {t(homeSolution.authority.title, lang)}
                        </h3>
                        
                        <div className="space-y-6">
                            {homeSolution.authority.list.map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                                    <span className="text-text-dim text-lg">
                                        {t(item, lang)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs uppercase tracking-widest text-primary font-bold">
                                    Trustless by Design
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
