'use client';

export const useWhatsAppIntegration = () => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

  const buildLink = (message: string) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return { buildLink };
};
