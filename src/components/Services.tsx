import React from 'react';
import { SERVICES, WORKFLOW } from '../data';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 border-b border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-[1600px] mx-auto">
            <div className="md:col-span-4">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Services</h2>
                <div className="mt-4 text-[10px] uppercase tracking-widest font-mono text-white/50">/ 03 WHAT I DO</div>
            </div>
            
            <div className="md:col-span-8">
                <div className="flex flex-col">
                    {SERVICES.map((s, i) => (
                        <div key={i} className="border-t border-white/20 py-8 md:py-12 flex flex-col lg:flex-row justify-between gap-6 md:gap-12 group hover:bg-white/5 transition-colors -mx-6 px-6 cursor-default">
                            <h3 className="text-2xl md:text-4xl font-bold uppercase lg:w-1/3 group-hover:translate-x-2 transition-transform duration-300">
                                {s.title}
                            </h3>
                            <ul className="lg:w-2/3 flex flex-col gap-3 text-sm md:text-base text-white/70 font-light">
                                {s.items.map((item, j) => (
                                    <li key={j} className="flex gap-4">
                                        <span className="text-white/30">—</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                {/* Workflow */}
                <div className="mt-32 border-t border-white/20 pt-16">
                    <h3 className="text-sm font-mono tracking-widest text-white/50 mb-12 uppercase">/ Standard Workflow</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20 border border-white/20">
                        {WORKFLOW.map((w, i) => (
                            <div key={i} className="bg-[#0c0c0c] p-8 hover:bg-[#151515] transition-colors relative overflow-hidden group">
                                <div className="text-5xl font-black mb-12 text-white/10 group-hover:text-white/30 group-hover:-translate-y-2 transition-all">0{i+1}</div>
                                <h4 className="text-xl font-bold mb-4">{w.title}</h4>
                                <p className="text-sm font-light text-white/60 leading-relaxed">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
