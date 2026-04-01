import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className: string
    children: React.ReactNode;
}

export const Badge: React.FC<Props> = ({ children, className }) => {
    return (

        <div className={twMerge("inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-8 uppercase", className)}>
            {children}
        </div>
    );
};