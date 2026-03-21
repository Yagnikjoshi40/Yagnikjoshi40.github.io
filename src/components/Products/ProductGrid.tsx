import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  return (
    <div id="collections" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
