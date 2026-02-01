'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import SplitText from './SplitText'

const faqs = [
    { q: 'Bagaimana cara bergabung dengan BEM FIKOM?', a: 'Pendaftaran dibuka melalui Open Recruitment (OR) tahunan yang biasanya diadakan di awal semester ganjil. Pantau akun Instagram resmi @bemfikom.umi untuk informasi jadwal, persyaratan, dan link pendaftaran.' },
    { q: 'Dimana lokasi sekretariat BEM FIKOM?', a: 'Sekretariat kami berlokasi di Gedung Fakultas Ilmu Komputer Lantai 2, Kampus 2 Universitas Methodist Indonesia. Anda bisa datang setiap hari kerja untuk berdiskusi atau sekadar berkunjung.' },
    { q: 'Apakah aspirasi saya bersifat anonim?', a: 'Ya, keamanan privasi adalah prioritas kami. Anda dapat memilih untuk tidak menyebutkan identitas (Anonim) saat mengisi form aspirasi digital maupun saat menyampaikan melalui forum diskusi.' },
    { q: 'Apa saja agenda utama di periode ini?', a: 'Agenda utama kami mencakup PKKMB Fakultas, Liga Fikom (Olahraga & E-Sport), Workshop Teknologi (IPTEK), serta berbagai kegiatan pengabdian masyarakat dan religius.' },
    { q: 'Bagaimana cara berkolaborasi dengan BEM?', a: 'Kami sangat terbuka untuk kolaborasi dengan UKM lain atau pihak luar. Anda bisa menghubungi Departemen PSDK melalui WhatsApp Admin atau langsung berkunjung ke sekretariat.' }
]

export default function FAQ() {
    const [activeFaq, setActiveFaq] = useState<number | null>(0)

    return (
        <section id="faq" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6"
                    >
                        <HelpCircle size={14} />
                        Help Center
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
                        <SplitText text="PERTANYAAN" /> <br />
                        <span className="text-blue-500"><SplitText text="UMUM" delay={0.3} /></span>
                    </h2>
                    <p className="text-slate-400 text-lg font-medium border-l-2 border-blue-500/20 pl-6 inline-block py-2">
                        Pusat informasi cepat mengenai organisasi dan sistem BEM FIKOM UMI.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = activeFaq === i

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`glass rounded-[2rem] overflow-hidden border transition-all duration-500 ${isOpen ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/5 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => setActiveFaq(isOpen ? null : i)}
                                    className="w-full px-8 py-8 flex justify-between items-center text-left transition-colors relative z-10"
                                >
                                    <span className={`font-black uppercase tracking-tight text-lg transition-colors ${isOpen ? 'text-blue-500' : 'text-white'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-white/5 text-slate-500'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-10">
                                                <div className="h-px w-full bg-gradient-to-r from-blue-500/20 to-transparent mb-8"></div>
                                                <p className="text-white/70 text-lg leading-relaxed font-medium max-w-3xl">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
