import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';
import type { FAQSectionI18n } from '@/content/i18n/faq-home';

interface FAQProps {
    data: FAQSectionI18n;
    lang: LanguageType;
    className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ data, lang, className }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Section className={className}>
            <Container>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-primary/10 text-primary">
                            <HelpCircle size={24} />
                        </div>
                        <Title size="lg" className="mb-4">
                            {t(data.title, lang)}
                        </Title>
                    </div>

                    <div className="space-y-4">
                        {data.faqs.map((faq, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div 
                                    key={index} 
                                    className={`rounded-2xl border transition-all duration-300 ${
                                        isActive 
                                        ? 'bg-surface-low border-primary/30 shadow-[0_0_20px_rgba(184,246,0,0.05)]' 
                                        : 'bg-surface-low/50 border-white/5 hover:border-white/10'
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className={`text-lg font-semibold transition-colors ${
                                            isActive ? 'text-primary' : 'text-text-light group-hover:text-white'
                                        }`}>
                                            {t(faq.question, lang)}
                                        </span>
                                        <div className={`p-1 rounded-lg transition-all duration-300 ${
                                            isActive ? 'bg-primary/20 text-primary rotate-180' : 'bg-white/5 text-text-dim'
                                        }`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>
                                    
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        isActive ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                                    }`}>
                                        <div className="px-6 pt-2 text-text-dim leading-relaxed border-t border-white/5 mt-2 pt-6">
                                            {t(faq.answer, lang)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
