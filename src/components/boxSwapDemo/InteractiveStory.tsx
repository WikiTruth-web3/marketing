import React from 'react';
import { Paragraph } from '@/components/base/paragraph';
import { Subtitle } from '@/components/base/subtitle';
import { Button } from '@/components/base/button';
import StatusLabel from '@/components/base/statusLabel';
import StatusStep from '@/components/custom/statusStep';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';
import TimerBar from './TimerBar';
import { t } from '@/lib/i18nUtils';
import { content } from '@/components/boxSwapDemo/content';
import type { LanguageType } from '@/types/typesDapp/language';


interface InteractiveStoryProps {
    status: BoxStatus;
    listedMode: string;
    setStatus: (status: BoxStatus) => void;
    updateListedMode: (mode: 'Selling' | 'Auctioning' | 'N/A') => void;
    lang: LanguageType;
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

const InteractiveStory: React.FC<InteractiveStoryProps> = ({ status, listedMode, setStatus, updateListedMode, lang, story, box, simulation }) => {
    const { progress, daysLeft, totalReward, lastAddedReward, showFlash, basePrice, currentBid, finalPrice, setFinalPrice } = simulation;


    return (
        <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
            <div className="mt-8 p-4 bg-info/10 rounded-lg text-info text-xs md:text-sm border border-info/20">
                <strong>{t(content.labels.simulationMode.title, lang)}</strong>
                {t(content.labels.simulationMode.desc, lang)}
            </div>
            <StatusLabel status={status as any} />
            <StatusStep
                status={status as any}
                listedMode={listedMode}
            />


            {status === 'Delaying' && (
                <div className="bg-surface p-4 rounded-xl border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <div className="flex justify-between items-center mb-2">
                        <Paragraph >
                            {t(content.story.delaying.paying, lang)}
                        </Paragraph>
                        {showFlash && (
                            <span className="text-green-400 font-bold animate-bounce whitespace-nowrap">
                                +{lastAddedReward} {box.tokenSymbol} !
                            </span>
                        )}
                    </div>
                    <TimerBar progress={progress} daysLeft={daysLeft} />
                    <div className="mt-3 flex justify-between items-center font-mono font-bold text-green-500">
                        <span className="text-xs opacity-70 italic">{t(content.story.delaying.grossIncome, lang)}</span>
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
                                {t(content.labels.sellInfo, lang)} <span className="font-bold text-primary">{box.price} {box.tokenSymbol}</span>
                            </Paragraph>

                        </div>

                        <div className='flex flex-row gap-2'>

                            <Button variant="primary" onClick={() => {
                                setFinalPrice(basePrice);
                                updateListedMode('Selling');
                                setStatus('Selling');
                            }}>
                                {t(content.labels.sell, lang)}
                            </Button>
                            <Button variant="outline" onClick={() => {
                                updateListedMode('Auctioning');
                                setStatus('Auctioning');
                            }}>
                                {t(content.labels.auction, lang)}
                            </Button>
                            <Button variant="secondary" onClick={() => {
                                updateListedMode('N/A');
                                setStatus('Published');
                            }}>
                                {t(content.labels.publish, lang)}
                            </Button>

                        </div>
                    </div>
                )}

                {status === 'Selling' && (
                    <div className="flex flex-col justify-center items-center py-6 space-y-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        <Paragraph className=" text-sm">
                            {t(content.story.selling.status, lang)} <span className="font-bold text-primary font-mono">{finalPrice} {box.tokenSymbol}</span>, {t(content.story.selling.waiting, lang)}
                        </Paragraph>
                    </div>
                )}

                {status === 'Auctioning' && (
                    <div className="flex flex-col items-center py-6 space-y-3 bg-surface-light rounded-lg border border-orange-500/30">
                        <div className="animate-bounce text-3xl font-black text-orange-500 font-mono">
                            {currentBid} {box.tokenSymbol}
                        </div>
                        <Paragraph className="text-orange-400/80 animate-pulse text-sm">
                            {t(content.story.auctioning.bidding, lang)}
                        </Paragraph>
                    </div>
                )}

                {status === 'Paid' && (
                    <div className="flex flex-col items-center py-6 space-y-3 bg-green-500/10 rounded-lg border border-green-500/30">
                        <div className="text-2xl font-bold text-green-500 font-mono">
                            {t(content.story.paid.completed, lang)} {finalPrice} {box.tokenSymbol}
                        </div>
                        <Paragraph className=" animate-pulse text-sm">
                            {t(content.story.paid.locked, lang)}
                        </Paragraph>
                    </div>
                )}

                {status === 'Published' && (
                    <div className="flex flex-col gap-3 mt-6 items-center">
                        <div className="text-4xl mb-2">🎉📰⚖️</div>
                        <div className="bg-success/10 border border-success/30 rounded-lg p-4 w-full mb-4">
                            <div className="space-y-3 p-2">
                                <div className="flex justify-between text-sm border-b border-success/20 pb-2">
                                    <span className="text-success/70">{t(content.labels.purchaseIncome, lang)}</span>
                                    <span className="font-mono text-success">{box.purchaseIncome.toFixed(2)} {box.tokenSymbol}</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-success/20 pb-2">
                                    <span className="text-success/70">{t(content.labels.delayIncome, lang)}</span>
                                    <span className="font-mono text-success">{box.delayIncome.toFixed(2)} {box.tokenSymbol}</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-success/20 pb-2">
                                    <span className="text-success/70">{t(content.labels.serviceFee, lang)}</span>
                                    <span className="font-mono text-red-400">-{((box.purchaseIncome + box.delayIncome) * 0.03).toFixed(2)} {box.tokenSymbol}</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="font-bold text-success">{t(content.labels.netReward, lang)}</span>
                                    <span className="text-xl font-black text-success">{box.totalReward.toFixed(2)} {box.tokenSymbol}</span>
                                </div>
                            </div>
                        </div>
                        <Button variant='primary' onClick={() => {
                            updateListedMode('N/A');
                            setStatus('Storing');
                        }}>
                            {t(content.labels.restart, lang)}
                        </Button>

                    </div>
                )}
            </div>


            
        </div>
    );
};

export default InteractiveStory;
