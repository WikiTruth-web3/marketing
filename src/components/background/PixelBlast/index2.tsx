// Component inspired by github.com/zavalit/bayer-dithering-webgl-demo

import PixelBlast from './index.tsx';

export default function PixelBlastBackground() {
    return (
        <div className="w-full h-full relative overflow-hidden">
            <PixelBlast
                variant="diamond"
                pixelSize={5}
                color="#242f19"
                patternScale={2.75}
                patternDensity={1.6}
                pixelSizeJitter={0.55}
                enableRipples={false}
                rippleSpeed={0.4}
                rippleThickness={0.12}
                rippleIntensityScale={1.5}
                liquid={false}
                liquidStrength={0.12}
                liquidRadius={1.2}
                liquidWobbleSpeed={5}
                speed={1.65}
                edgeFade={0.08}
                transparent
            />
        </div>
    );
}