import React from 'react';
import { Paragraph } from '@/components/base/paragraph';
import { Subtitle } from '@/components/base/subtitle'
import ImageSwiper from '@/components/custom/imageSwiper';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';

interface EvidenceViewerProps {
    status: BoxStatus;
    box: any;
}

const EvidenceViewer: React.FC<EvidenceViewerProps> = ({ status, box }) => {
    const isRevealed = status === 'Published';

    const imagesToShow = isRevealed ? [box.judgingImage, box.prisonImage] : [box.boxImage, box.nftImage];

    return (
        <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
            <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
                <div className='flex justify-between w-full'>
                    <div className='flex flex-row gap-2 items-baseline '>
                        <Paragraph size='sm' className='text-text-dim'>Box ID:</Paragraph>
                        <Paragraph className='text-white'>{box.boxId}</Paragraph>
                    </div>

                    <div className='flex flex-row gap-2 items-baseline '>
                        <Paragraph size='sm' className='text-text-dim'>Whistleblower:</Paragraph>
                        <Paragraph className='text-primary'>{box.whistleblower}</Paragraph>
                    </div>
                </div>

                <div className='flex flex-row gap-2 items-baseline '>
                    <Paragraph size='sm' className='text-text-dim'>Creation Time:</Paragraph>
                    <Paragraph size='sm'>{box.createDate}</Paragraph>
                </div>
            </div>

            <ImageSwiper
                images={imagesToShow}
                className='w-full'
            />

            <Subtitle size='sm' >{box.title}</Subtitle>

            <div className="flex flex-row justify-between">
                <Paragraph size='xs'>{box.country} {box.state} </Paragraph>
                <Paragraph size='xs'>{box.eventDate}</Paragraph>
            </div>
            <hr className="border-white/10 " />
            <div className="space-y-2">
                <Paragraph size='xs' className="italic backdrop-blur-sm p-4 bg-black/20 rounded-lg">
                    "{box.description}"
                </Paragraph>
            </div>
        </div>
    );
};


export default EvidenceViewer;
