"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import TruthBoxCard from "@/components/custom/truthBoxCard";

export interface TruthBoxCardData {
  boxId: string;
  title: string;
  nftImage: string;
  boxImage: string;
  country: string;
  state: string;
  eventDate: string;
  price: string;
  status: string;
  tokenSymbol: string;
  tokenDecimals: number;
  precision: number;
}

interface StackedTruthBoxCarouselProps {
  cards: TruthBoxCardData[];
  intervalMs?: number;
  visibleLayers?: number;
  className?: string;
}

const StackedTruthBoxCarousel: React.FC<StackedTruthBoxCarouselProps> = ({
  cards,
  intervalMs = 3000,
  visibleLayers = 4,
  className = "",
}) => {
  const EXIT_DURATION_MS = 700;
  const validCards = useMemo(
    () => (cards || []).filter((card) => card && card.boxId),
    [cards]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);
  const [insertedBottomIndex, setInsertedBottomIndex] = useState<number | null>(
    null
  );
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (validCards.length <= 1) return;
    activeIndexRef.current = activeIndex;
  }, [activeIndex, validCards.length]);

  useEffect(() => {
    if (validCards.length <= 1) return;
    let reorderTimer: ReturnType<typeof setTimeout> | null = null;
    let revealTimer: ReturnType<typeof setTimeout> | null = null;

    const intervalTimer = setInterval(() => {
      if (isAnimatingRef.current) return;

      const currentIndex = activeIndexRef.current;
      isAnimatingRef.current = true;
      setExitingIndex(currentIndex);
      setInsertedBottomIndex(null);

      reorderTimer = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % validCards.length;
        setActiveIndex(nextIndex);
        setExitingIndex(null);
        setInsertedBottomIndex(currentIndex);

        revealTimer = setTimeout(() => {
          setInsertedBottomIndex(null);
          isAnimatingRef.current = false;
        }, 50);
      }, EXIT_DURATION_MS);
    }, intervalMs);

    return () => {
      clearInterval(intervalTimer);
      if (reorderTimer) clearTimeout(reorderTimer);
      if (revealTimer) clearTimeout(revealTimer);
      isAnimatingRef.current = false;
    };
  }, [intervalMs, validCards.length]);

  if (validCards.length === 0) return null;

  const totalLayers = Math.min(
    4,
    Math.max(1, visibleLayers),
    validCards.length
  );

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full min-h-[500px]">
        {validCards.map((card, index) => {
          const relative =
            (index - activeIndex + validCards.length) % validCards.length;
          const isVisible = relative < totalLayers;
          const isActive = index === activeIndex;
          const isLeaving = index === exitingIndex;
          const isInsertedAtBottom =
            index === insertedBottomIndex && relative === totalLayers - 1;

          const layerOffsetX = relative * 30;
          const layerOffsetY = relative * -30;
          const layerScale = 1 - relative * 0.04;

          const stackTransform = `translate3d(${layerOffsetX}px, ${layerOffsetY}px, 0) scale(${layerScale})`;
          const exitTransform = "translate3d(-36px, 28px, 0) scale(0.94)";
          const hiddenTransform = "translate3d(56px, -44px, 0) scale(0.9)";

          let transform = hiddenTransform;
          let opacity = 0;
          let zIndex = 0;
          let transitionDuration = `${EXIT_DURATION_MS}ms`;

          if (isLeaving) {
            // Outgoing card moves from top-right direction to bottom-left and fades.
            transform = exitTransform;
            opacity = 0;
            zIndex = 120;
          } else if (isVisible) {
            transform = stackTransform;
            opacity = Math.max(0.35, 1 - relative * 0.3);
            zIndex = 100 - relative;
            if (isInsertedAtBottom) {
              transitionDuration = "0ms";
            }
          }

          return (
            <div
              key={`${card.boxId}-${index}`}
              className="absolute inset-0 transition-all duration-700 ease-out will-change-transform"
              style={{
                transform,
                opacity,
                zIndex,
                transitionDuration,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <TruthBoxCard data={card} className="w-full max-w-[360px] mx-auto" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackedTruthBoxCarousel;
