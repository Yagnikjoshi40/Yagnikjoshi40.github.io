'use client';

import { useMemo } from 'react';

export const useParticleSystem = (count: number) =>
  useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 4,
        delay: Math.random() * 6
      })),
    [count]
  );
