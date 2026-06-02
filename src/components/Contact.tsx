import React from 'react';
import { CONTACT_INFO } from '../data';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Decorative huge background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none">
            <span className="text-[30vw] font-black leading-none whitespace-nowrap">CONTACT</span>
        </div>

        <div className="text-[10px] tracking-widest font-mono text-white/50 mb-12 uppercase z-10">/ 04 LET'S COLLABORATE</div>
        
        <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="text-[10vw] sm:text-[8vw] leading-none font-black uppercase tracking-tighter hover:italic hover:text-white/80 transition-all z-10 flex items-center gap-4 group"
        >
            SAY HELLO 
            <span className="inline-block group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform text-[6vw]">↗</span>
        </a>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-32 w-full max-w-5xl pt-16 border-t border-white/20 text-left z-10">
            <div>
                <h4 className="text-[10px] font-mono tracking-widest text-white/50 mb-6 uppercase">Contact</h4>
                <div className="text-lg font-light mb-2">{CONTACT_INFO.phone}</div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-light hover:underline underline-offset-4">{CONTACT_INFO.email}</a>
            </div>
             <div>
                <h4 className="text-[10px] font-mono tracking-widest text-white/50 mb-6 uppercase">Location</h4>
                <div className="text-lg font-light mb-2">{CONTACT_INFO.location}</div>
                <div className="text-sm font-mono text-white/50">Jiaozuo, Henan, China</div>
            </div>
             <div>
                <h4 className="text-[10px] font-mono tracking-widest text-white/50 mb-6 uppercase">Socials / Links</h4>
                <div className="flex flex-col gap-4">
                    <a href="/闫哲恺作品集.pdf" target="_blank" rel="noreferrer" className="font-light hover:underline underline-offset-4 flex justify-between group">
                        作品集PDF <span className="text-white/30 group-hover:text-white">↗</span>
                    </a>
                    <a href="#" className="font-light hover:underline underline-offset-4 flex justify-between group">
                        Xiaohongshu <span className="text-white/30 group-hover:text-white">↗</span>
                    </a>
                    <a href="#" className="font-light hover:underline underline-offset-4 flex justify-between group">
                        Zcool <span className="text-white/30 group-hover:text-white">↗</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
};
