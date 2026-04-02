import React, { useEffect, useMemo, useRef } from 'react';

interface GridProps {
    variant?: 'lines' | 'dots';
    color?: string;
    size?: number;
    lineWidth?: number;
    dotRadius?: number;
    opacity?: number;
    backgroundColor?: string;
    enableMouseGlow?: boolean;
    glowColor?: string;
    glowRadius?: number;
    glowFadePercent?: number; // 0-100, 越小越快消失
    enableProjectionGlow?: boolean;
    projectionBlur?: number; // 投影
    projectionOpacity?: number;
    projectionColor?: string;
    className?: string;
}

const Grid: React.FC<GridProps> = ({
    variant = 'lines',
    color = 'rgba(122, 187, 58, 0.2)',
    size = 32,
    lineWidth = 1,
    dotRadius,
    opacity = 1,
    backgroundColor = 'transparent',
    enableMouseGlow = false,
    glowColor = 'rgba(122, 187, 58, 0.55)',
    glowRadius = 140,
    glowFadePercent = 70,
    enableProjectionGlow = false,
    projectionBlur = 6,
    projectionOpacity = 0.35,
    projectionColor,
    className = '',
}) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const rafIdRef = useRef<number | null>(null);
    const lastPosRef = useRef({ x: -9999, y: -9999 });

    const dotRadiusPx = dotRadius ?? Math.max(0.5, lineWidth * 0.85);
    const resolvedProjectionColor = projectionColor ?? glowColor;
    const baseProjectionOpacity = opacity * projectionOpacity;

    const basePattern = useMemo(() => {
        const common = { backgroundColor, backgroundSize: `${size}px ${size}px` };

        if (variant === 'dots') {
            return {
                ...common,
                backgroundImage: `radial-gradient(circle at center, ${color} 0px, ${color} ${dotRadiusPx}px, transparent ${dotRadiusPx + 0.01}px)`,
                opacity,
            };
        }

        // lines
        return {
            ...common,
            backgroundImage: `
                linear-gradient(to right, ${color} ${lineWidth}px, transparent ${lineWidth}px),
                linear-gradient(to bottom, ${color} ${lineWidth}px, transparent ${lineWidth}px)
            `,
            opacity,
        };
    }, [backgroundColor, color, dotRadiusPx, lineWidth, opacity, size, variant]);

    const projectionBasePattern = useMemo(() => {
        const common = { backgroundColor: 'transparent', backgroundSize: `${size}px ${size}px` };

        if (variant === 'dots') {
            return {
                ...common,
                backgroundImage: `radial-gradient(circle at center, ${resolvedProjectionColor} 0px, ${resolvedProjectionColor} ${dotRadiusPx}px, transparent ${dotRadiusPx + 0.01}px)`,
                opacity: baseProjectionOpacity,
            };
        }

        return {
            ...common,
            backgroundImage: `
                linear-gradient(to right, ${resolvedProjectionColor} ${lineWidth}px, transparent ${lineWidth}px),
                linear-gradient(to bottom, ${resolvedProjectionColor} ${lineWidth}px, transparent ${lineWidth}px)
            `,
            opacity: baseProjectionOpacity,
        };
    }, [baseProjectionOpacity, dotRadiusPx, lineWidth, resolvedProjectionColor, size, variant]);

    const glowPattern = useMemo(() => {
        if (variant === 'dots') {
            return {
                backgroundColor: 'transparent',
                backgroundImage: `radial-gradient(circle at center, ${glowColor} 0px, ${glowColor} ${dotRadiusPx}px, transparent ${dotRadiusPx + 0.01}px)`,
                backgroundSize: `${size}px ${size}px`,
                opacity: 1,
            };
        }

        // lines
        return {
            backgroundColor: 'transparent',
            backgroundImage: `
                linear-gradient(to right, ${glowColor} ${lineWidth}px, transparent ${lineWidth}px),
                linear-gradient(to bottom, ${glowColor} ${lineWidth}px, transparent ${lineWidth}px)
            `,
            backgroundSize: `${size}px ${size}px`,
            opacity: 1,
        };
    }, [dotRadiusPx, glowColor, lineWidth, size, variant]);

    const projectionGlowPattern = useMemo(() => {
        const common = { backgroundColor: 'transparent', backgroundSize: `${size}px ${size}px` };
        if (variant === 'dots') {
            return {
                ...common,
                backgroundImage: `radial-gradient(circle at center, ${resolvedProjectionColor} 0px, ${resolvedProjectionColor} ${dotRadiusPx}px, transparent ${dotRadiusPx + 0.01}px)`,
                opacity: projectionOpacity,
            };
        }
        return {
            ...common,
            backgroundImage: `
                linear-gradient(to right, ${resolvedProjectionColor} ${lineWidth}px, transparent ${lineWidth}px),
                linear-gradient(to bottom, ${resolvedProjectionColor} ${lineWidth}px, transparent ${lineWidth}px)
            `,
            opacity: projectionOpacity,
        };
    }, [dotRadiusPx, lineWidth, projectionOpacity, resolvedProjectionColor, size, variant]);

    const updateGlowVars = () => {
        const el = rootRef.current;
        if (!el) return;
        el.style.setProperty('--mx', `${lastPosRef.current.x}px`);
        el.style.setProperty('--my', `${lastPosRef.current.y}px`);
    };

    useEffect(() => {
        if (!enableMouseGlow) return;

        const handler = (e: PointerEvent) => {
            const el = rootRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const insideX = e.clientX >= rect.left && e.clientX <= rect.right;
            const insideY = e.clientY >= rect.top && e.clientY <= rect.bottom;

            // 鼠标不在组件范围内时，将中心点移到屏幕外，让 glow 不可见。
            if (!insideX || !insideY) {
                lastPosRef.current = { x: -9999, y: -9999 };
            } else {
                lastPosRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                };
            }

            if (rafIdRef.current != null) return;
            rafIdRef.current = window.requestAnimationFrame(() => {
                rafIdRef.current = null;
                updateGlowVars();
            });
        };

        window.addEventListener('pointermove', handler, { passive: true });
        return () => {
            window.removeEventListener('pointermove', handler);
        };
    }, [enableMouseGlow]);

    const glowMask = useMemo(
        () =>
            `radial-gradient(circle var(--glow-radius) at var(--mx) var(--my), rgba(0,0,0,1) 0%, rgba(0,0,0,0) ${glowFadePercent}%)`,
        [glowFadePercent]
    );

    const rootVars: React.CSSProperties = {
        ['--mx' as any]: '-9999px',
        ['--my' as any]: '-9999px',
        ['--glow-radius' as any]: `${glowRadius}px`,
    };

    return (
        <div
            ref={rootRef}
            className={`relative w-full h-full ${className}`.trim()}
            style={rootVars}
        >
            {enableProjectionGlow ? (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        ...projectionBasePattern,
                        filter: `blur(${projectionBlur}px)`,
                        transform: 'translateZ(0)',
                    }}
                />
            ) : null}

            {/* base grid */}
            <div className="absolute inset-0" style={basePattern} />

            {/* mouse-follow bright grid */}
            {enableMouseGlow ? (
                <>
                    {enableProjectionGlow ? (
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={
                                {
                                    ...projectionGlowPattern,
                                    WebkitMaskImage: glowMask,
                                    maskImage: glowMask,
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskSize: '100% 100%',
                                    maskSize: '100% 100%',
                                    filter: `blur(${projectionBlur}px)`,
                                    transform: 'translateZ(0)',
                                } as React.CSSProperties
                            }
                        />
                    ) : null}

                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={
                            {
                                ...glowPattern,
                                WebkitMaskImage: glowMask,
                                maskImage: glowMask,
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskSize: '100% 100%',
                                maskSize: '100% 100%',
                            } as React.CSSProperties
                        }
                    />
                </>
            ) : null}
        </div>
    );
};

export default Grid;
