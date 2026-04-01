import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, prefixIcon, suffixIcon, containerClassName, className, ...props }, ref) => {
    return (
      <div className={twMerge('flex flex-col gap-1.5 w-full', containerClassName)}>
        {label && (
          <label className="text-sm font-medium text-gray-300 ml-1">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {prefixIcon && (
            <div className="absolute left-3 flex items-center justify-center text-gray-400 pointer-events-none">
              {prefixIcon}
            </div>
          )}
          <input
            ref={ref}
            className={twMerge(
              'w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white',
              'placeholder:text-gray-500 outline-none transition-all duration-200',
              'focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20',
              prefixIcon && 'pl-10',
              suffixIcon && 'pr-10',
              className
            )}
            {...props}
          />
          {suffixIcon && (
            <div className="absolute right-3 flex items-center justify-center text-gray-400">
              {suffixIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-xs text-red-500 mt-0.5 ml-1 animate-in fade-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
