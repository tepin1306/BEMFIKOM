'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Profil', href: '#about' },
    { name: 'Departemen', href: '#departemen' },
    { name: 'Struktur', href: '#struktur' },
    { name: 'Kegiatan', href: '#kegiatan' },
    { name: 'Aspirasi', href: '#aspirasi' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                isScrolled ? 'py-3' : 'bg-transparent'
            )}
        >
            <div className={cn(
                "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300",
                isScrolled ? "glass shadow-2xl" : ""
            )}>
                <div className="flex items-center gap-3">
                    <Link href="/" className="font-extrabold tracking-tight text-lg hidden md:block uppercase">
                        BEM FIKOM <span className="text-blue-500">UMI</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#aspirasi" className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all">
                        Hubungi Kami
                    </Link>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-2 glass rounded-2xl p-6 flex flex-col space-y-4 md:hidden border border-white/10"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium hover:text-blue-500 transition-colors py-2 border-b border-white/5"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#aspirasi"
                            className="w-full py-4 bg-blue-600 rounded-xl text-center text-lg font-semibold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Hubungi Kami
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
