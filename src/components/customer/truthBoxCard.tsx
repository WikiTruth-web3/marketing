"use client";

import React from 'react';
import PriceLabel from '../base/priceLabel';
import ImageSwiper from './imageSwiper';
import StatusLabel from '../base/statusLabel';

interface TruthBoxCardProps {
    data: {
        boxId: string;
        title: string;
        nftImage: string;
        boxImage: string;
        country: string;
        state: string;
        eventDate: string;
        price: string;
        status: string;
        tokenSymbol: string;
        tokenDecimals: number;
        precision: number;
    };
    onClick?: () => void;
    className?: string;
}

const TruthBoxCard: React.FC<TruthBoxCardProps> = ({
    data,
    onClick,
    className = "",
}) => {
    if (!data) return null;

    // Price data for PriceLabel
    const priceData = {
        formattedPrice: data.price,
        fullPrice: data.price
    };

    return (
        <div
            className={`flex flex-col items-center w-full bg-[#1A1B23] border border-white/5 rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-blue-500/50 hover:translate-y-[-4px] ${onClick ? 'cursor-pointer' : ''} ${className}`}
            onClick={onClick}
        >
            {/* Image swiper area */}
            <div className="w-full relative">
                <ImageSwiper
                    images={[data.boxImage, data.nftImage]}
                    altPrefix={`truthbox-${data.boxId}`}
                    className="w-full"
                    aspectRatio={1}
                />
            </div>

            {/* Content area */}
            <div className="w-full p-4 flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-neutral-200 text-sm md:text-base font-medium line-clamp-2 min-h-[40px] leading-tight">
                    {data.title}
                </h3>

                {/* Location and Date */}
                <div className="flex justify-between items-center text-xs text-neutral-400">
                    <span className="line-clamp-1">{data.country}, {data.state}</span>
                    <span>{data.eventDate}</span>
                </div>

                <div className="h-px bg-white/5 w-full" />

                {/* Footer: ID, Price, Status */}
                <div className="flex justify-between items-center">
                    <span className="text-white font-mono text-sm">#{data.boxId}</span>
                    
                    <div className="flex items-center gap-2">
                        <PriceLabel
                            data={priceData}
                            symbol={data.tokenSymbol}
                            size="sm"
                        />
                        <StatusLabel
                            status={data.status}
                            size="sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TruthBoxCard;
