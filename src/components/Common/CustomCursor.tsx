'use client';

import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';

export function CustomCursor() {
  const { x, y } = useCursor();

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-4 w-4 rounded-full border border-roseGold bg-roseGold/30 shadow-luxe md:block"
        animate={{ x: x - 8, y: y - 8 }}
        transition={{ type: 'spring', stiffness: 600, damping: 35 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-10 w-10 rounded-full bg-roseGold/10 blur-xl md:block"
        animate={{ x: x - 20, y: y - 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      />
    </>
  );
}
