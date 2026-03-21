'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Star, Truck, RefreshCcw, Users } from 'lucide-react';
import { AnimatedButton } from '@/components/Common/AnimatedButton';
import { ParticleBackground } from './ParticleBackground';
import { MorphingText } from './MorphingText';
import { ScrollIndicator } from './ScrollIndicator';
import { FloatingGems } from './FloatingGems';
import { useWhatsAppIntegration } from '@/hooks/useWhatsAppIntegration';

const badges = [
  { icon: Star, label: '4.8/5 Stars' },
  { icon: Truck, label: 'Free Shipping' },
  { icon: RefreshCcw, label: '7-Day Returns' },
  { icon: Users, label: '1000+ Customers' }
];

export function HeroSection() {
  const { buildLink } = useWhatsAppIntegration();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <FloatingGems />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,241,232,0.08),transparent_30%),linear-gradient(135deg,rgba(183,110,121,0.18),transparent_42%,rgba(26,26,26,0.92))]" />
      <div className="section-shell relative grid min-h-screen items-center gap-12 py-24 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-metallicGold">Borivali East, Mumbai • Premium Women&apos;s Wear & Jewelry</p>
          <div className="font-display text-5xl leading-none sm:text-7xl">
            <MorphingText />
            <motion.span
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="mt-2 block text-white"
            >
              REDEFINED
            </motion.span>
          </div>
          <h1 className="mt-8 max-w-2xl font-display text-3xl text-cream sm:text-5xl">
            Elegance Redefined for the Modern Indian Woman
          </h1>
          <p className="gradient-flow mt-6 max-w-2xl bg-gradient-to-r from-cream via-roseGold to-metallicGold bg-clip-text text-lg text-transparent">
            Accessible Luxury. Timeless Beauty. Discover premium sarees, occasion jewelry, and concierge-led WhatsApp styling designed to convert admiration into instant action.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <AnimatedButton href="#collections">Explore Collections</AnimatedButton>
            <AnimatedButton href={buildLink('Hello Sakhi Collection, I want a style expert to help me choose a luxury piece.')} className="bg-[#25D366]/15" icon={false}>
              <span className="inline-flex items-center gap-3"><MessageCircle className="h-4 w-4 animate-bounce" /> Chat on WhatsApp</span>
            </AnimatedButton>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {badges.map(({ icon: Icon, label }) => (
              <motion.div key={label} whileHover={{ scale: 1.03, rotate: label.includes('Returns') ? 2 : 0 }} className="glass-card flex items-center gap-3 px-4 py-3 text-sm text-cream/85">
                <Icon className="h-4 w-4 text-metallicGold" />
                {label}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
          <div className="glass-card relative overflow-hidden p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.26),transparent_20%),radial-gradient(circle_at_80%_10%,rgba(183,110,121,0.25),transparent_25%)]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Sakhi Collection jewelry showcase"
                fill
                className="object-cover transition duration-1000 hover:scale-105"
                priority
              />
            </div>
            <div className="relative mt-4 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=${500 + item * 20}&q=80`}
                    alt="Product thumbnail"
                    width={220}
                    height={160}
                    className="h-24 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
