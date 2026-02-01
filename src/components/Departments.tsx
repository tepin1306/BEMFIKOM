'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users2, Moon, Cpu, X } from 'lucide-react'
import SplitText from './SplitText'
import { cn } from '@/lib/utils'

const departments = [
    {
        id: 'psdk',
        name: 'PSDK',
        fullName: 'Pengembangan Sumber Daya Komunikasi',
        icon: (props: any) => (
            <svg xmlns='http://www.w3.org/2000/svg' className={props.className} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
            </svg>
        ),
        leader: { name: 'Jonathan Manurung', img: 'https://i.ibb.co.com/SXB2rX8W/jonatan.jpg' },
        vices: [
            { name: 'Emia br Ginting', img: 'https://i.ibb.co.com/RpqXXr8W/emia.jpg' },
            { name: 'Christina Nainggolan', img: 'https://i.ibb.co.com/tMZsmF5f/cristina.jpg' }
        ],
        members: ['Grahel Simanjuntak ', 'Christian Sembiring', 'Arum Sriningsih Siburian', 'Jesika Sondewi Gultom', 'Nofri Anastasya S Sianturi', 'Ory Dokhsia Cristanauly', 'Diva Fidela Sirait', 'Lestari Natalia Sianipar', 'Anggelia Simanjuntak', 'Yupri Baik Simanjuntak', 'Johannes Silitonga', 'Dimas Lumban gaol', 'Sunardio Bangun', 'Bona Aritonang'],
        desc: 'Berfokus pada kesejahteraan mahasiswa dan koordinasi internal.'
    },
    {
        id: 'pok',
        name: 'POK',
        fullName: 'Pemberdayaan Organisasi Kerohanian',
        icon: (props: any) => (
            <svg xmlns='http://www.w3.org/2000/svg' className={props.className} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
            </svg>
        ),
        leader: { name: 'Agnes Yunita Purba', img: 'https://i.ibb.co.com/JRbt2cRF/agnes.jpg' },
        vices: [
            { name: 'Noah Sianturi', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop' }
        ],
        members: ['Dewi Anggraini Sidabalok', 'Avriliana Morisa Tambunan', 'Sittri Lubis', 'Yeny Romlis manullang', 'Nurintan Vermata Sari Sihombing', 'Iyen Laberta Simbolon', 'Louis Vallen Fernando Sitompul', 'Filipi Okto Siahaan'],
        desc: 'Mengelola kegiatan spiritual mahasiswa guna mencetak generasi IT religius.'
    },
    {
        id: 'iptek',
        name: 'IPTEK',
        fullName: 'Inovasi dan Teknologi TI',
        icon: (props: any) => (
            <svg xmlns='http://www.w3.org/2000/svg' className={props.className} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' />
            </svg>
        ),
        leader: { name: 'Stevin Alexander Manalu', img: 'https://i.ibb.co.com/hJbCKS98/stevin.jpg' },
        vices: [
            { name: 'Lestari Maria M. Siallagan', img: 'https://i.ibb.co.com/bgBdRykw/lestari.jpg' }
        ],
        members: ['Jenny Karunia Putri Za', 'Arjuna Yuan', 'Viona Anjani ', 'Melisa Aulina Sihite'],
        desc: 'Pusat riset, workshop teknologi, dan pengembangan platform digital.'
    }
]

export default function Departments() {
    const [selectedDept, setSelectedDept] = useState<typeof departments[0] | null>(null)

    return (
        <section id="departemen" className="py-32 px-6 bg-slate-950 border-y border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none text-white">
                        <SplitText text="DEPARTEMEN" /> <span className="text-blue-500 italic"><SplitText text="STRATEGIS" delay={0.3} /></span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium max-w-2xl border-l-2 border-blue-500/20 pl-6 py-2 ml-4 md:ml-0 italic">Pembagian fungsi kerja untuk eksekusi program yang presisi dan berdampak nyata bagi fakultas.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {departments.map((dept, i) => (
                        <motion.div
                            key={dept.id}
                            onClick={() => setSelectedDept(dept)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass rounded-[2.5rem] bento-card p-10 group cursor-pointer relative overflow-hidden"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <motion.div
                                    layoutId={`dept-icon-${dept.id}`}
                                    className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mb-8 text-blue-500 icon-float shadow-2xl border border-blue-500/20"
                                >
                                    <dept.icon className="w-10 h-10" />
                                </motion.div>
                                <motion.h3 layoutId={`dept-name-${dept.id}`} className="text-3xl font-black uppercase mb-3 text-white tracking-tight">{dept.name}</motion.h3>
                                <motion.p layoutId={`dept-full-${dept.id}`} className="text-[12px] font-black text-blue-400 uppercase tracking-[0.2em] mb-6">{dept.fullName}</motion.p>
                                <p className="text-sm text-slate-400 leading-relaxed mb-6">{dept.desc}</p>

                                {/* Member List on Card (Immediate Visibility) */}
                                <div className="mb-8">
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Anggota Tim:</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {dept.members.map((m) => (
                                            <div key={m} className="text-[10px] font-bold text-slate-300 flex items-center gap-2 group/name">
                                                <div className="w-1 h-1 rounded-full bg-blue-500 group-hover/name:scale-150 transition-transform"></div>
                                                {m}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center text-blue-500 text-[11px] font-black tracking-[0.3em] uppercase group-hover:gap-4 transition-all duration-300">
                                    DETAIL DEPARTEMEN <span className="font-sans text-lg">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence mode="wait">
                {selectedDept && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-950/90 backdrop-blur-sm"
                        onClick={() => setSelectedDept(null)}
                    >
                        <motion.div
                            layoutId={selectedDept.id}
                            className="bg-slate-900 border border-white/10 w-full max-w-6xl rounded-[3rem] shadow-[0_0_100px_rgba(59,130,246,0.15)] relative max-h-[90vh] overflow-hidden flex flex-col"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Scrollable Content Container */}
                            <div className="overflow-y-auto p-8 md:p-16 lg:p-20 no-scrollbar custom-scrollbar">
                                <button
                                    onClick={() => setSelectedDept(null)}
                                    className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all z-50 group"
                                >
                                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                <div className="text-center mb-20 relative">
                                    <motion.div
                                        layoutId={`dept-icon-${selectedDept.id}`}
                                        className="w-24 h-24 mx-auto mb-8 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-500 shadow-inner"
                                    >
                                        <selectedDept.icon className="w-12 h-12" />
                                    </motion.div>
                                    <motion.h2 layoutId={`dept-full-${selectedDept.id}`} className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none glow-text">{selectedDept.fullName}</motion.h2>
                                    <div className="h-1 w-24 bg-blue-600 mx-auto mt-8 rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="glass p-8 rounded-[2.5rem] border-blue-500/30 text-center relative group"
                                    >
                                        <div className="absolute inset-0 bg-blue-500/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <img src={selectedDept.leader.img} className="w-24 h-24 rounded-3xl object-cover border-4 border-blue-500/20 mb-6 mx-auto shadow-2xl relative z-10" alt="Leader" />
                                        <div className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-2 relative z-10">Ketua Divisi</div>
                                        <div className="text-xl font-black text-white relative z-10">{selectedDept.leader.name}</div>
                                    </motion.div>

                                    {selectedDept.vices.map((vice, vIdx) => (
                                        <motion.div
                                            key={vIdx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + (vIdx * 0.1) }}
                                            className="glass p-8 rounded-[2.5rem] text-center group"
                                        >
                                            <img src={vice.img} className="w-24 h-24 rounded-3xl object-cover border-4 border-white/5 mb-6 mx-auto shadow-2xl transition-transform group-hover:scale-105" alt="Vice" />
                                            <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                                Wakil Divisi {selectedDept.vices.length > 1 ? (vIdx + 1) : ''}
                                            </div>
                                            <div className="text-xl font-black text-white">{vice.name}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="border-t border-white/5 pt-16">
                                    <h4 className="text-center font-black text-xs text-slate-500 uppercase tracking-[0.5em] mb-12 italic">Core Members</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                                        {selectedDept.members.map((m, mIdx) => (
                                            <motion.div
                                                key={m}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + (mIdx * 0.05) }}
                                                className="glass p-5 rounded-2xl text-center text-sm font-bold text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-white/5 transition-all"
                                            >
                                                {m}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
