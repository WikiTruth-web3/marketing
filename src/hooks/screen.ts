import { useMemo, useSyncExternalStore } from 'react';

/** Align with Tailwind v4 default breakpoints */
export const SCREEN_MD_PX = 768;
export const SCREEN_LG_PX = 1024;

export type ScreenCategory = 'mobile' | 'tablet' | 'desktop';

export function getScreenCategory(width: number): ScreenCategory {
  if (width < SCREEN_MD_PX) return 'mobile';
  if (width < SCREEN_LG_PX) return 'tablet';
  return 'desktop';
}

function subscribe(onChange: () => void) {
  window.addEventListener('resize', onChange);
  window.addEventListener('orientationchange', onChange);
  return () => {
    window.removeEventListener('resize', onChange);
    window.removeEventListener('orientationchange', onChange);
  };
}

function getScreenSnapshot(): string {
  const w = window.innerWidth;
  return `${getScreenCategory(w)}|${w}`;
}

/** Stable default for SSR / first paint before hydration */
function getServerSnapshot(): string {
  return `desktop|${SCREEN_LG_PX}`;
}

export type UseScreenResult = {
  width: number;
  category: ScreenCategory;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

/**
 * Viewport bucket: mobile (<768), tablet [768, 1024), desktop (≥1024).
 * Uses `useSyncExternalStore` so behavior is consistent with SSR/hydration.
 */
export function useScreen(): UseScreenResult {
  const snap = useSyncExternalStore(subscribe, getScreenSnapshot, getServerSnapshot);
  return useMemo(() => {
    const [category, wStr] = snap.split('|');
    const width = Number(wStr);
    const cat = category as ScreenCategory;
    return {
      width,
      category: cat,
      isMobile: cat === 'mobile',
      isTablet: cat === 'tablet',
      isDesktop: cat === 'desktop',
    };
  }, [snap]);
}
