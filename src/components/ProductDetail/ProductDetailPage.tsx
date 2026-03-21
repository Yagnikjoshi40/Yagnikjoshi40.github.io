'use client';

import { useMemo, useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { products } from '@/data/products';
import { ThreeDViewer } from './ThreeDViewer';
import { ArPreview } from './ArPreview';
import { VariantSelector } from './VariantSelector';
import { ReviewCarousel } from './ReviewCarousel';
import { RelatedProducts } from './RelatedProducts';
import { TrustBadges } from './TrustBadges';
import { AnimatedButton } from '@/components/Common/AnimatedButton';
import { Toast } from '@/components/Common/Toast';
import { useWhatsAppIntegration } from '@/hooks/useWhatsAppIntegration';

export function ProductDetailPage({ id }: { id: string }) {
  const product = useMemo(() => products.find((item) => item.id === id) ?? products[0], [id]);
  const [toast, setToast] = useState(false);
  const { buildLink } = useWhatsAppIntegration();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <section className="section-shell py-16">
      <div className="grid gap-8 xl:grid-cols-[1.2fr,1fr,0.9fr]">
        <div className="space-y-4">
          <ThreeDViewer />
          <ArPreview />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-metallicGold">Luxury product detail</p>
            <h1 className="mt-3 font-display text-4xl text-cream">{product.name}</h1>
            <button className="mt-3 text-sm text-cream/70">★★★★★ 4.8/5 Stars • 127 reviews</button>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-end gap-3">
              <span className="text-sm text-cream/40 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              <span className="text-4xl font-semibold text-roseGold">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="rounded-full bg-roseGold/20 px-3 py-1 text-xs text-roseGold">{discount}% OFF</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-cream/75">{product.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-cream/70">
              <li>• Premium quality guaranteed</li>
              <li>• Expert customer support on WhatsApp</li>
              <li>• Free delivery in Mumbai</li>
            </ul>
          </div>
          <VariantSelector colors={product.colors} />
          <div className="flex items-center gap-3">
            <div className="glass-card flex items-center gap-4 px-4 py-3">
              <button>-</button><span>1</span><button>+</button>
            </div>
            <button className="rounded-full border border-white/10 bg-white/5 p-4"><Heart className="h-4 w-4" /></button>
          </div>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton onClick={() => { setToast(true); setTimeout(() => setToast(false), 2000); }}>Add to Cart</AnimatedButton>
            <AnimatedButton href={buildLink(`Hi Sakhi Collection, I want to buy ${product.name} for ₹${product.price.toLocaleString('en-IN')}.`)} className="bg-[#25D366]/15" icon={false}>
              <span className="inline-flex items-center gap-3"><MessageCircle className="h-4 w-4" /> Buy Now on WhatsApp</span>
            </AnimatedButton>
          </div>
          <TrustBadges />
        </div>
        <div className="space-y-6">
          <div className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-metallicGold">Urgency</p>
            <div className="mt-4 space-y-3 text-sm text-cream/75">
              <p>Only {product.stock} left in stock</p>
              <p>10 people viewed this today</p>
              <p>Trending this week ↗</p>
              <p>Delivery to Mumbai by 23 March 2026 • FREE</p>
            </div>
          </div>
          <ReviewCarousel />
          <RelatedProducts />
        </div>
      </div>
      <Toast show={toast} message="Added to cart with celebratory sparkle ✨" />
    </section>
  );
}
