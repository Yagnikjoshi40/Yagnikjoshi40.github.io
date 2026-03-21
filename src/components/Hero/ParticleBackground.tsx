'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParticleSystem } from '@/hooks/useParticleSystem';

export function ParticleBackground() {
  const [count, setCount] = useState(120);

  useEffect(() => {
    const update = () => setCount(window.innerWidth < 768 ? 100 : 120);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const particles = useParticleSystem(count);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-roseGold/60 via-metallicGold/60 to-white/40 blur-[1px]"
          style={{ left: `${particle.x}%`, top: `${particle.y}%`, width: particle.size * 2, height: particle.size * 2 }}
          animate={{ y: [0, -30, 0], x: [0, 12, -8, 0], opacity: [0.2, 0.8, 0.25] }}
          transition={{ duration: 12 + particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
