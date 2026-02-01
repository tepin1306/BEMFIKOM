'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import SplitText from './SplitText'

const events = [
    {
        title: 'PKKMB UNIVERSITAS METHODIST INDONESIA',
        tag: 'AGENDA UTAMA',
        desc: 'Pelaksanaan kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru.',
        fullDesc: 'PKKMB adalah kegiatan wajib di perguruan tinggi untuk membantu mahasiswa baru beradaptasi, memahami lingkungan kampus, sistem perkuliahan, serta membekali mereka dengan pengetahuan dan karakter untuk sukses dalam pendidikan tinggi.',
        img: 'https://i.ibb.co.com/PGDBQj0C/pkkmb-univ-1.jpg',
        images: [
            'https://i.ibb.co.com/cX19DGbs/pkkmb-univ-2.jpg',
            'https://i.ibb.co.com/pjDmmw5z/pkkmb-univ-3.jpg',
        ],
        date: 'September 2025',
        loc: 'Kampus 2, Universitas Methodist Indonesia'
    },
    {
        title: 'BEM FIKOM UMI 2025/2027',
        tag: 'Foto bersama',
        desc: 'Dokumentasi kepengurusan BEM FIKOM UMI Kabinet Sinergi.',
        fullDesc: 'Foto bersama BEM fikom dalam kegiatan penyambutan mahasiswa baru sebagai simbol dimulainya masa pengabdian baru.',
        img: 'https://i.ibb.co.com/SXsGGH8f/foto-bersama-bem.jpg',
        images: [
            'https://i.ibb.co.com/S7KgJ798/penutupan-acara-pkkmb.jpg',
            'https://i.ibb.co.com/7x44pSh8/DSC06392.jpg',
            'https://i.ibb.co.com/970y1Fc/DSC06391.jpg',
            'https://i.ibb.co.com/dwLRgcpR/DSC06390.jpg'
        ],
        date: 'September 2025',
        loc: 'Aula Kampus 1, Lt. 3'
    },
    {
        title: 'Penyambutan Mahasiswa Baru tahun 2025',
        tag: 'MABA',
        desc: 'Acara penyambutan bagi seluruh mahasiswa baru fakultas ilmu komputer tahun 2025.',
        fullDesc: 'Program rutin tahunan di mana mahasiswa baru FIKOM UMI saling mengenal satu dengan yang lain dan diberikan pengarahan mengenai fakultas.',
        img: 'https://i.ibb.co.com/cSNxY7Sd/DSC05902.jpg',
        images: [
            'https://i.ibb.co.com/Z1HjKJND/DSC06066.jpg',
            'https://i.ibb.co.com/d4WfPw5s/DSC05919.jpg',
            'https://i.ibb.co.com/KpdPVGNX/DSC05946.jpg',
            'https://i.ibb.co.com/DHb335K8/DSC06000.jpg'
        ],
        date: 'September 2025',
        loc: 'Aula lt 3, Kampus 1'
    },
    {
        title: 'BEM FIKOM PEDULI: Kunjungan Panti Asuhan',
        tag: 'SOSIAL & KEMANUSIAAN',
        desc: 'Aksi nyata kepedulian mahasiswa FIKOM UMI melalui berbagi kebahagiaan dan bantuan di panti asuhan.',
        fullDesc: 'Program "BEM FIKOM Peduli" merupakan agenda rutin yang fokus pada pengabdian masyarakat. Dalam kegiatan ini, pengurus BEM menyalurkan bantuan berupa donasi, sembako, dan perlengkapan sekolah, serta mengadakan sesi motivasi dan permainan edukatif bagi anak-anak panti asuhan untuk mendorong semangat belajar mereka.',
        img: 'https://i.ibb.co.com/1NfcSGX/1.jpg',
        images: [
            'https://i.ibb.co.com/fdjYkhvj/2.jpg',
            'https://i.ibb.co.com/XZWXdRb1/3.jpg',
            'https://i.ibb.co.com/qF46L4jp/4.jpg'
        ],
        date: 'Januari 2026',
        loc: 'Panti Asuhan Medan'
    },
    {
        title: 'Liga Fikom 2026',
        tag: 'Coming Soon',
        desc: 'Turnamen Futsal, Bulu Tangkis, dan Mobile Legends.',
        fullDesc: 'Kompetisi persahabatan antar angkatan untuk memupuk jiwa sportivitas dan kerjasama tim melalui cabang olahraga konvensional dan e-sport tingkat fakultas.',
        img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=600&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop'
        ],
        date: 'Maret 2026',
        loc: 'Gelanggang Olahraga'
    }
]

export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

    return (
        <section id="kegiatan" className="py-28 px-6 bg-brand-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-black mb-4 text-white uppercase italic tracking-tighter leading-none">
                        <SplitText text="AGENDA" /> <span className="text-blue-500"><SplitText text="KERJA" delay={0.3} /></span>
                    </h2>
                    <p className="text-slate-400 text-lg font-medium border-b border-blue-500/10 pb-4 inline-block">Klik pada agenda untuk melihat detail dan galeri dokumentasi.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            onClick={() => setSelectedEvent(event)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`${i === 0 ? 'md:col-span-2 md:row-span-2' : (i === 1 ? 'md:col-span-2' : '')} glass rounded-[3rem] bento-card group cursor-pointer overflow-hidden border border-white/5 relative`}
                        >
                            <img src={event.img} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110" alt={event.title} />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
                            <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                                <span className="bg-blue-600 text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-widest" >{event.tag}</span>
                                <h3 className={`${i === 0 ? 'text-4xl' : 'text-xl'} font-black mb-4 text-white uppercase tracking-tighter`}>{event.title}</h3>
                                <p className="text-slate-300 text-sm mb-6 max-w-md line-clamp-2 font-medium">{event.desc}</p>
                                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                    LIHAT DETAIL <span>→</span>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950"
                        onClick={() => setSelectedEvent(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-slate-900 border border-white/10 w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto no-scrollbar"
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedEvent(null)} className="absolute top-6 right-6 z-50 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all">
                                <X size={24} />
                            </button>
                            <div className="flex flex-col">
                                <div className="h-80 md:h-96 w-full relative">
                                    <img src={selectedEvent.img} className="w-full h-full object-cover" alt={selectedEvent.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-10 lg:p-14">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
                                        <div className="max-w-2xl text-left">
                                            <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2 block">{selectedEvent.tag}</span>
                                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">{selectedEvent.title}</h2>
                                            <p className="text-slate-400 text-lg leading-relaxed font-medium">{selectedEvent.fullDesc}</p>
                                        </div>
                                        <div className="w-full md:w-64 space-y-4 shrink-0">
                                            <div className="p-6 glass rounded-3xl border border-white/5 bg-white/5">
                                                <div className="text-[10px] uppercase font-black text-slate-500 mb-1">Waktu Pelaksanaan</div>
                                                <div className="text-white font-bold text-sm">{selectedEvent.date}</div>
                                            </div>
                                            <div className="p-6 glass rounded-3xl border border-white/5 bg-white/5">
                                                <div className="text-[10px] uppercase font-black text-slate-500 mb-1">Lokasi Agenda</div>
                                                <div className="text-white font-bold text-sm">{selectedEvent.loc}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dokumentasi */}
                                    <div className="border-t border-white/10 pt-12">
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                                            <h4 className="font-black text-white uppercase tracking-widest text-lg">Dokumentasi Kegiatan</h4>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {selectedEvent.images.map((img, i) => (
                                                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden border border-white/5 group relative cursor-pointer shadow-lg">
                                                    <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt="Doc" />
                                                </div>
                                            ))}
                                        </div>
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
