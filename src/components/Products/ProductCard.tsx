'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Heart, Share2, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  return (
    <motion.div whileHover={{ y: -8 }} className="group glass-card relative overflow-hidden p-4">
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(183,110,121,0.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.16),transparent_30%)]" />
      <Link href={`/products/${product.id}`} className="relative block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-110" />
        </div>
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-metallicGold">{product.category}</p>
            <h3 className="mt-2 font-display text-2xl text-cream">{product.name}</h3>
            <p className="mt-2 text-sm text-cream/65">Trending This Week • ⭐ {product.rating}/5 Stars</p>
          </div>
          <div className="rounded-full border border-white/10 bg-black/35 px-3 py-2 text-right text-sm text-roseGold shadow-luxe [transform-style:preserve-3d] group-hover:[transform:rotateX(14deg)_rotateY(-14deg)]">
            ₹{product.price.toLocaleString('en-IN')}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-cream/70">
          <Star className="h-4 w-4 fill-metallicGold text-metallicGold" /> {product.reviews} verified reviews
        </div>
        {product.stock < 5 ? (
          <div className="mt-4 inline-flex animate-pulse rounded-full bg-roseGold/20 px-3 py-1 text-xs text-roseGold">
            Only {product.stock} left • {discount}% OFF
          </div>
        ) : null}
      </Link>
      <div className="absolute right-6 top-6 flex translate-x-8 flex-col gap-2 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100">
        {[Heart, Eye, ShoppingBag, Share2].map((Icon, index) => (
          <button key={index} className="rounded-full border border-white/10 bg-black/50 p-3 text-cream shadow-glass"><Icon className="h-4 w-4" /></button>
        ))}
      </div>
    </motion.div>
  );
}
