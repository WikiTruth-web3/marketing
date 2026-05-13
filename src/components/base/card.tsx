import React from 'react';

import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLElement> {

    children: React.ReactNode;

    className?: string;

}

export const Card: React.FC<Props> = ({ children, className }) => {
    return (

        <div className={twMerge(
            "bg-surface rounded-2xl p-6 md:p-10 border border-white/5",
            " hover:bg-surface-low transition-colors group",
            className)}
        >
            {children}
        </div>
    );
}
