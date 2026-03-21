'use client';

import Link from 'next/link';
import { Heart, Search, ShoppingBag, User, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/products', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '#journal', label: 'Blog' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="font-display text-2xl tracking-[0.25em] text-holographic text-cream">
          Sakhi <span className="text-roseGold">Collection</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-cream/80 transition hover:text-white hover:text-holographic">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <div className="glass-card flex items-center gap-2 px-4 py-2 text-sm text-cream/70">
            <Search className="h-4 w-4" />
            Search collections
            <Mic className="ml-4 h-4 w-4 text-roseGold" />
          </div>
          {[Heart, ShoppingBag, User].map((Icon, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.08 }}
              className="relative rounded-full border border-white/15 bg-white/5 p-3 text-cream shadow-glass"
            >
              <Icon className="h-4 w-4" />
              {index < 2 ? <span className="absolute -right-1 -top-1 rounded-full bg-roseGold px-1.5 text-[10px]">2</span> : null}
            </motion.button>
          ))}
        </div>
      </div>
    </header>
  );
}
