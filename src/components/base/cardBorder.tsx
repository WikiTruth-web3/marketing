import React from 'react';

import { twMerge } from 'tailwind-merge';



interface Props extends React.h3HTMLAttributes<HTMLElement> {

    children: React.ReactNode;

    className?: string;

}


export const CardBorder: React.FC<Props> = ({ children, className }) => {
    return (

        <div className={twMerge(
            "md:col-span-2 bg-surface ",
            " rounded-2xl p-6 md:p-10 flex flex-col justify-between ",
            "border border-white/5 ",
            "hover:border-primary-dim transition-all group",
            className)}
        >
            {children}
        </div>
    );
}
