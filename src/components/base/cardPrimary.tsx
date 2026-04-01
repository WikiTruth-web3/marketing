import React from 'react';

import { twMerge } from 'tailwind-merge';

interface Props extends React.h3HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
}


export const CardPrimary: React.FC<Props> = ({ children, className }) => {
    return (

        <div className={twMerge(
            "bg-primary text-primary-dark",
            " rounded-2xl p-6 md:p-10 flex flex-col justify-between",
            " shadow-2xl hover:-translate-y-2",
            " transition-transform duration-300",
            className)}
        >
            {children}
        </div>
    );
}
