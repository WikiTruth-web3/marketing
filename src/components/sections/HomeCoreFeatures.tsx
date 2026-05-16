import React from 'react';
import { UserX, Globe, Coins, ShieldCheck, FileCode, Users2, Zap } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Title } from '../base/title';
import { homeFeatures } from '@/content/i18n/homeFeatures';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

const featureIcons = [
    UserX,
    Globe,
    Coins,
    ShieldCheck,
    FileCode,
    Users2
];

export const HomeCoreFeatures: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section className="py-24 bg-background-dark relative overflow-hidden">
            {/* Grid Decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(122,187,58,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(122,187,58,0.02)_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <Container className="relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                        <Zap size={14} />
                        Core Capabilities
                    </div>
                    <Title size="lg">
                        {t(homeFeatures.title, lang)}
                    </Title>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {homeFeatures.items.map((feature, index) => {
                        const Icon = featureIcons[index % featureIcons.length];
                        return (
                            <div key={index} className="p-8 rounded-3xl bg-surface-low/50 backdrop-blur-xl border border-white/5 hover:bg-surface-low hover:border-primary/20 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {t(feature.title, lang)}
                                </h3>
                                <p className="text-text-dim text-sm leading-relaxed">
                                    {t(feature.description, lang)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};
