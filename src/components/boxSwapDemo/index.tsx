import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';
import { Section } from '../layout/Section';
import { LIFECYCLE_STEPS } from './constants';
import { useBoxSwapSimulation } from './useBoxSwapSimulation';
import EvidenceViewer from './EvidenceViewer';
import InteractiveStory from './InteractiveStory';
import { Title } from '../base/title';
// import { Subtitle } from '../base/subtitle';

import type { LanguageType } from '@/types/typesDapp/language';

const BoxSwapDemo: React.FC<{ lang: LanguageType }> = ({ lang }) => {
    const [status, setStatus] = useState<BoxStatus>('Storing');

    const simulation = useBoxSwapSimulation(status, setStatus);

    // Calculate current step index for the UI step tracker
    let stepIndex = 0;
    if (status === 'Storing') stepIndex = 0;
    else if (status === 'Selling' || status === 'Auctioning') stepIndex = 1;
    else if (status === 'Paid') stepIndex = 3;
    else if (status === 'Delaying') stepIndex = 4;
    else if (status === 'Published') stepIndex = 5;

    // Build steps dynamically if auctioning
    const currentSteps = [...LIFECYCLE_STEPS];
    if (status === 'Auctioning') {
        currentSteps[1] = currentSteps[2]; // Swap selling text to auctioning text in UI
    }

    return (
        <Section>
            <Container >
                <Title className='text-text-light text-center '>Truth Box Swap Demo</Title>

                {/* <Subtitle size='lg' className='text-center mb-8 md:mb-12'>BoxSwap Demo</Subtitle> */}

                {/* Main Content */}
                <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">

                    <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-14">
                        {/* Left Content */}
                        <div className="flex-1 lg:max-w-2xl">
                            <EvidenceViewer status={status} />
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/30 to-transparent self-stretch shadow-inner"></div>

                        {/* Right Content */}
                        <div className="flex-1 lg:max-w-xl flex flex-col ">
                            <InteractiveStory
                                status={status}
                                setStatus={setStatus}
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
