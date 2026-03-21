import { Variants } from 'framer-motion';

export const staggerReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      delay: index * 0.05,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const liquidTransition = {
  initial: { clipPath: 'circle(0% at 50% 50%)' },
  animate: { clipPath: 'circle(140% at 50% 50%)', transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

export const pulseCount = (value: number) => Array.from({ length: value }, (_, index) => index + 1);
