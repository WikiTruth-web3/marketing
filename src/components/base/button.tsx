import React from 'react';
import { twMerge } from 'tailwind-merge';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    className?: string;

}


export const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    children, 
    className, 
    onClick,
    disabled,
    ...props 
}) => {

    const variantStyle = {
        primary: 'bg-primary text-primary-dark',
        secondary: 'bg-secondary text-black',
        outline: 'ring-primary ring-2 ring-inset text-primary',
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={twMerge(
                variantStyle[variant],
                'px-3 md:px-5 py-1.5 md:py-2',
                'rounded-lg font-bold text-sm md:text-base',
                'hover:opacity-90 active:scale-95 transition-all',
                disabled && 'opacity-40 cursor-not-allowed grayscale active:scale-100 hover:opacity-40',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}


