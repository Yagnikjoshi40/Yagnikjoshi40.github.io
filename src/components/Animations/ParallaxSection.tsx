'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  return <motion.div style={{ y }}>{children}</motion.div>;
}
