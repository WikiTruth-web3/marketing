import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Title } from "../base/title";
import { Subtitle } from "../base/subtitle";
import { Paragraph } from "../base/paragraph";
import { introductionTeam, teamMembers } from "@/content/i18n/team";
import Aurora from '@/components/background/Aurora/index';
import { TeamMemberCard } from '../custom/teamMemberCard';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

export function TeamHero({ lang }: { lang: LanguageType }) {
    return (
        <Section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Aurora
                    colorStops={["#426520","#6a5c99","#2b167e"]}
                    blend={0.6}
                    amplitude={1.0}
                    speed={0.7}
                />
            </div>
            <Container className="relative z-10 pt-10 md:pt-20 space-y-10 md:space-y-16">
                <div className="relative max-w-5xl mx-auto text-center  ">
                    <span className="text-primary-dim font-headline tracking-[0.2em] text-sm mb-6 block uppercase">
                        {t(introductionTeam.label, lang)}
                    </span>
                    <Title size='xl' >
                        {t(introductionTeam.title, lang)}
                    </Title>
                    <Subtitle size='lg' className="max-w-4xl mx-auto text-primary-dim mb-4 md:mb-6">
                        {t(introductionTeam.subtitle, lang)}
                    </Subtitle>
                    <Paragraph size='md' className="max-w-4xl mx-auto text-text-dim">
                        {t(introductionTeam.description, lang)}
                    </Paragraph>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard 
                            key={index} 
                            {...member}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}

