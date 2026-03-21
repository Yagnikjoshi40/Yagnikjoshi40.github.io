import Link from 'next/link';
import { products } from '@/data/products';

export function RelatedProducts() {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-2xl text-cream">You might also like</h3>
      <div className="grid gap-4">
        {products.slice(0, 3).map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="glass-card block p-4 transition hover:-translate-y-1">
            <p className="text-sm text-metallicGold">{product.category}</p>
            <p className="mt-2 text-lg text-cream">{product.name}</p>
            <p className="mt-2 text-sm text-roseGold">₹{product.price.toLocaleString('en-IN')}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
