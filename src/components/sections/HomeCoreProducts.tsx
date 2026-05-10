import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { Paragraph } from '../base/paragraph';
import { Button } from '../base/button';
import { coreProductsSection } from '@/content/i18n/coreProducts';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

export const HomeCoreProducts: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="py-24 bg-background-dark/30">
            <Container>
                <div className="text-center mb-16">
                    <Title size="lg" className="mb-4">
                        {t(coreProductsSection.title, lang)}
                    </Title>
                    <Paragraph size="md" className="text-text-dim max-w-2xl mx-auto">
                        {t(coreProductsSection.description, lang)}
                    </Paragraph>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {coreProductsSection.products.map((product, pIndex) => {
                        const Icon = product.icon;
                        return (
                            <div key={pIndex} className="p-8 md:p-10 rounded-[2.5rem] bg-surface-low border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <Icon size={28} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                            {t(product.subtitle, lang)}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                                        {product.entry.map((entry, eIndex) => (
                                            <div 
                                                key={eIndex} 
                                                className={`p-6 rounded-2xl border transition-all flex flex-col ${
                                                    entry.disabled 
                                                    ? 'bg-white/5 border-white/5 opacity-60' 
                                                    : 'bg-white/5 border-white/10 hover:border-primary/30 hover:bg-white/10'
                                                }`}
                                            >
                                                <p className="text-text-dim text-sm md:text-base mb-6 font-medium leading-relaxed">
                                                    {t(entry.description, lang)}
                                                </p>
                                                <div className="mt-auto">
                                                    {entry.disabled ? (
                                                        <Button 
                                                            disabled 
                                                            variant="outline" 
                                                            className="w-full justify-center"
                                                        >
                                                            {t(entry.ctaText, lang)} (Coming Soon)
                                                        </Button>
                                                    ) : (
                                                        <a href={entry.ctaLink} target="_blank" rel="noopener noreferrer">
                                                            <Button 
                                                                variant="primary" 
                                                                className="w-full justify-center group/btn"
                                                            >
                                                                {t(entry.ctaText, lang)}
                                                            </Button>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};
