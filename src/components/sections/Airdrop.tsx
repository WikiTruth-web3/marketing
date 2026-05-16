import React from 'react';
import { Gift, ArrowRight, Droplets } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Title } from '../base/title';
import { Subtitle } from '../base/subtitle';
import { Paragraph } from '../base/paragraph';
import { Button } from '../base/button';
import { airdropContent } from '@/content/i18n/airdrop';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

/** Official Oasis testnet faucet — choose “Sapphire” and request TEST. */
const SAPPHIRE_TESTNET_FAUCET_URL = 'https://faucet.testnet.oasis.dev/';

export const Airdrop: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    return (
        <Section >
            <Container>
                <div className="grid grid-cols-1 items-center gap-5 lg:gap-12 lg:grid-cols-2">
                    <div className="order-2 flex flex-col lg:order-1">
                        <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary md:text-sm">
                            <Gift className="h-4 w-4" aria-hidden />
                            {t(airdropContent.tag, lang)}
                        </div>

                        <Title size="lg" className="mb-4 text-text-light md:mb-6">
                            {t(airdropContent.title, lang)}
                        </Title>

                        <Subtitle size="md" className="mb-3 text-text-body md:mb-4">
                            {t(airdropContent.subtitle, lang)}
                        </Subtitle>

                        <Paragraph className="mb-6 max-w-xl text-text-dim md:mb-8" size="md">
                            {t(airdropContent.description, lang)}
                        </Paragraph>

                        <ul className="mb-8 space-y-3 text-sm text-text-light md:text-base">
                            {airdropContent.rules.map((rule, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span className="text-text-dim">{t(rule, lang)}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {airdropContent.stats.map(({ icon: Icon, label, value }) => (
                                <div
                                    key={t(label, lang)}
                                    className="rounded-xl border border-white/10 bg-surface-low/80 px-4 py-3"
                                >
                                    <div className="mb-1 flex items-center gap-2 text-text-dim">
                                        <Icon className="h-4 w-4 text-primary-dim" aria-hidden />
                                        <span className="text-xs uppercase tracking-wide">{t(label, lang)}</span>
                                    </div>
                                    <p className="font-headline text-sm font-bold text-text-body">{t(value, lang)}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button
                                className="px-6 py-3"
                                onClick={() => window.open(SAPPHIRE_TESTNET_FAUCET_URL, '_blank', 'noopener,noreferrer')}
                            >
                                <Droplets className="mr-2 inline h-4 w-4" aria-hidden />
                                {t(airdropContent.cta, lang)}
                                <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden />
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 flex justify-center lg:order-2">
                        <div className="relative w-full max-w-4xl">

                                <img
                                    src="/images/airdrop.svg"
                                    alt="Airdrop campaign illustration"
                                    className="aspect-square w-full object-contain"
                                    width={600}
                                />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

