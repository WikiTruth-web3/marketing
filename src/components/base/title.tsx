import React from 'react';

import { twMerge } from 'tailwind-merge';



interface Props extends React.HTMLAttributes<HTMLElement> {

    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';

    className?: string;

}


export const Title: React.FC<Props> = ({ children, className, size }) => {

    const sizeMap = {
        'sm': 'text-base md:text-lg lg:text-2xl',
        'md': 'text-lg md:text-2xl lg:text-4xl',
        'lg': 'text-xl md:text-3xl lg:text-5xl',
        'xl': 'text-2xl md:text-4xl lg:text-6xl',
        '2xl': 'text-3xl md:text-5xl lg:text-7xl',
    };

    const sizeClass = size ? sizeMap[size] : sizeMap['md'];

    return (

        <h1 className={twMerge(
            "font-headline font-extrabold ",
            "mb-8 md:mb-16",
            sizeClass,
            className)}>
            {children}
        </h1>
    );
}
