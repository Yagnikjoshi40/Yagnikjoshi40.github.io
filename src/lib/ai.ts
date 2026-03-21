import { getMoodPalette } from '@/utils/colorTheory';
import type { Product } from '@/data/products';

export const buildRecommendations = (products: Product[], viewed: string[]) => {
  const viewedSet = new Set(viewed);
  return products
    .map((product) => ({
      product,
      score: (viewedSet.has(product.id) ? 3 : 1) + getMoodPalette(product.description).length + product.rating
    }))
    .sort((a, b) => b.score - a.score)
    .map(({ product }) => product)
    .slice(0, 3);
};
