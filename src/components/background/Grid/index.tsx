import React from 'react';

interface GridProps {
    color?: string;
    size?: number;
    lineWidth?: number;
    opacity?: number;
    backgroundColor?: string;
    className?: string;
}

const Grid: React.FC<GridProps> = ({
    color = 'rgba(122, 187, 58, 0.2)',
    size = 32,
    lineWidth = 1,
    opacity = 1,
    backgroundColor = 'transparent',
    className = '',
}) => {
    const style: React.CSSProperties = {
        backgroundColor,
        backgroundImage: `
            linear-gradient(to right, ${color} ${lineWidth}px, transparent ${lineWidth}px),
            linear-gradient(to bottom, ${color} ${lineWidth}px, transparent ${lineWidth}px)
        `,
        backgroundSize: `${size}px ${size}px`,
        opacity,
    };

    return <div className={`w-full h-full ${className}`.trim()} style={style} />;
};

export default Grid;
