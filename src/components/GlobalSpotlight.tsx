'use client'

import React, { useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function GlobalSpotlight() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const spotlightX = useSpring(mouseX, { stiffness: 150, damping: 20 })
    const spotlightY = useSpring(mouseY, { stiffness: 150, damping: 20 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-[60]"
            style={{
                background: `radial-gradient(600px circle at var(--x) var(--y), rgba(59, 130, 246, 0.08), transparent 80%)`,
            } as any}
        >
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(100px circle at ${spotlightX}px ${spotlightY}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
                    transform: 'translate3d(0,0,0)',
                } as any}
            />
        </motion.div>
    )
}
