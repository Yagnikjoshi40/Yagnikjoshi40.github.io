import { AnimatedButton } from '@/components/Common/AnimatedButton';

export function ConfirmationPage() {
  return (
    <div className="glass-card mx-auto max-w-3xl space-y-4 p-10 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-4xl text-emerald-400">✓</div>
      <h1 className="font-display text-5xl text-cream">Order confirmed!</h1>
      <p className="text-cream/70">Order #SAKHI-20394 • Estimated delivery by 23 March 2026</p>
      <div className="flex justify-center gap-4">
        <AnimatedButton href="/products">Continue Shopping</AnimatedButton>
        <AnimatedButton href="https://wa.me/919999999999?text=Hi%20Sakhi%20Collection%2C%20please%20share%20my%20order%20tracking%20details." className="bg-[#25D366]/15" icon={false}>Share on WhatsApp</AnimatedButton>
      </div>
    </div>
  );
}
