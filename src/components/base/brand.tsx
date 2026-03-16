import React from 'react';
import { PROJECT_NAME } from '@/content/project';

export const Brand: React.FC = () => {
    return (
        <div className="flex flex-row items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center transition-all">
              <img src='/logo/logo.svg' alt="Logo" className="w-6 h-6" />
              
            </div>
            <div className="flex flex-col">

            <span className="text-white font-bold text-lg tracking-tight group-hover:neon-text transition-all">
                {PROJECT_NAME.start} <span className="text-primary">{PROJECT_NAME.end}</span>
            </span>
            <p className="text-white/50 text-xs tracking-wider">
                Whistleblower-privacy
            </p>

        </div>
            </div>
        
    );
};