import React from 'react';

interface TimerBarProps {
    progress: number;
    daysLeft: number;
}

const TimerBar: React.FC<TimerBarProps> = ({ progress, daysLeft }) => (
    <div className="w-full mt-4">
        <div className="flex justify-between items-end mb-1 px-1">
            <span className="text-xs font-bold text-muted-foreground">Timer</span>
            <span className="text-sm font-mono font-bold text-red-500 animate-pulse">
                Can still delay: {Math.max(0, Math.floor(daysLeft))} days
            </span>
        </div>
        <div className="w-full bg-surface rounded-full h-4 overflow-hidden relative">
            <div
                className="h-full bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
            />
        </div>
    </div>
);

export default TimerBar;
