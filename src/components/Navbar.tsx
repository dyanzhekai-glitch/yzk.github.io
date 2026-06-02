import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data';

export const Navbar: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/20 bg-[#0c0c0c]/80 backdrop-blur-md flex items-center justify-between px-6 py-4 text-[10px] sm:text-xs uppercase tracking-widest font-mono">
       <div className="flex gap-4 sm:gap-12">
           <a href="#home" className="hover:italic transition-all">YZK © 2026</a>
           <span className="hidden sm:inline text-white/50">{time}</span>
       </div>
       <div className="flex gap-4 sm:gap-8">
           {NAV_LINKS.map(l => (
               <a key={l.href} href={l.href} className="hover:italic hover:text-white/70 transition-all">
                   <span className="hidden sm:inline">{l.label} / </span>{l.en}
               </a>
           ))}
       </div>
    </nav>
  );
};
