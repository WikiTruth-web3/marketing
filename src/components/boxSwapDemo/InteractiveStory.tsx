import React from 'react';
import { Paragraph } from '@/components/base/paragraph';
import { Subtitle } from '@/components/base/subtitle';
import { Button } from '@/components/base/button';
import StatusLabel from '@/components/base/statusLabel';
import StatusStep from '@/components/custom/statusStep';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';
import TimerBar from './TimerBar';


interface InteractiveStoryProps {
    status: BoxStatus;
    listedMode: string;
    setStatus: (status: BoxStatus) => void;
    updateListedMode: (mode: 'Selling' | 'Auctioning' | 'N/A') => void;

    story: { title: string; desc: string };
    box: any;
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

const InteractiveStory: React.FC<InteractiveStoryProps> = ({ status, listedMode, setStatus, updateListedMode, story, box, simulation }) => {
    const { progress, daysLeft, totalReward, lastAddedReward, showFlash, basePrice, currentBid, finalPrice, setFinalPrice } = simulation;


    return (
        <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
            <StatusLabel status={status as any} />
            <StatusStep
                status={status as any}
                listedMode={listedMode}
            />

            {status === 'Delaying' && (
                <div className="bg-surface p-4 rounded-xl border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <div className="flex justify-between items-center mb-2">
                        <Paragraph >
                            The criminal is paying Delay Fee ...
                        </Paragraph>
                        {showFlash && (
                            <span className="text-green-400 font-bold animate-bounce whitespace-nowrap">
                                +{lastAddedReward} {box.tokenSymbol} !
                            </span>
                        )}
                    </div>
                    <TimerBar progress={progress} daysLeft={daysLeft} />
                    <div className="mt-3 flex justify-between items-center font-mono font-bold text-green-500">
                        <span className="text-xs opacity-70 italic">Accumulated Gross Income:</span>
                        <span className="text-lg">{(box.purchaseIncome + box.delayIncome).toFixed(2)} {box.tokenSymbol}</span>
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
                                We sell this box for: <span className="font-bold text-primary">{box.price} {box.tokenSymbol}</span>
                            </Paragraph>

                        </div>

                        <div className='flex flex-row gap-2'>

                            <Button variant="primary" onClick={() => {
                                setFinalPrice(basePrice);
                                updateListedMode('Selling');
                                setStatus('Selling');
                            }}>
                                Sell
                            </Button>
                            <Button variant="outline" onClick={() => {
                                updateListedMode('Auctioning');
                                setStatus('Auctioning');
                            }}>
                                Auction
                            </Button>
                            <Button variant="secondary" onClick={() => {
                                updateListedMode('N/A');
                                setStatus('Published');
                            }}>
                                Publish
                            </Button>

                        </div>
                    </div>
                )}

                {status === 'Selling' && (
                    <div className="flex flex-col justify-center items-center py-6 space-y-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        <Paragraph className=" text-sm">
                            Listed at a fixed price of <span className="font-bold text-primary font-mono">{finalPrice} {box.tokenSymbol}</span>, waiting for buyers...
                        </Paragraph>
                    </div>
                )}

                {status === 'Auctioning' && (
                    <div className="flex flex-col items-center py-6 space-y-3 bg-surface-light rounded-lg border border-orange-500/30">
                        <div className="animate-bounce text-3xl font-black text-orange-500 font-mono">
                            {currentBid} {box.tokenSymbol}
                        </div>
                        <Paragraph className="text-orange-400/80 animate-pulse text-sm">
                            All kinds of black and gray industries are bidding...
                        </Paragraph>
                    </div>
                )}

                {status === 'Paid' && (
                    <div className="flex flex-col items-center py-6 space-y-3 bg-green-500/10 rounded-lg border border-green-500/30">
                        <div className="text-2xl font-bold text-green-500 font-mono">
                            Completed: {finalPrice} {box.tokenSymbol}
                        </div>
                        <Paragraph className=" animate-pulse text-sm">
                            The buyer's funds are locked in the smart contract, waiting for extraction and confirmation...
                        </Paragraph>
                    </div>
                )}

                {status === 'Published' && (
                    <div className="flex flex-col gap-3 mt-6 items-center">
                        <div className="text-4xl mb-2">🎉📰⚖️</div>
                        <div className="bg-success/10 border border-success/30 rounded-lg p-4 w-full mb-4">
                            <div className="space-y-3 p-2">
                                <div className="flex justify-between text-sm border-b border-success/20 pb-2">
                                    <span className="text-success/70">Purchase Income</span>
                                    <span className="font-mono text-success">{box.purchaseIncome.toFixed(2)} {box.tokenSymbol}</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-success/20 pb-2">
                                    <span className="text-success/70">Delay Income</span>
                                    <span className="font-mono text-success">{box.delayIncome.toFixed(2)} {box.tokenSymbol}</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-success/20 pb-2">
                                    <span className="text-success/70">Service Fee (3%)</span>
                                    <span className="font-mono text-red-400">-{((box.purchaseIncome + box.delayIncome) * 0.03).toFixed(2)} {box.tokenSymbol}</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="font-bold text-success">Total Net Reward</span>
                                    <span className="text-xl font-black text-success">{box.totalReward.toFixed(2)} {box.tokenSymbol}</span>
                                </div>
                            </div>
                        </div>
                        <Button variant='primary' onClick={() => {
                            updateListedMode('N/A');
                            setStatus('Storing');
                        }}>
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
