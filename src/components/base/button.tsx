import React from 'react';
import { twMerge } from 'tailwind-merge';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    className?: string;

}


export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, onClick }) => {

    const variantStyle = {
        primary: 'bg-primary text-primary-dark',
        secondary: 'bg-secondary  text-black',
        // border 2px solid inset
        outline: 'ring-primary ring-2 ring-inset text-primary',
    }

    return (
        <button
            onClick={onClick}
            className={twMerge(
                variantStyle[variant],
                'px-3 md:px-5 py-1.5 md:py-2',
                ' rounded-lg font-bold text-sm md:text-base',
                ' hover:opacity-90 active:scale-95 transition-all',
                className
            )}
        >
            {children}
        </button>
    );

}

