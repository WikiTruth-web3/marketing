import React from 'react';
import { Quote } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { Paragraph } from '../base/paragraph';
import { homePhilosophy } from '@/content/i18n/homePhilosophy';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

export const HomePhilosophy: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="py-32 bg-background-dark overflow-hidden relative">
            {/* Massive Quote Decoration */}
            <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 w-[800px] h-[800px] pointer-events-none" />
            
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <Title size="lg" className="mb-8">
                        {t(homePhilosophy.title, lang)}
                    </Title>
                    <Paragraph size="lg" className="text-text-dim mb-16 max-w-3xl mx-auto">
                        {t(homePhilosophy.subtitle, lang)}
                    </Paragraph>
                    
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
                        <div className="relative p-10 md:p-16 rounded-[3rem] bg-surface-low border border-white/10 shadow-2xl">
                            <Quote className="text-primary mb-8 mx-auto" size={48} />
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight italic">
                                &ldquo;{t(homePhilosophy.quote, lang)}&rdquo;
                            </h2>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
