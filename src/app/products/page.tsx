import { ProductFilters } from '@/components/Products/ProductFilters';
import { ProductGrid } from '@/components/Products/ProductGrid';
import { SearchBar } from '@/components/Products/SearchBar';
import { SortDropdown } from '@/components/Products/SortDropdown';

export default function ProductsPage() {
  return (
    <main className="section-shell py-16">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-metallicGold">Collections</p>
          <h1 className="font-display text-5xl text-cream">Premium Edit</h1>
        </div>
        <SortDropdown />
      </div>
      <div className="mb-8"><SearchBar /></div>
      <div className="grid gap-8 xl:grid-cols-[0.3fr,1fr]">
        <ProductFilters />
        <ProductGrid />
      </div>
    </main>
  );
}
