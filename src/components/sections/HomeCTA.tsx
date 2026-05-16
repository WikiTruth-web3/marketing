import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { Paragraph } from '../base/paragraph';
import { Button } from '../base/button';
import { homeCTA } from '@/content/i18n/homeCTA';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

export const HomeCTA: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="py-12 bg-background-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
            
            <Container className="relative z-10">
                <div className="p-6 md:p-12 lg:p-16 rounded-[3rem] bg-surface-low border border-white/5 shadow-2xl text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-10 animate-bounce-slow">
                            <Rocket size={32} />
                        </div>
                        
                        <Title size="lg" className="mb-8">
                            {t(homeCTA.title, lang)}
                        </Title>
                        
                        {/* <Paragraph size="lg" className="text-text-dim mb-12 max-w-2xl mx-auto">
                            {t(homeCTA.subtitle, lang)}
                        </Paragraph> */}
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button variant="primary" className="px-10 py-4 h-auto text-lg group">
                                {t(homeCTA.buttons.market, lang)}
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" className="px-10 py-4 h-auto text-lg">
                                {t(homeCTA.buttons.docs, lang)}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            
            <style>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </Section>
    );
};
