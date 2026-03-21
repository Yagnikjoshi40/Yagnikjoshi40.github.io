'use client';

import { motion, AnimatePresence } from 'framer-motion';

export function Toast({ show, message }: { show: boolean; message: string }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 right-6 z-50 rounded-full border border-white/20 bg-black/70 px-5 py-3 text-sm text-cream shadow-luxe backdrop-blur"
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
