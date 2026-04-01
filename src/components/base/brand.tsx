import React from 'react';
import { ProjectName } from './projectName';

export const Brand: React.FC = () => {
    return (
        <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-all">
                <div
                    className="logo-mask h-full w-full bg-primary"
                    role="img"
                    aria-label="Logo"
                />
            </div>
            <div className="flex flex-col">

                {/* <span className="text-white font-bold text-lg tracking-tight group-hover:neon-text transition-all">
                    {PROJECT_NAME.start} <span className="text-primary">{PROJECT_NAME.end}</span>
                </span> */}
                <ProjectName />
                <p className="text-white/50 text-xs tracking-wider">
                    Whistleblower-privacy
                </p>

            </div>
        </div>

    );
};