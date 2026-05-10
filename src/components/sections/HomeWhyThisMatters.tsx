import React from 'react';
import { Info, MessageSquareQuote } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { Paragraph } from '../base/paragraph';
import { homeWhyMatters } from '@/content/i18n/homeWhyMatters';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

export const HomeWhyThisMatters: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="py-24 bg-background-dark/80 relative">
            <Container>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                            <Info size={14} />
                            The Mission
                        </div>
                        <Title size="lg" className="mb-6">
                            {t(homeWhyMatters.title, lang)}
                        </Title>
                        <Paragraph size="lg" className="text-white/80 max-w-3xl">
                            {t(homeWhyMatters.subtitle, lang)}
                        </Paragraph>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {homeWhyMatters.content.map((text, index) => (
                            <div key={index} className="p-10 rounded-[2.5rem] bg-surface-low border border-white/5 relative group">
                                <MessageSquareQuote className="absolute top-8 right-8 text-white/5 group-hover:text-primary/10 transition-colors" size={60} />
                                <p className="text-xl md:text-2xl text-text-light font-light leading-relaxed relative z-10">
                                    {t(text, lang)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
