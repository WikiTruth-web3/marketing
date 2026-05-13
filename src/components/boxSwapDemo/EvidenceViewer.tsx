import React from 'react';
import { Paragraph } from '@/components/base/paragraph';
import { Subtitle } from '@/components/base/subtitle'
import ImageSwiper from '@/components/custom/imageSwiper';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';
import { t } from '@/lib/i18nUtils';
import { content } from '@/components/boxSwapDemo/content';
import type { LanguageType } from '@/types/typesDapp/language';

interface EvidenceViewerProps {
    status: BoxStatus;
    box: any;
    lang: LanguageType;
}

const EvidenceViewer: React.FC<EvidenceViewerProps> = ({ status, box, lang }) => {

    const isRevealed = status === 'Published';

    const imagesToShow = isRevealed ? [box.judgingImage, box.prisonImage] : [box.boxImage, box.nftImage];

    return (
        <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
            <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
                <div className='flex justify-between w-full'>
                    <div className='flex flex-row gap-2 items-baseline '>
                        <Paragraph size='sm' className='text-text-dim'>{t(content.viewer.boxId, lang)}</Paragraph>
                        <Paragraph className='text-white'>{box.boxId}</Paragraph>
                    </div>

                    <div className='flex flex-row gap-2 items-baseline '>
                        <Paragraph size='sm' className='text-text-dim'>{t(content.viewer.whistleblower, lang)}</Paragraph>
                        <Paragraph className='text-primary'>{box.whistleblower}</Paragraph>
                    </div>
                </div>

                <div className='flex flex-row gap-2 items-baseline '>
                    <Paragraph size='sm' className='text-text-dim'>{t(content.viewer.creationTime, lang)}</Paragraph>
                    <Paragraph size='sm'>{box.createDate}</Paragraph>
                </div>
            </div>

            <ImageSwiper
                images={imagesToShow}
                className='w-full'
            />

            <Subtitle size='sm' >{t(content.viewer.operationShadow, lang)}</Subtitle>

            <div className="flex flex-row justify-between">
                <Paragraph size='xs'>{box.country} {box.state} </Paragraph>
                <Paragraph size='xs'>{box.eventDate}</Paragraph>
            </div>
            <hr className="border-white/10 " />
            <div className="space-y-2">
                <Paragraph size='xs' className="italic backdrop-blur-sm p-4 bg-black/20 rounded-lg">
                    "{t(content.viewer.description, lang)}"
                </Paragraph>
            </div>
        </div>
    );
};


export default EvidenceViewer;
