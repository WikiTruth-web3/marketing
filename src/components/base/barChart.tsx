import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface BarChartItem {
    label: string;
    value: string | number;
    description?: string;
}

interface BarChartProps {
    data: BarChartItem[];
    maxVal?: number;
    className?: string;
    height?: number | string;
    barClassName?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
    data,
    maxVal: customMaxVal,
    className,
    height = 320,
    barClassName
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

    // Calculate max value from data if not provided
    const numericValues = data.map(item => {
        if (typeof item.value === 'number') return item.value;
        const parsed = parseInt(item.value.replace(/[^0-9]/g, ''));
        return isNaN(parsed) ? 0 : parsed;
    });

    const maxVal = customMaxVal || Math.max(...numericValues, 1);

    return (
        <div
            ref={containerRef}
            className={twMerge("w-full flex items-end justify-between gap-4 md:gap-8 relative", className)}
            style={{ height }}
        >
            {/* Grid lines background */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-white border-t border-dashed"></div>
                ))}
            </div>

            {data.map((item, index) => {
                const val = numericValues[index];
                // Scale so max value is around 85% height to leave room for labels
                const heightPercent = (val / maxVal) * 85;

                return (
                    <div key={index} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group/bar z-10">
                        <div className="w-full relative flex items-end justify-center h-full">
                            <div
                                className={twMerge(
                                    "w-full max-w-[80px] bg-gradient-to-t from-primary/20 via-primary/60 to-primary rounded-t-lg relative transition-all duration-[1200ms] cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    "group-hover/bar:brightness-110 group-hover/bar:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]",
                                    barClassName
                                )}
                                style={{
                                    height: isVisible ? `${heightPercent}%` : '0%',
                                    transitionDelay: `${index * 150}ms`
                                }}
                            >
                                {/* Value Text over the bar */}
                                <div
                                    className={twMerge(
                                        "absolute -top-10 left-1/2 -translate-x-1/2 text-primary font-bold text-sm md:text-base whitespace-nowrap transition-all duration-700 delay-500",
                                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    )}
                                    style={{ transitionDelay: `${800 + index * 150}ms` }}
                                >
                                    {item.value}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Label */}
                        <span className="text-xs md:text-sm text-white/40 font-medium text-center truncate w-full">
                            {item.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
