import React from 'react';

import { twMerge } from 'tailwind-merge';



interface Props extends React.ParagraphHTMLAttributes<HTMLParagraphElement> {

    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

    className?: string;

}


export const Paragraph: React.FC<Props> = ({ children, className, size = 'sm' }) => {
    const sizeMap = {
        xs: 'text-[11px] md:text-xs lg:text-sm',
        sm: 'text-xs md:text-sm lg:text-base',
        md: 'text-sm md:text-base lg:text-lg',
        lg: 'text-base md:text-lg lg:text-xl',
        xl: 'text-lg md:text-xl lg:text-2xl',
    };

    const sizeClass = sizeMap[size];
    return (

        <p className={twMerge(
            "leading-relaxed",
            sizeClass,
            className)}>
            {children}
        </p>
    );
}
