'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SplitTextProps {
    text: string
    className?: string
    delay?: number
}

export default function SplitText({ text, className, delay = 0 }: SplitTextProps) {
    const letters = text.split('')

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    }

    const childVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn("inline-block perspective-1000", className)}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    className="inline-block origin-bottom"
                    style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    )
}
