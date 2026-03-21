export function OrderSummary() {
  return (
    <div className="glass-card sticky top-24 space-y-4 p-6">
      <h3 className="font-display text-2xl text-cream">Order Summary</h3>
      <div className="space-y-3 text-sm text-cream/70">
        <div className="flex justify-between"><span>Subtotal</span><span>₹10,998</span></div>
        <div className="flex justify-between text-emerald-400"><span>Discount</span><span>-₹2,500</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>FREE</span></div>
      </div>
      <div className="border-t border-white/10 pt-4 text-lg text-cream"><div className="flex justify-between"><span>Total</span><span>₹8,498</span></div></div>
      <div className="rounded-full bg-roseGold/15 px-4 py-2 text-center text-xs uppercase tracking-[0.25em] text-roseGold">You save 40%</div>
    </div>
  );
}
