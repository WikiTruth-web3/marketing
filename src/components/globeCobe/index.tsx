'use client'
import React from 'react'
import createGlobe from 'cobe'
import { useEffect, useRef, useState } from 'react'
import './globe.css'
import {
    showcaseConfigs,
    getShowcaseMarkers,
    ShowcaseKey,
} from './showcases-data'

export default function ShowcaseGlobe({
    showcaseKey,
}: {
    showcaseKey: ShowcaseKey
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const config = showcaseConfigs[showcaseKey]

    useEffect(() => {
        if (!canvasRef.current) return
        let phi = 0
        const width = canvasRef.current.offsetWidth
        const dpr = Math.min(
            window.devicePixelRatio || 1,
            window.innerWidth < 640 ? 1.8 : 2,
        )

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: dpr,
            width: width,
            height: width,
            phi: 0,
            theta: config.theta,
            dark: config.dark,
            diffuse: 1.5,
            mapSamples: 16000,
            mapBrightness: config.mapBrightness,
            baseColor: config.baseColor,
            markerColor: config.markerColor,
            glowColor: [0.94, 0.93, 0.91],
            markerElevation: config.markerElevation,
            markers: getShowcaseMarkers(showcaseKey, config.markerSize),
            // arcs: getShowcaseArcs(showcaseKey),
            arcColor: config.arcColor,
            arcWidth: 0.5,
            arcHeight: 0.25,
            opacity: 0.7,
        })

        let animationId: number
        function animate() {
            phi += 0.003
            globe.update({
                phi,
                markers: getShowcaseMarkers(showcaseKey, config.markerSize),
            })
            animationId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            cancelAnimationFrame(animationId)
            globe.destroy()
        }
    }, [showcaseKey, config])

    return (
        <div className='showcase-phase-item'>
            <div className='showcase-phase-globe'>
                <svg width='0' height='0' style={{ position: 'absolute' }}>
                    <defs>
                        <filter id='sticker-outline'>
                            <feMorphology
                                in='SourceAlpha'
                                result='Dilated'
                                operator='dilate'
                                radius='2'
                            />
                            <feFlood floodColor='#ffffff' result='OutlineColor' />
                            <feComposite
                                in='OutlineColor'
                                in2='Dilated'
                                operator='in'
                                result='Outline'
                            />
                            <feMerge>
                                <feMergeNode in='Outline' />
                                <feMergeNode in='SourceGraphic' />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
                <canvas ref={canvasRef} className='showcase-phase-canvas' />

                {/* Stickers */}
                {/* {showcaseKey === 'stickers' &&
                    stickerMarkers.map((m) => (
                        <div
                            key={m.id}
                            className='showcase-sticker'
                            style={
                                {
                                    positionAnchor: `--cobe-${m.id}`,
                                    opacity: `var(--cobe-visible-${m.id}, 0)`,
                                } as React.CSSProperties
                            }
                        >
                            {m.sticker}
                        </div>
                    ))} */}

            </div>
        </div>
    )
}
