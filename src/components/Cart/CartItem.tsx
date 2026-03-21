import Image from 'next/image';
import type { Product } from '@/data/products';

export function CartItem({ product }: { product: Product }) {
  return (
    <div className="glass-card flex gap-4 p-4">
      <div className="relative h-28 w-24 overflow-hidden rounded-2xl">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="font-display text-xl text-cream">{product.name}</p>
          <p className="text-sm text-cream/60">Rose Gold • Size M</p>
        </div>
        <div className="flex items-center justify-between text-sm text-cream/70">
          <span>₹{product.price.toLocaleString('en-IN')}</span>
          <div className="flex items-center gap-3 rounded-full border border-white/10 px-3 py-2"><button>-</button><span>1</span><button>+</button></div>
        </div>
      </div>
    </div>
  );
}
