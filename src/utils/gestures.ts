export type GestureAction = 'next-product' | 'prev-product' | 'reviews' | 'close-modal' | 'shake-discount' | 'none';

export const detectSwipeAction = (deltaX: number, deltaY: number): GestureAction => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return deltaX > 40 ? 'prev-product' : deltaX < -40 ? 'next-product' : 'none';
  }

  return deltaY < -40 ? 'reviews' : deltaY > 40 ? 'close-modal' : 'none';
};

export const formatDiscountCode = (seed: string) => `SAKHI-${seed.toUpperCase().slice(0, 4)}-LUXE`;
