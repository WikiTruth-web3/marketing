import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface PieChartProps {
    size?: number;
    strokeWidth?: number;
    targetPercentage: number;
    label?: string;
    className?: string;
    showPercentage?: boolean;
}

export const PieChart: React.FC<PieChartProps> = ({
    size = 250,
    strokeWidth = 30,
    targetPercentage,
    label,
    className,
    showPercentage = false
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // SVG Calculations
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min(Math.max(targetPercentage, 0), 100) / 100;
    const strokeDashoffset = isVisible ? circumference * (1 - percentage) : circumference;

    return (
        <div
            ref={containerRef}
            className={twMerge("flex items-center justify-center relative", className)}
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="transform -rotate-90"
            >
                {/* Background Circle */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                {/* Progress Circle */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    className="text-primary transition-all duration-[2000ms] ease-out"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        // strokeLinecap: 'round'
                    }}
                />
            </svg>

            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                {showPercentage && (
                    <span className="text-3xl font-bold text-white ">
                        {Math.round(targetPercentage)}%
                    </span>
                )}
                {label && (
                    <span className="text-white/60 text-xs uppercase tracking-wider mt-1">
                        {label}
                    </span>
                )}
            </div>
        </div>
    );
};
