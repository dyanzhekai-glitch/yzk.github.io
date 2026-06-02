import { motion } from 'motion/react';
import React from 'react';

interface MarqueeProps {
  text: string;
  speed?: number;
}

export const MarqueeText: React.FC<MarqueeProps> = ({ text, speed = 20 }) => {
  return (
    <div className="relative overflow-hidden w-full bg-black py-4 border-y border-white/20 whitespace-nowrap flex group">
      <motion.div
        className="text-[6vw] font-black uppercase tracking-tighter leading-none px-4"
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {text}&nbsp;{text}&nbsp;{text}&nbsp;{text}
      </motion.div>
    </div>
  );
};
