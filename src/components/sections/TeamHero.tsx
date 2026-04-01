import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Title } from "../base/title";
import { Subtitle } from "../base/subtitle";
import { Paragraph } from "../base/paragraph";
import { introductionTeam } from "@/content/team";


export function TeamHero() {
    return (
        <Section>
            <Container className="relative pt-10 md:pt-20">
                <div className="relative max-w-5xl mx-auto text-center">
                    <span className="text-primary-dim font-headline tracking-[0.2em] text-sm mb-6 block uppercase">
                        {introductionTeam.label}
                    </span>
                    <Title size='xl' >
                        {introductionTeam.title}
                    </Title>
                    <Subtitle size='lg' className="max-w-4xl mx-auto text-primary-dim mb-4 md:mb-6">
                        {introductionTeam.subtitle}
                    </Subtitle>
                    <Paragraph size='md' className="max-w-4xl mx-auto text-text-dim">
                        {introductionTeam.description}
                    </Paragraph>

                </div>
            </Container>
        </Section>
    );
}
