'use client'

import React, { useEffect, useRef, useState } from 'react'

import { motion, MotionValue, useMotionValueEvent, useTransform } from 'framer-motion'

interface HeroCanvasProps {
    scrollYProgress: MotionValue<number>
}

const TOTAL_FRAMES = 240

export default function HeroCanvas({ scrollYProgress }: HeroCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [images, setImages] = useState<HTMLImageElement[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [progress, setProgress] = useState(0)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest)
    })

    // Pre-load images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = []
        let loadedCount = 0

        const loadImages = () => {
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image()
                const frameIndex = i.toString().padStart(3, '0')
                img.src = `/sequence/ezgif-frame-${frameIndex}.jpg`
                img.onload = () => {
                    loadedCount++
                    if (loadedCount === TOTAL_FRAMES) {
                        setIsLoaded(true)
                    }
                }
                loadedImages.push(img)
            }
            setImages(loadedImages)
        }

        loadImages()
    }, [])

    // Draw frame on progress change
    useEffect(() => {
        if (!isLoaded || images.length === 0 || !canvasRef.current) return

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        if (!context) return

        // Calculate frame index
        const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(progress * TOTAL_FRAMES)
        )

        const img = images[frameIndex]
        if (!img) return

        // Clear and draw
        const render = () => {
            const { width, height } = canvas

            // Calculate aspect ratio for "cover" effect
            const canvasRatio = width / height
            const imgRatio = img.width / img.height

            let drawWidth = width
            let drawHeight = height
            let offsetX = 0
            let offsetY = 0

            if (canvasRatio > imgRatio) {
                drawHeight = width / imgRatio
                offsetY = (height - drawHeight) / 2
            } else {
                drawWidth = height * imgRatio
                offsetX = (width - drawWidth) / 2
            }

            context.clearRect(0, 0, width, height)
            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
        }

        render()
    }, [progress, isLoaded, images])

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current) return
            canvasRef.current.width = window.innerWidth
            canvasRef.current.height = window.innerHeight
            // Re-draw if possible
        }

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const canvasOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0])

    return (
        <motion.div
            className="fixed inset-0 z-0"
            style={{ opacity: canvasOpacity }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover pointer-events-none"
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-black text-white">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm font-medium tracking-widest uppercase">Initializing Canvas...</p>
                    </div>
                </div>
            )}
        </motion.div>
    )
}
