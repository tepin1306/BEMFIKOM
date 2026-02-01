'use client'

import { motion, Variants } from 'framer-motion'
import SplitText from './SplitText'
import { cn } from '@/lib/utils'

export default function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
        }
    }

    const stats = [
        { value: '15+', label: 'Agenda', color: 'text-white' },
        { value: '37+', label: 'Pengurus', color: 'text-blue-500' },
        { value: '1k+', label: 'Mahasiswa', color: 'text-white' },
        { value: '100%', label: 'Visi', color: 'text-blue-500' }
    ]

    const values = [
        {
            title: 'Inovasi',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />,
            color: 'bg-blue-500/10 text-blue-500',
            delay: '0s',
            padding: 'p-10',
            rounded: 'rounded-[3rem]'
        },
        {
            title: 'Integritas',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            color: 'bg-indigo-500/10 text-indigo-400',
            delay: '1s',
            padding: 'p-12',
            rounded: 'rounded-[3.5rem]'
        },
        {
            title: 'Kolaborasi',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
            color: 'bg-cyan-500/10 text-cyan-400',
            delay: '2s',
            padding: 'p-14',
            rounded: 'rounded-[4rem]'
        },
        {
            title: 'Progresif',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
            color: 'bg-teal-500/10 text-teal-400',
            delay: '3.5s',
            padding: 'p-10',
            rounded: 'rounded-[3rem]'
        }
    ]

    return (
        <section id="about" className="py-40 px-6 relative overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-500/20 glass">
                            Profil BEM FIKOM
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-10 leading-tight tracking-tighter text-white uppercase italic">
                            <SplitText text="TRANSFORMASI" className="block" />
                            <span className="text-blue-500">
                                <SplitText text="DIGITAL." delay={0.4} />
                            </span>
                        </motion.h2>

                        <motion.div variants={itemVariants} className="space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                            <p className="border-l-2 border-blue-500/30 pl-8">
                                Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer Universitas Methodist Indonesia (UMI) adalah episentrum gerakan intelektual dan inovasi di tingkat fakultas.
                            </p>
                            <p className="border-l-2 border-slate-700/30 pl-8">
                                Melalui visi <span className="text-white font-black italic shadow-blue-500/20 transition-all hover:text-blue-400">"Digital Excellence & Human Connection"</span>, kami berkomitmen mencetak pemimpin yang adaptif dalam menghadapi disrupsi teknologi global.
                            </p>
                        </motion.div>

                        {/* Statistik Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                            {stats.map((stat, i) => (
                                <div key={i} className="group p-6 glass rounded-3xl text-center border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className={`text-4xl font-black mb-1 relative z-10 transition-transform group-hover:scale-110 ${stat.color}`}>{stat.value}</div>
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] relative z-10">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-5 relative lg:pt-20"
                    >
                        {/* Values Grid */}
                        <div className="space-y-5">
                            {values.slice(0, 2).map((val, i) => (
                                <div key={i} className={`glass ${val.padding} ${val.rounded} bento-card text-center group relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className={`w-16 h-16 mx-auto mb-6 ${val.color} rounded-2xl flex items-center justify-center icon-float shadow-xl border border-white/5 relative z-10`} style={{ animationDelay: val.delay }}>
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">{val.icon}</svg>
                                    </div>
                                    <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] relative z-10">{val.title}</h4>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-5 pt-12">
                            {values.slice(2, 4).map((val, i) => (
                                <div key={i} className={`glass ${val.padding} ${val.rounded} bento-card text-center group relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className={`w-16 h-16 mx-auto mb-6 ${val.color} rounded-2xl flex items-center justify-center icon-float shadow-xl border border-white/5 relative z-10`} style={{ animationDelay: val.delay }}>
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">{val.icon}</svg>
                                    </div>
                                    <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] relative z-10">{val.title}</h4>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
