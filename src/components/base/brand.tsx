import React from 'react';
import { PROJECT_NAME } from '@/content/project';

export const Brand: React.FC = () => {
    return (
        <span className="text-white font-bold text-lg tracking-tight group-hover:neon-text transition-all">
                        {PROJECT_NAME.start} <span className="text-primary">{PROJECT_NAME.end}</span>
                      </span>
    );
};