"use client";

import React from 'react';
import PriceLabel from '../base/priceLabel';
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
            className={`flex flex-col items-center w-full bg-surface-low border border-white/5 
                rounded-2xl overflow-hidden shadow-2xl  ${className}`}
            onClick={onClick}
        >
            {/* Image swiper area */}
            <div className="w-full relative">
                <img
                    src={data.boxImage}
                    className='w-full'
                >

                </img>
            </div>

            {/* Content area */}
            <div className="w-full p-4 flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-content text-sm md:text-md line-clamp-2 min-h-[30px] leading-tight">
                    {data.title}
                </h3>

                {/* Location and Date */}
                <div className="flex justify-between items-center text-xs text-text-dim">
                    <span className="line-clamp-1">{data.country}, {data.state}</span>
                    <span>{data.eventDate}</span>
                </div>

                <div className="h-px bg-white/5 w-full" />

                {/* Footer: ID, Price, Status */}
                <div className="flex justify-between items-center">
                    <span className="text-text-light text-sm">#{data.boxId}</span>

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
