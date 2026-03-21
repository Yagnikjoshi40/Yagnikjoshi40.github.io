'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const words = ['ELEGANCE', 'LUXURY'];

export function MorphingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((value) => (value + 1) % words.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, filter: 'blur(12px)', letterSpacing: '0.6em', rotateX: -90 }}
        animate={{ opacity: 1, filter: 'blur(0px)', letterSpacing: '0.3em', rotateX: 0 }}
        exit={{ opacity: 0, filter: 'blur(16px)', rotateX: 90 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="block text-holographic"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
