import React from 'react';
import { Paragraph } from '@/components/base/paragraph';
import { Subtitle } from '@/components/base/subtitle';
import { Button } from '@/components/base/button';
import StatusLabel from '@/components/base/statusLabel';
import StatusStep from '@/components/custom/statusStep';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';
import TimerBar from './TimerBar';
import { STORY_CONTENT } from './constants';

interface InteractiveStoryProps {
    status: BoxStatus;
    setStatus: (status: BoxStatus) => void;
    simulation: {
        progress: number;
        daysLeft: number;
        totalReward: number;
        lastAddedReward: number;
        showFlash: boolean;
        basePrice: number;
        currentBid: number;
        finalPrice: number;
        setFinalPrice: (val: number) => void;
    };
}

const InteractiveStory: React.FC<InteractiveStoryProps> = ({ status, setStatus, simulation }) => {
    const story = STORY_CONTENT[status] || { title: '', desc: '' };
    const { progress, daysLeft, totalReward, lastAddedReward, showFlash, basePrice, currentBid, finalPrice, setFinalPrice } = simulation;

    return (
        <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
            <StatusLabel status={status as any} />
            <StatusStep
                status={status as any}
                listedMode={status === 'Auctioning' ? 'Auctioning' : 'Selling'}
                size="sm"
                enableHorizontalScroll={true}
            />

            {status === 'Delaying' && (
                <div className="bg-surface p-4 rounded-xl border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <div className="flex justify-between items-center mb-2">
                        <Paragraph >
                            The criminal is paying Delay Fee ...
                        </Paragraph>
                        {showFlash && (
                            <span className="text-green-400 font-bold animate-bounce whitespace-nowrap">
                                +{lastAddedReward} BTC !
                            </span>
                        )}
                    </div>
                    <TimerBar progress={progress} daysLeft={daysLeft} />
                    <div className="mt-3 text-right font-mono font-bold text-lg text-green-500 transition-all">
                        Total Reward: {totalReward} BTC
                    </div>
                </div>
            )}

            <div className="bg-surface p-2 md:p-4 lg:p-6 rounded-xl border border-white/10 
            space-y-2 md:space-y-4 lg:space-y-6 shadow-sm min-h-[180px]">
                <Subtitle size='sm' className="mb-2">{story.title}</Subtitle>
                <Paragraph size='sm' className='text-text-dim'>
                    {story.desc}
                </Paragraph>

                {status === 'Storing' && (
                    <div className="flex flex-col gap-3 mt-6">
                        <div className="flex flex-col gap-2 mb-2 p-4 bg-surface-low rounded-lg border border-white/10">
                            <Paragraph size='sm' className='text-text-dim'>
                                We sell this box for: <span className="font-bold text-primary">10 BTC</span>
                            </Paragraph>
                        </div>

                        <div className='flex flex-row gap-2'>

                            <Button variant="primary" onClick={() => {
                                setFinalPrice(basePrice);
                                setStatus('Selling');
                            }}>
                                Sell
                            </Button>
                            <Button variant="outline" onClick={() => setStatus('Auctioning')}>
                                Auction
                            </Button>
                            <Button variant="secondary" onClick={() => setStatus('Published')}>
                                Publish
                            </Button>
                        </div>
                    </div>
                )}

                {status === 'Selling' && (
                    <div className="flex flex-col justify-center items-center py-6 space-y-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        <Paragraph className=" text-sm">
                            Listed at a fixed price of <span className="font-bold text-primary font-mono">{finalPrice} BTC</span>, waiting for buyers...
                        </Paragraph>
                    </div>
                )}

                {status === 'Auctioning' && (
                    <div className="flex flex-col items-center py-6 space-y-3 bg-surface-light rounded-lg border border-orange-500/30">
                        <div className="animate-bounce text-3xl font-black text-orange-500 font-mono">
                            {currentBid} BTC
                        </div>
                        <Paragraph className="text-orange-400/80 animate-pulse text-sm">
                            All kinds of black and gray industries are bidding...
                        </Paragraph>
                    </div>
                )}

                {status === 'Paid' && (
                    <div className="flex flex-col items-center py-6 space-y-3 bg-green-500/10 rounded-lg border border-green-500/30">
                        <div className="text-2xl font-bold text-green-500 font-mono">
                            Completed: {finalPrice} BTC
                        </div>
                        <Paragraph className=" animate-pulse text-sm">
                            The buyer's funds are locked in the smart contract, waiting for extraction and confirmation...
                        </Paragraph>
                    </div>
                )}

                {status === 'Published' && (
                    <div className="flex flex-col gap-3 mt-6 items-center">
                        <div className="text-4xl mb-2">🎉📰⚖️</div>
                        <div className="bg-success/10 border border-success/30 rounded-lg p-4 w-full text-center mb-4">
                            <Paragraph className="text-success mb-1">Your total reward for this whistleblowing</Paragraph>
                            <div className="text-xl md:text-2xl lg:text-4xl font-black text-success">{totalReward} <span className="text-lg">BTC</span></div>
                        </div>
                        <Button type="primary" size="large" onClick={() => setStatus('Storing')}>
                            Restart Story
                        </Button>
                    </div>
                )}
            </div>

            <div className="mt-8 p-4 bg-info/10 rounded-lg text-info text-xs md:text-sm border border-info/20">
                <strong>Storytelling Mode: </strong>
                This is a simulated interactive script. Click the buttons to advance the story, and most transaction processes (such as bidding, automatic receipt, and paying delay fee) will be automatically demonstrated for you.
            </div>
        </div>
    );
};

export default InteractiveStory;
