'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, MessageSquare, Users, Shield, ArrowRight } from 'lucide-react'
import SplitText from './SplitText'

export default function Aspirasi() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        subject: 'Fasilitas Kampus',
        message: ''
    })

    const waGroupLink = 'https://chat.whatsapp.com/FQ0KpWtFY5I88r6v8JzxTQ'
    const waAdminNumber = '6282361119915' // Example admin number

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Construct WA message
        const text = `*ASPIRASI BARU - BEM FIKOM UMI*%0A%0A*Nama:* ${formData.name}%0A*Subjek:* ${formData.subject}%0A*Pesan:* ${formData.message}`
        const waUrl = `https://wa.me/${waAdminNumber}?text=${text}`

        // Simulate API call then redirect
        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(true)
            window.open(waUrl, '_blank')
        }, 1200)
    }

    const resetForm = () => {
        setIsSubmitted(false)
        setFormData({ name: '', subject: 'Fasilitas Kampus', message: '' })
    }

    return (
        <section id="aspirasi" className="py-24 px-6 relative bg-slate-950 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-8"
                        >
                            <MessageSquare size={12} />
                            Suara Mahasiswa
                        </motion.div>

                        <h2 className="text-5xl md:text-8xl font-black mb-8 italic uppercase text-white tracking-tighter leading-tight">
                            <SplitText text="SUARAKAN" /> <br />
                            <span className="text-blue-500"><SplitText text="ASPIRASIMU." delay={0.3} /></span>
                        </h2>

                        <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium border-l-2 border-blue-500/30 pl-8 max-w-xl">
                            Berani bicara adalah langkah pertama perubahan. Sampaikan ide, keluhan, atau saranmu secara langsung atau bergabung dengan forum diskusi kami.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 glass rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Shield size={24} />
                                </div>
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2 font-black">Anonimitas Terjamin</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Bebas berekspresi tanpa rasa takut akan identitas yang terungkap.</p>
                            </div>
                            <div className="p-6 glass rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Users size={24} />
                                </div>
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2 font-black">Aksi Kolektif</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Setiap aspirasi akan dikaji dan diperjuangkan bersama.</p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 glass rounded-[2.5rem] border-blue-500/20 bg-blue-500/5 relative overflow-hidden group">
                            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">+50</div>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Sudah bergabung dalam forum?</p>
                                    <p className="text-slate-500 text-xs">Ayo diskusi langsung di WhatsApp Group.</p>
                                </div>
                                <a
                                    href={waGroupLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sm:ml-auto w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:gap-4"
                                >
                                    Join Group <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/50 backdrop-blur-xl p-10 md:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative"
                    >
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Form Aspirasi</h3>
                                        <p className="text-slate-500 text-sm">Jawaban akan diteruskan langsung ke WhatsApp Admin BEM FIKOM.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nama / Anonim</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Tulis 'Anonim' jika tidak ingin dikenal"
                                            className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-600"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Subjek</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
                                        >
                                            <option>Fasilitas Kampus</option>
                                            <option>Akademik</option>
                                            <option>Organisasi</option>
                                            <option>Lainnya</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Pesan Aspirasi</label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tuliskan aspirasimu di sini..."
                                            className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-600 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-black py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group uppercase tracking-widest text-xs mt-4 relative overflow-hidden"
                                    >
                                        {isLoading ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                Kirim Sekarang <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 italic">Aspirasi Terkirim!</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed mb-10 text-sm">
                                        Aspirasimu telah diteruskan ke WhatsApp Admin. Kami akan segera meninjau pesanmu.
                                    </p>
                                    <button
                                        onClick={resetForm}
                                        className="text-blue-500 font-black text-[10px] uppercase tracking-widest hover:text-blue-400 flex items-center justify-center gap-2 mx-auto"
                                    >
                                        Kirim Aspirasi Lain <ArrowRight size={14} />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
