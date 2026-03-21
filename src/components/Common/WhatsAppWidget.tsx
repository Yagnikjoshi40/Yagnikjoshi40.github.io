'use client';

import { MessageCircle } from 'lucide-react';
import { useWhatsAppIntegration } from '@/hooks/useWhatsAppIntegration';

export function WhatsAppWidget() {
  const { buildLink } = useWhatsAppIntegration();

  return (
    <a
      href={buildLink('Hi! Ask us anything about our collections 💎')}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/15 bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(37,211,102,0.35)] transition hover:scale-[1.03]"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>
      <MessageCircle className="h-5 w-5 animate-bounce" />
      Chat on WhatsApp
    </a>
  );
}
