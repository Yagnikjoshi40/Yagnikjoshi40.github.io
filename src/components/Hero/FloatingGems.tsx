'use client';

import { Gem, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [Gem, Star, Sparkles];

export function FloatingGems() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-metallicGold/30"
          style={{ top: `${12 + index * 18}%`, left: index % 2 === 0 ? '8%' : '86%' }}
          animate={{ y: [0, -20, 0], rotate: [0, 12, -8, 0] }}
          transition={{ duration: 8 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon className="h-12 w-12" />
        </motion.div>
      ))}
    </div>
  );
}
