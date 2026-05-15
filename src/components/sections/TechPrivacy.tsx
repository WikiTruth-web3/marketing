import React from 'react';
import { privacyData, privacyTitle, privacyDescription } from '@/content/i18n/tech-privacy';
import { Title } from '../base/title';
import { Subtitle } from '../base/subtitle';
import { Paragraph } from '../base/paragraph';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { LucideIcon } from 'lucide-react';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

export interface privacyTab {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const TechPrivacy: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section >
            <Container className='mt-10 md:mt-20'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <div>
                        <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">Privacy First</h2>
                        <Title size='lg' className='mb-2 md:mb-4'>{t(privacyTitle, lang)}</Title>
                        <Paragraph size='md' className='max-w-2xl mx-auto text-text-dim'>{t(privacyDescription, lang)}</Paragraph>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {privacyData.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-surface-high/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:bg-surface-low transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="text-primary w-5 h-5" />
                                    </div>
                                    <Subtitle size='sm' className='mb-2'>{t(item.title, lang)}</Subtitle>
                                    <Paragraph size='xs' className='text-text-dim'>{t(item.description, lang)}</Paragraph>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

