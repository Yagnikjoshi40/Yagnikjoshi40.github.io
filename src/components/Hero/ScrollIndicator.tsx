'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70"
    >
      <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
      <ChevronDown className="h-5 w-5" />
    </motion.div>
  );
}
