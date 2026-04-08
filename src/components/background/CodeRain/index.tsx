import React, { useEffect, useRef } from 'react';

interface CodeRainProps {
    count?: number;
    gap?: number;
    speed?: number;
    fontSize?: number;
    color?: string;
    characters?: string;
    tailLength?: number;
    headColor?: string;
    headGlowBlur?: number;
    trailFade?: number; // 0-1, 越大拖影越明显
    pulseStrength?: number; // 0-1, 整体呼吸亮度幅度
    jitter?: number; // 0-1, 随机亮度抖动幅度
    charHoldMs?: number; // 字符保持时间，毫秒
    className?: string;
}

const DEFAULT_CHARS = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-<>?';

const randomChar = (chars: string) => chars[Math.floor(Math.random() * chars.length)];

interface RainColumn {
    y: number;
    chars: string[];
    holdMs: number;
    elapsedMs: number;
}

const CodeRain: React.FC<CodeRainProps> = ({
    count = 80,
    gap = 20,
    speed = 1,
    fontSize = 14,
    color = 'rgba(122, 187, 58, 0.8)',
    characters = DEFAULT_CHARS,
    tailLength = 14,
    headColor = 'rgba(210, 255, 210, 0.96)',
    headGlowBlur = 8,
    trailFade = 0.08,
    pulseStrength = 0.14,
    jitter = 0.06,
    charHoldMs = 85,
    className = '',
}) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const root = rootRef.current;
        const canvas = canvasRef.current;
        if (!root || !canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId = 0;
        let columns = 0;
        let streams: RainColumn[] = [];
        let lastTime = performance.now();

        const nextHoldMs = () => Math.max(16, charHoldMs + (Math.random() - 0.5) * charHoldMs * 0.35);

        const resize = () => {
            const rect = root.getBoundingClientRect();
            const dpr = Math.max(1, window.devicePixelRatio || 1);

            canvas.width = Math.floor(rect.width * dpr);
            canvas.height = Math.floor(rect.height * dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const byGap = Math.max(1, Math.floor(rect.width / Math.max(1, gap)));
            columns = Math.max(1, Math.min(count, byGap));
            streams = Array.from({ length: columns }, () => ({
                y: Math.random() * -rect.height,
                chars: Array.from({ length: Math.max(2, tailLength) }, () => randomChar(characters)),
                holdMs: nextHoldMs(),
                elapsedMs: Math.random() * charHoldMs,
            }));
        };

        const draw = (now: number) => {
            const width = canvas.width / Math.max(1, window.devicePixelRatio || 1);
            const height = canvas.height / Math.max(1, window.devicePixelRatio || 1);
            const dt = Math.min(48, Math.max(8, now - lastTime));
            lastTime = now;
            const dtScale = dt / 16.67;
            const timeSec = now / 1000;

            // 尾迹残影
            ctx.fillStyle = `rgba(0, 0, 0, ${trailFade})`;
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = 'top';

            const spacing = columns > 1 ? width / (columns - 1) : width;
            const trailSteps = Math.max(2, tailLength);
            const stepY = fontSize * 0.9;
            const pulse = 1 + Math.sin(timeSec * 1.8) * pulseStrength;

            for (let i = 0; i < columns; i += 1) {
                const x = columns > 1 ? i * spacing : width * 0.5;
                const stream = streams[i];
                const y = stream.y;

                stream.elapsedMs += dt;
                if (stream.elapsedMs >= stream.holdMs) {
                    stream.elapsedMs = 0;
                    stream.holdMs = nextHoldMs();
                    stream.chars.pop();
                    stream.chars.unshift(randomChar(characters));
                }

                // 尾迹字符
                for (let t = trailSteps - 1; t >= 1; t -= 1) {
                    const char = stream.chars[t % stream.chars.length];
                    const alpha = ((trailSteps - t) / trailSteps) * 0.85;
                    const brightnessNoise = 1 + (Math.random() - 0.5) * jitter;
                    ctx.fillStyle = color;
                    ctx.globalAlpha = Math.min(1, Math.max(0, alpha * pulse * brightnessNoise));
                    ctx.fillText(char, x, y - t * stepY);
                }
                ctx.globalAlpha = 1;

                // 亮头字符
                ctx.save();
                ctx.shadowColor = headColor;
                ctx.shadowBlur = headGlowBlur;
                ctx.fillStyle = headColor;
                ctx.fillText(stream.chars[0], x, y);
                ctx.restore();

                stream.y += speed * (fontSize * 0.72) * dtScale;
                if (stream.y > height + Math.random() * 120) {
                    stream.y = -Math.random() * height * 0.7;
                    stream.chars = Array.from({ length: trailSteps }, () => randomChar(characters));
                }
            }
        };

        const loop = (now: number) => {
            animationId = window.requestAnimationFrame(loop);
            draw(now);
        };

        resize();
        window.addEventListener('resize', resize);
        animationId = window.requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationId);
        };
    }, [
        charHoldMs,
        characters,
        color,
        count,
        fontSize,
        gap,
        headColor,
        headGlowBlur,
        jitter,
        pulseStrength,
        speed,
        tailLength,
        trailFade,
    ]);

    return (
        <div ref={rootRef} className={`w-full h-full ${className}`.trim()}>
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
};

export default CodeRain;
