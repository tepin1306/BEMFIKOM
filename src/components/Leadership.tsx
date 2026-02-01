'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SplitText from './SplitText'

const leaders = [
    {
        name: 'Christ Nanda Simangunsong',
        role: 'Ketua BEM FIKOM',
        img: 'https://i.ibb.co.com/qLYSb6QW/christ.jpg',
        className: 'border-blue-500/50',
        roleClass: 'text-blue-400'
    },
    {
        name: 'Alfin Kornelius daya',
        role: 'Wakil Ketua BEM',
        img: 'https://i.ibb.co.com/KMTWHT4/alfin.jpg',
        className: 'border-slate-500/30',
        roleClass: 'text-slate-400'
    }
]

const staff = [
    {
        name: 'Elvi Simanjuntak',
        role: 'Sekretaris BEM',
        img: 'https://i.ibb.co.com/gMYWR3Vw/Screenshot-2026-01-30-220305.png'
    },
    {
        name: 'Rike Lumbanraja',
        role: 'Bendahara BEM',
        img: 'https://i.ibb.co.com/cKj6j9XQ/rike.jpg'
    }
]

const deptHeads = [
    { name: 'Jonatan Manurung', role: 'Ketua PSDK', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
    { name: 'Agnes Yunita Purba', role: 'Ketua POK', img: 'https://i.ibb.co.com/JRbt2cRF/agnes.jpg' },
    { name: 'Stevin Alexander Manalu', role: 'Ketua IPTEK', img: 'https://i.ibb.co.com/hJbCKS98/stevin.jpg' }
]

export default function Leadership() {
    return (
        <section id="struktur" className="py-24 px-6 relative bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter text-white leading-none">
                        <SplitText text="STRUKTUR" /> <span className="text-blue-500 italic"><SplitText text="KEPEMIMPINAN" delay={0.2} /></span>
                    </h2>
                    <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px] mt-4">Pilar kekuatan Kabinet Sinergi 2025/2027.</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
                        {leaders.map((leader, i) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className={`glass p-8 rounded-[3rem] bento-card ${leader.className} text-center group`}
                            >
                                <div className="w-40 h-40 rounded-[2.5rem] mx-auto mb-6 overflow-hidden border-4 border-blue-500/20 shadow-2xl relative">
                                    <img src={leader.img} className="w-full h-full object-cover" alt={leader.name} />
                                </div>
                                <h4 className="text-2xl font-black text-white">{leader.name}</h4>
                                <p className={`${leader.roleClass} font-bold uppercase tracking-widest text-xs mt-2`}>{leader.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mb-12">
                        {staff.map((s, i) => (
                            <motion.div
                                key={s.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.2 }}
                                viewport={{ once: true }}
                                className="glass p-6 rounded-[2.5rem] bento-card flex items-center gap-6"
                            >
                                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                                    <img src={s.img} className="w-full h-full object-cover" alt={s.name} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white uppercase">{s.name}</h4>
                                    <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mt-1">{s.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="w-full max-w-5xl">
                        <h4 className="text-center font-black text-[10px] text-slate-600 uppercase tracking-[0.6em] mb-12 opacity-50">Ketua Departemen</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {deptHeads.map((head, i) => (
                                <motion.div
                                    key={head.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass p-6 rounded-[2rem] text-center border-white/5"
                                >
                                    <img src={head.img} className="w-16 h-16 rounded-2xl mx-auto mb-4 object-cover border-2 border-slate-800" alt={head.name} />
                                    <h5 className="text-sm font-bold text-white uppercase">{head.name}</h5>
                                    <p className="text-[9px] text-blue-500 font-black uppercase tracking-widest mt-1">{head.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
