'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

type AnimatedButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
};

const content = (children: React.ReactNode, icon?: boolean) => (
  <motion.span className="relative z-10 inline-flex items-center gap-3" whileHover={{ x: 4 }}>
    {children}
    {icon ? <ArrowRight className="h-4 w-4" /> : null}
  </motion.span>
);

export function AnimatedButton({ href, onClick, children, className, icon = true }: AnimatedButtonProps) {
  const classes = cn(
    'group relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-cream shadow-luxe transition',
    'before:absolute before:inset-0 before:bg-liquid before:opacity-0 before:transition before:duration-500 hover:before:opacity-100',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content(children, icon)}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {content(children, icon)}
    </button>
  );
}
