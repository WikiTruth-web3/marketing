// Shared showcase data for COBE demos

export type ShowcaseConfig = {
    theta: number
    dark: number
    mapBrightness: number
    markerColor: [number, number, number]
    baseColor: [number, number, number]
    arcColor: [number, number, number]
    markerSize: number
    markerElevation: number
}

// Showcase: Stickers
export const stickerMarkers = [
    {
        id: 'sticker-paris',
        location: [48.86, 2.35] as [number, number],
        // sticker: '🥐',
    },
    {
        id: 'sticker-tokyo',
        location: [35.68, 139.65] as [number, number],
        // sticker: '🗼',
    },
    {
        id: 'sticker-nyc',
        location: [40.71, -74.01] as [number, number],
        // sticker: '🍎',
    },
    {
        id: 'sticker-rio',
        location: [-22.91, -43.17] as [number, number],
        // sticker: '🎭',
    },
    {
        id: 'sticker-sydney',
        location: [-33.87, 151.21] as [number, number],
        // sticker: '🐨',
    },
    {
        id: 'sticker-cairo',
        location: [30.04, 31.24] as [number, number],
        // sticker: '🐪',
    },
    {
        id: 'sticker-rome',
        location: [41.9, 12.5] as [number, number],
        // sticker: '🍕',
    },
    {
        id: 'sticker-mexico',
        location: [19.43, -99.13] as [number, number],
        // sticker: '🌮',
    },
    {
        id: 'sticker-india',
        location: [28.61, 77.21] as [number, number],
        // sticker: '🐘',
    },
    {
        id: 'sticker-iceland',
        location: [64.15, -21.94] as [number, number],
        // sticker: '🧊',
    },
    {
        id: 'sticker-london',
        location: [51.51, -0.13] as [number, number],
        // sticker: '☕',
    },
    {
        id: 'sticker-hawaii',
        location: [21.31, -157.86] as [number, number],
        // sticker: '🏄',
    },
    {
        id: 'sticker-amsterdam',
        location: [52.37, 4.9] as [number, number],
        // sticker: '🚲',
    },
    {
        id: 'sticker-beijing',
        location: [39.9, 116.4] as [number, number],
        // sticker: '🐉',
    },
    {
        id: 'sticker-moscow',
        location: [55.75, 37.62] as [number, number],
        // sticker: '🪆',
    },
    {
        id: 'sticker-seoul',
        location: [37.57, 126.98] as [number, number],
        // sticker: '🎮',
    },
]


// Showcase configs
export const showcaseConfigs: Record<string, ShowcaseConfig> = {

    stickers: {
        theta: 0.2,
        dark: 1,
        mapBrightness: 8,
        markerColor: [0.8, 0.3, 0.15],
        baseColor: [0.9, 0.9, 0.9],
        arcColor: [0.9, 0.4, 0.7],
        markerSize: 0.03,
        markerElevation: 0,
    },
}

export const showcases = [
    { name: 'Stickers', key: 'stickers' },
] as const

export type ShowcaseKey = (typeof showcases)[number]['key']

// Helper to get markers for a showcase
export function getShowcaseMarkers(key: ShowcaseKey, size: number) {
    const markerArrays: Record<
        ShowcaseKey,
        { id: string; location: [number, number] }[]
    > = {
        stickers: stickerMarkers,

    }
    const arr = markerArrays[key]
    if (!arr) return []
    return arr.map((m) => ({ location: m.location, size, id: m.id }))
}
