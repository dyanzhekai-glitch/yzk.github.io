import React from 'react';
import { ABOUT_DATA, STATS } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 border-b border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-[1600px] mx-auto">
            <div className="md:col-span-4">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">About</h2>
                <div className="mt-4 text-[10px] uppercase tracking-widest font-mono text-white/50">/ 01 INTRODUCTION</div>
            </div>
            
            <div className="md:col-span-8 flex flex-col gap-16">
                <p className="text-xl md:text-3xl font-light leading-relaxed text-white/90">
                   {ABOUT_DATA.intro}
                </p>
                
                <blockquote className="border-l-4 border-white/50 pl-6 text-lg md:text-xl font-mono text-white/70 italic">
                    {ABOUT_DATA.concept}
                </blockquote>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20 border border-white/20">
                    {STATS.map((stat, i) => (
                        <div key={i} className="bg-[#0c0c0c] p-6 flex flex-col justify-between aspect-square group hover:bg-[#111] transition-colors">
                            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">{stat.label}</span>
                            <div>
                                <span className="block text-4xl sm:text-5xl font-black mb-2 group-hover:italic transition-all">{stat.value}</span>
                                <span className="text-xs font-light text-white/70">{stat.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Information / Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-12">
                    <div>
                       <h3 className="text-sm font-mono tracking-widest text-white/50 mb-8 uppercase">/ Technical Skills</h3>
                       <ul className="flex flex-col gap-6 text-lg">
                           <li className="border-b border-white/10 pb-4 flex justify-between">
                               <span>Plane Graphics</span>
                               <span className="font-mono text-white/50 text-sm">{ABOUT_DATA.skills.plane}</span>
                           </li>
                           <li className="border-b border-white/10 pb-4 flex justify-between">
                               <span>Space & 3D</span>
                               <span className="font-mono text-white/50 text-sm">{ABOUT_DATA.skills.space}</span>
                           </li>
                           <li className="border-b border-white/10 pb-4 flex justify-between">
                               <span>Tools</span>
                               <span className="font-mono text-white/50 text-sm">{ABOUT_DATA.skills.other}</span>
                           </li>
                       </ul>
                    </div>
                    <div>
                       <h3 className="text-sm font-mono tracking-widest text-white/50 mb-8 uppercase">/ Core Advantages</h3>
                       <ul className="flex flex-col gap-5 text-sm font-light text-white/80 list-disc pl-4">
                           {ABOUT_DATA.advantages.map((adv, i) => (
                               <li key={i} className="leading-relaxed">{adv}</li>
                           ))}
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
