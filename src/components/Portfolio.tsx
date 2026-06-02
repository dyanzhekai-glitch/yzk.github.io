import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { MarqueeText } from './ui/MarqueeText';
import { Project } from '../types';

const ProjectCard: React.FC<{ p: Project }> = ({ p }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const hasGallery = (p.gallery && p.gallery.length > 0) || (p.galleryGroups && p.galleryGroups.length > 0);

  return (
    <article className="flex flex-col border-b border-white/20 group">
        <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 lg:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between relative overflow-hidden">
                {/* Decorative background lines */}
                <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
                
                <div className="text-[10px] font-mono flex justify-between uppercase tracking-widest text-white/50 mb-12 relative z-10 w-full">
                    <span>{p.category}</span>
                    <span className="flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-white/20"></span>
                        {p.date}
                    </span>
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-baseline gap-4 mb-6">
                        <div className="text-6xl font-black text-white/20 group-hover:text-white transition-colors duration-500">{p.id}</div>
                        <div className="text-[10px] font-mono tracking-widest text-white/20 uppercase hidden xl:block">Project Index</div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-8 group-hover:italic transition-all duration-500">{p.title}</h3>
                    
                    <div className="space-y-6 text-sm font-light text-white/70 mb-12">
                        <p className="border-l-2 border-white/20 pl-4">{p.context}</p>
                        <ul className="list-disc pl-4 space-y-2">
                            {p.features.map((f, j) => <li key={j}>{f}</li>)}
                        </ul>
                        <p className="bg-white/5 p-4 italic text-white/90">🏅 {p.result}</p>
                    </div>
                    
                    <button 
                        onClick={() => { if(hasGallery) setExpanded(!expanded) }}
                        className={`border border-white/30 px-6 py-3 text-[10px] tracking-widest uppercase inline-flex items-center gap-4 transition-colors ${hasGallery ? 'group-hover:bg-white group-hover:text-black hover:!bg-white hover:!text-black cursor-pointer' : 'opacity-30 cursor-not-allowed hidden'}`}
                    >
                        {expanded ? 'Close Details' : 'View Project Details'} 
                        <motion.span 
                            animate={{ rotate: expanded ? 90 : 0 }} 
                            className="inline-block ml-1"
                        >
                            {expanded ? '✕' : '→'}
                        </motion.span>
                    </button>
                </div>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8 p-6 md:p-12 overflow-hidden bg-[#0a0a0a] flex items-center justify-center relative group/box">
                {/* Corner Crosshairs */}
                <div className="absolute top-6 left-6 text-white/20 font-mono text-xs opacity-50 transition-opacity duration-700 group-hover/box:opacity-100">+</div>
                <div className="absolute top-6 right-6 text-white/20 font-mono text-xs opacity-50 transition-opacity duration-700 group-hover/box:opacity-100">+</div>
                <div className="absolute bottom-6 left-6 text-white/20 font-mono text-xs opacity-50 transition-opacity duration-700 group-hover/box:opacity-100">+</div>
                <div className="absolute bottom-6 right-6 text-white/20 font-mono text-xs opacity-50 transition-opacity duration-700 group-hover/box:opacity-100">+</div>

                {/* Decorative Grid Dots */}
                <div className="absolute top-1/4 left-12 grid grid-cols-3 gap-2 opacity-[0.03] transition-opacity duration-700 group-hover/box:opacity-20">
                     {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
                </div>
                <div className="absolute bottom-1/4 right-12 grid grid-cols-3 gap-2 opacity-[0.03] transition-opacity duration-700 group-hover/box:opacity-20">
                     {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
                </div>

                {/* Vertical branding text */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 origin-right -rotate-90 text-[8px] tracking-[0.3em] font-mono uppercase text-white/10 hidden lg:block">
                    VISUAL EXPLORATION // {p.id}
                </div>

                <div className="w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-[#111] relative cursor-zoom-in" onClick={() => setSelectedImage(p.image)}>
                    <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover md:object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out relative z-10"
                    />
                </div>
            </div>
        </div>

        <AnimatePresence>
            {expanded && hasGallery && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-[#0c0c0c] border-t border-white/20 flex flex-col"
                >
                    <div className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div className="p-8 border border-white/20 flex flex-col justify-center bg-[#0a0a0a] sm:col-span-2 lg:col-span-2 xl:col-span-2">
                             <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">{p.title}</h4>
                             <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
                                {p.context}
                             </p>
                             <ul className="flex flex-col gap-2 text-xs font-light text-white/50 mb-8 border-l-2 border-white/10 pl-4">
                                {p.features.map((f, j) => (
                                    <li key={j} className="flex gap-2"><span>{f}</span></li>
                                ))}
                             </ul>
                             <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase mt-auto">
                                / Full Visual Presentation
                             </div>
                        </div>
                        {p.gallery && p.gallery.map((img, idx) => (
                            <div key={idx} className="bg-[#111] relative overflow-hidden group/img flex items-center justify-center cursor-zoom-in" onClick={() => setSelectedImage(img)}>
                                <img 
                                    src={img} 
                                    alt={`${p.title} detail ${idx + 1}`} 
                                    className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700" 
                                    loading="lazy" 
                                />
                            </div>
                        ))}
                    </div>
                    {p.galleryGroups && p.galleryGroups.map((group, grpIdx) => (
                        <div key={grpIdx} className="border-t border-white/10">
                            <div className="px-6 md:px-12 py-8 bg-[#0a0a0a] border-b border-white/10">
                                <h5 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white/90 font-mono flex items-center gap-4">
                                    <span className="text-white/20">{(grpIdx + 1).toString().padStart(2, '0')}</span>
                                    {group.title}
                                </h5>
                            </div>
                            <div className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {group.images.map((img, idx) => (
                                    <div key={idx} className="bg-[#111] relative overflow-hidden group/img flex items-center justify-center cursor-zoom-in" onClick={() => setSelectedImage(img)}>
                                        <img 
                                            src={img} 
                                            alt={`${group.title} detail ${idx + 1}`} 
                                            className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700" 
                                            loading="lazy" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>

        <AnimatePresence>
            {selectedImage && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img 
                        initial={{ scale: 0.9, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        exit={{ scale: 0.9, opacity: 0 }} 
                        transition={{ duration: 0.3 }}
                        src={selectedImage} 
                        alt="Zoomed project view" 
                        className="max-w-full max-h-full object-contain shadow-2xl" 
                    />
                    <button 
                        className="absolute top-6 right-6 text-white/50 hover:text-white text-4xl leading-none transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        &times;
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 font-mono text-xs tracking-widest uppercase pointer-events-none">
                        Click anywhere to close
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </article>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="border-b border-white/20">
        <MarqueeText text="SELECTED WORKS • SELECTED WORKS • " speed={25} />
        <div className="flex flex-col">
           {PROJECTS.map((p) => (
               <ProjectCard key={p.id} p={p} />
           ))}
        </div>
    </section>
  );
};
