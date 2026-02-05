import React from 'react';

interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({variant, children, className, ...props}) => {
  if (variant === 'primary') {
    return (
      <button 
        className={`h-14 px-10 rounded-xl bg-primary text-black font-bold text-lg hover:shadow-[0_0_40px_rgba(19,236,91,0.5)] transition-all uppercase tracking-wide flex items-center justify-center ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button 
      className={`h-14 px-8 rounded-xl border border-white/20 bg-white/5 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
