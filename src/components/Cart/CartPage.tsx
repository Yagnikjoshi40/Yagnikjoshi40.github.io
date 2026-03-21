import { products } from '@/data/products';
import { CartItem } from './CartItem';
import { OrderSummary } from './OrderSummary';
import { PromoCodeInput } from './PromoCodeInput';
import { AnimatedButton } from '@/components/Common/AnimatedButton';

export function CartPage() {
  return (
    <section className="section-shell py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-metallicGold">Luxury cart</p>
          <h1 className="font-display text-5xl text-cream">Curated Cart</h1>
        </div>
        <AnimatedButton href="/products">Continue Shopping</AnimatedButton>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.3fr,0.8fr]">
        <div className="space-y-4">
          {products.slice(0, 2).map((product) => <CartItem key={product.id} product={product} />)}
          <PromoCodeInput />
        </div>
        <OrderSummary />
      </div>
    </section>
  );
}
