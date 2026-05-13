import React from 'react';

import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export const Subtitle: React.FC<Props> = ({ children, className, size = 'md' }) => {

    const sizeMap = {
        xs: 'text-xs md:text-sm lg:text-base',
        sm: 'text-sm md:text-base lg:text-lg',
        md: 'text-base md:text-lg lg:text-xl',
        lg: 'text-lg md:text-xl lg:text-2xl',
        xl: 'text-xl md:text-2xl lg:text-3xl',
    };

    const sizeClass = size ? sizeMap[size] : sizeMap.md;
    return (

        <h3 className={twMerge(
            "font-headline font-bold",
            sizeClass,
            className)}>
            {children}
        </h3>
    );
}
