"use client"

import React, { useMemo } from 'react';

export interface PriceTextProps {
    formattedPrice: string;
    fullPrice: string;
}

export interface PriceLabelProps {
    data: PriceTextProps;
    symbol?: string;
    showSymbol?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    unitPosition?: 'left' | 'right';
    responsive?: boolean;
}

const PriceLabel: React.FC<PriceLabelProps> = ({
    data,
    symbol = 'ETH',
    showSymbol = true,
    className = '',
    size = 'sm',
    unitPosition = 'right',
    responsive = true,
}) => {

    // Get style configuration based on size
    const sizeConfig_price = useMemo(() => {
        return {
            sm: 'text-xs md:text-sm lg:text-base',
            md: 'text-sm md:text-md lg:text-lg',
            lg: 'text-lg md:text-xl lg:text-2xl',
            xl: 'text-xl md:text-2xl lg:text-3xl',
        };
    }, [size]);

    const sizeConfig_symbol = useMemo(() => {
        return {
            sm: 'text-xs md:text-sm',
            md: 'text-sm md:text-base ',
            lg: 'text-md md:text-lg ',
            xl: 'text-lg md:text-xl ',
        };
    }, [size]);

    // Build price text
    const priceElement = (
        <span className={`text-primary ${sizeConfig_price[size] || ''} ${className}`}>
            {data.formattedPrice}
        </span>
    );

    // Symbol element
    const symbolElement = showSymbol && symbol ? (
        <span className={`${sizeConfig_symbol[size] || ''} text-neutral-400`}>
            {symbol}
        </span>
    ) : null;

    return (
        <div
            className={`inline-flex items-end ${responsive ? 'gap-2' : 'gap-1'} `}
        >
            {unitPosition === 'left' && symbolElement}
            {priceElement}
            {unitPosition === 'right' && symbolElement}
        </div>
    );
};

export default PriceLabel;