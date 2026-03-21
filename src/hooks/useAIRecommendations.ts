'use client';

import { useMemo } from 'react';
import { buildRecommendations } from '@/lib/ai';
import { products } from '@/data/products';

export const useAIRecommendations = (viewed: string[]) => {
  return useMemo(() => buildRecommendations(products, viewed), [viewed]);
};
