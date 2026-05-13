import React from 'react';
import { Container } from '@/components/layout/Container';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';
import { Section } from '../layout/Section';
import { useBoxSwapSimulation } from './useBoxSwapSimulation';

import EvidenceViewer from './EvidenceViewer';
import InteractiveStory from './InteractiveStory';
import { Title } from '../base/title';
// import { Subtitle } from '../base/subtitle';

import type { LanguageType } from '@/types/typesDapp/language';

import useBoxState from './boxState';
import useStoryState from './storyState';
import { t } from '@/lib/i18nUtils';
import { boxSwapDemo } from '@/content/i18n/boxSwapDemo';

const BoxSwapDemo: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    const { box, status, updateStatus, listedMode, updateListedMode, updateBox } = useBoxState();
    const { story } = useStoryState(status, lang);

    const simulation = useBoxSwapSimulation(status, box, updateBox);






    return (
        <Section>
            <Container >
                <Title className='text-text-light text-center '>{t(boxSwapDemo.title, lang)}</Title>


                {/* <Subtitle size='lg' className='text-center mb-8 md:mb-12'>BoxSwap Demo</Subtitle> */}

                {/* Main Content */}
                <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">

                    <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-14">
                        {/* Left Content */}
                        <div className="flex-1 lg:max-w-2xl">
                            <EvidenceViewer
                                status={status}
                                box={box}
                                lang={lang}
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/30 to-transparent self-stretch shadow-inner"></div>

                        {/* Right Content */}
                        <div className="flex-1 lg:max-w-xl flex flex-col ">
                            <InteractiveStory
                                status={status}
                                setStatus={updateStatus}
                                updateListedMode={updateListedMode}
                                listedMode={listedMode}
                                lang={lang}
                                story={story}
                                box={box}
                                simulation={simulation}
                            />

                        </div>

                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default BoxSwapDemo;
