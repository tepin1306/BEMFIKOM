'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent, MotionValue } from 'framer-motion'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    })

    // Map progress for canvas
    const canvasProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

    // Text animations
    // Mouse Spotlight
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const spotlightX = useSpring(mouseX, { stiffness: 150, damping: 20 })
    const spotlightY = useSpring(mouseY, { stiffness: 150, damping: 20 })

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        mouseX.set(clientX)
        mouseY.set(clientY)
    }

    // Magnetic Button logic
    const buttonRef = useRef<HTMLAnchorElement>(null)
    const buttonX = useMotionValue(0)
    const buttonY = useMotionValue(0)
    const springButtonX = useSpring(buttonX, { stiffness: 150, damping: 15 })
    const springButtonY = useSpring(buttonY, { stiffness: 150, damping: 15 })

    const handleButtonMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return
        const { clientX, clientY } = e
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
        const centerX = left + width / 2
        const centerY = top + height / 2
        const distanceX = clientX - centerX
        const distanceY = clientY - centerY
        buttonX.set(distanceX * 0.4)
        buttonY.set(distanceY * 0.4)
    }

    const handleButtonMouseLeave = () => {
        buttonX.set(0)
        buttonY.set(0)
    }

    const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5], [1, 1, 0, 0])
    const techMarqueeY = useTransform(scrollYProgress, [0.3, 0.5], [100, 0])
    const techMarqueeOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])

    return (
        <section
            ref={containerRef}
            className="relative h-[400vh]"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-30 opacity-40 md:opacity-60"
                style={{
                    background: useTransform(
                        [spotlightX, spotlightY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
                    )
                }}
            />
            <HeroCanvas scrollYProgress={scrollYProgress} />

            {/* Sequence of text overlays */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Intro */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="relative z-10 text-center px-6 max-w-7xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-xs font-semibold text-blue-400 mb-8 border border-blue-500/20 glass"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                        Kabinet Sinergi FIKOM 2026/2027
                    </motion.div>
                    <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[1] tracking-tighter text-white">
                        Badan <br /> <span className="text-gradient">Eksekutif</span> <br /> Mahasiswa.
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                        Pusat kolaborasi mahasiswa FIKOM UMI untuk melahirkan inovator masa depan di era transformasi digital yang inklusif.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-5">
                        <motion.a
                            ref={buttonRef}
                            style={{ x: springButtonX, y: springButtonY }}
                            onMouseMove={handleButtonMouseMove}
                            onMouseLeave={handleButtonMouseLeave}
                            href="#kegiatan"
                            className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-blue-500 transition-colors shadow-2xl shadow-blue-500/20 active:scale-95 flex items-center justify-center"
                        >
                            Lihat Program Kerja
                        </motion.a>
                        <a href="#about" className="glass px-10 py-5 rounded-3xl font-black text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center">
                            Kenali Kami
                        </a>
                    </div>
                </motion.div>

                {/* Tech Marquee Section */}
                <motion.div
                    style={{ y: techMarqueeY, opacity: techMarqueeOpacity }}
                    className="absolute bottom-0 w-full py-16 border-y border-white/5 bg-slate-950/20 overflow-hidden backdrop-blur-sm"
                >
                    <div className="animate-marquee items-center gap-16 md:gap-32 px-10">
                        <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-3xl whitespace-nowrap opacity-30 italic">Software Development</span>
                        <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-3xl whitespace-nowrap opacity-30 italic">UI/UX Design</span>
                        <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-3xl whitespace-nowrap opacity-30 italic">Web Development</span>
                        <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-3xl whitespace-nowrap opacity-30 italic">Data Analytics</span>
                        <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-3xl whitespace-nowrap opacity-30 italic">Cyber Security</span>
                        {/* Duplicate for seamless loop */}
                        <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-3xl whitespace-nowrap opacity-30 italic">Software Development</span>
                        <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-3xl whitespace-nowrap opacity-30 italic">UI/UX Design</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-slate-400">Scroll</span>
            </motion.div>
        </section>
    )
}
