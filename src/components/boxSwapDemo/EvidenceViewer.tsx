import React from 'react';
import { Paragraph } from '@/components/base/paragraph';
import { Subtitle } from '@/components/base/subtitle'
import ImageSwiper from '@/components/custom/imageSwiper';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';

interface EvidenceViewerProps {
    status: BoxStatus;
}

const EvidenceViewer: React.FC<EvidenceViewerProps> = ({ status }) => {
    const isRevealed = status === 'Published';

    const boxImage = '/nft/boxImage.png';
    const nftImage = '/nft/nft-light-2.jpg';
    const judgingImage = '/images/swapDemo/judging.jpg';
    const prisonImage = '/images/swapDemo/prison.jpg';

    const imagesToShow = isRevealed ? [judgingImage, prisonImage] : [boxImage, nftImage];

    return (
        <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
            <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
                <div className='flex justify-between w-full'>
                    <div className='flex flex-row gap-2 items-baseline '>
                        <Paragraph size='sm' className='text-text-dim'>Box ID:</Paragraph>
                        <Paragraph className='text-white'>9999</Paragraph>
                    </div>

                    <div className='flex flex-row gap-2 items-baseline '>
                        <Paragraph size='sm' className='text-text-dim'>Whistleblower:</Paragraph>
                        <Paragraph className='text-primary'>0x...8902</Paragraph>
                    </div>
                </div>

                <div className='flex flex-row gap-2 items-baseline '>
                    <Paragraph size='sm' className='text-text-dim'>Creation Time:</Paragraph>
                    <Paragraph size='sm'>{new Date().toLocaleString()}</Paragraph>
                </div>
            </div>

            <ImageSwiper
                images={imagesToShow}
                className='w-full'
                enableIpfsUrl={false}
            />

            <Subtitle size='sm' >Classified Evidence Box - Operation: Shadow</Subtitle>

            <div className="flex flex-row justify-between">
                <Paragraph size='xs'>United States  New York </Paragraph>
                <Paragraph size='xs'>2026-03-15</Paragraph>
            </div>
            <hr className="border-white/10 " />
            <div className="space-y-2">
                <Paragraph size='xs' className="italic backdrop-blur-sm p-4 bg-black/20 rounded-lg">
                    "This is a highly secretive black box, containing undeniable criminal evidence.
                    Once the countdown reaches zero, the smart contract will automatically execute irreversible operations to make it public.
                    Unless... The criminal is willing to sell all his assets, pay a high delay fee to cover up the truth."
                </Paragraph>
            </div>
        </div>
    );
};

export default EvidenceViewer;
