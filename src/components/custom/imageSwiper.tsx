'use client';

import React, { useEffect, useState, useMemo } from 'react';

interface ImageSwiperProps {
    images: string[];
    aspectRatio?: number;
    autoPlayInterval?: number;
    autoPlay?: boolean;
    altPrefix?: string;
    transitionDuration?: number;
    className?: string;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({
    images = [],
    aspectRatio = 1,
    autoPlayInterval = 4000,
    autoPlay = true,
    className = '',
    altPrefix = 'image',
    transitionDuration = 2,
}) => {
    // Filter valid images
    const validImages = useMemo(() => 
        (images || []).filter(img => img && typeof img === 'string' && img.trim() !== ""),
        [images]
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay || validImages.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % validImages.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [autoPlay, autoPlayInterval, validImages.length]);

    if (validImages.length === 0) {
        return (
            <div 
                className={`w-full bg-black/20 flex items-center justify-center rounded-t-xl ${className}`}
                style={{ aspectRatio: aspectRatio }}
            >
                <span className="text-white/30 text-sm">No images</span>
            </div>
        );
    }

    return (
        <div 
            className={`w-full bg-black/10 flex justify-center items-center overflow-hidden rounded-t-xl relative ${className}`}
            style={{ aspectRatio: aspectRatio }}
        >
            <div className="w-full h-full relative">
                {validImages.map((image, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <img
                            key={`${image}-${index}`}
                            src={image.startsWith('ipfs://') ? `https://ipfs.io/ipfs/${image.replace('ipfs://', '')}` : image}
                            alt={`${altPrefix}-${index + 1}`}
                            className={`w-full h-full object-cover absolute left-0 top-0 transition-opacity ease-in-out`}
                            style={{ 
                                transitionDuration: `${transitionDuration}s`,
                                opacity: isActive ? 1 : 0,
                                zIndex: isActive ? 20 : 10
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ImageSwiper;