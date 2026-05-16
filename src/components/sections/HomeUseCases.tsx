import React from 'react';
import { Building2, Search, Newspaper, Database, SearchCheck, Briefcase } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { homeUseCases } from '@/content/i18n/homeUseCases';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

const useCaseIcons = [
    Building2,
    Search,
    Newspaper,
    Database,
    SearchCheck
];

export const HomeUseCases: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="py-24 bg-background-dark/50">
            <Container>
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                        <Briefcase size={14} />
                        Real World Impact
                    </div>
                    <Title size="lg">
                        {t(homeUseCases.title, lang)}
                    </Title>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {homeUseCases.items.map((item, index) => {
                        const Icon = useCaseIcons[index % useCaseIcons.length];
                        return (
                            <div key={index} className="p-8 rounded-3xl bg-surface-low border border-white/5 hover:border-primary/20 hover:bg-surface-low/80 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {t(item.title, lang)}
                                </h3>
                                <p className="text-text-dim text-sm leading-relaxed">
                                    {t(item.description, lang)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};
