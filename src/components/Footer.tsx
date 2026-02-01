'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative pt-32 pb-16 px-6 bg-brand-dark overflow-hidden border-t border-white/5">
            {/* Massive Background Text */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
                BEM FIKOM UMI
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center">
                                <span className="font-bold text-blue-600 text-xl">B</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white tracking-tight uppercase">BEM FIKOM <span className="text-blue-500">UMI</span></h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-bold">Kabinet Sinergi 2025/2027</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md italic">
                            "Pro Deo Et Patria" — Melayani dengan integritas, berinovasi dengan solusi, dan berkolaborasi untuk masa depan FIKOM yang lebih inklusif.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: 'Instagram', icon: 'IG', url: 'https://www.instagram.com/bemfikomumi_/' },
                                { name: 'Youtube', icon: 'YT', url: '#' },
                                { name: 'Mail', icon: 'EM', url: '#' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest opacity-50">Navigasi</h4>
                            <ul className="space-y-4">
                                {['Beranda', 'Tentang Kami', 'Program Kerja', 'Aspirasi'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-blue-500 transition-colors font-medium">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest opacity-50">Akademik</h4>
                            <ul className="space-y-4">
                                {['Siakad UMI', 'Perpustakaan', 'E-Learning', 'Informasi'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors font-medium">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest opacity-50">Hubungi</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-black mb-2">Lokasi Utama</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Fakultas Ilmu Komputer, Kampus II UMI <br />
                                        Jl. Urip Sumoharjo KM.05, Makassar
                                    </p>
                                </div>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="text-xs font-black text-blue-500 uppercase tracking-widest flex items-center gap-2 group"
                                >
                                    Kembali Ke Atas
                                    <span className="group-hover:-translate-y-1 transition-transform">↑</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                        © 2026 BIRO MEDIA & INFORMASI BEM FIKOM UMI. DIBANGUN DENGAN <span className="text-blue-500">KODE.</span>
                    </p>
                    <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-600">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            System Digital 2.0
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
