import { motion } from 'motion/react';
import React from 'react';
import { HERO_DATA } from '../data';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-32 px-6 flex flex-col justify-end pb-12 border-b border-white/20 relative">
       {/* Ambient grid background simulation */}
       <div className="absolute inset-0 bg-[#0c0c0c] z-[-1] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
       </div>

       <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[14vw] leading-[0.85] font-black uppercase tracking-tighter w-full flex justify-between items-end"
       >
          <span>YAN ZHE</span>
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
             className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-56 xl:h-56 rounded-full overflow-hidden border border-white/20 shrink-0 translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-y-12"
          >
             <img src="https://i.postimg.cc/wBCbVVv0/9cbf5037069304081c7dd19e7d61215d.jpg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </motion.div>
       </motion.div>
       <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[14vw] leading-[0.85] font-black uppercase tracking-tighter w-full text-right sm:text-left sm:indent-[15vw]"
       >
          KAI<span className="text-white/20">.</span>
       </motion.div>

       <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 lg:mt-24 flex flex-col md:flex-row items-end justify-between gap-8 border-t border-white/20 pt-8"
       >
           <div className="w-full md:max-w-xl">
               <h1 className="text-xl md:text-2xl font-bold mb-4">{HERO_DATA.role}</h1>
               <p className="text-sm md:text-base font-light leading-relaxed text-white/70 whitespace-pre-line">
                   {HERO_DATA.description}
               </p>
           </div>
           <div className="flex gap-4 w-full md:w-auto mt-6 md:mt-0">
               <a href="#portfolio" className="border border-white/50 px-8 py-4 text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full md:w-auto text-center">
                   View Works <span className="ml-2">↗</span>
               </a>
               <a href="#contact" className="border border-white/50 bg-white text-black px-8 py-4 text-[10px] sm:text-xs uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors w-full md:w-auto text-center">
                   Contact <span className="ml-2">↗</span>
               </a>
           </div>
       </motion.div>
    </section>
  );
};
