export function PromoCodeInput() {
  return (
    <div className="glass-card flex items-center gap-3 p-2">
      <input className="w-full bg-transparent px-4 py-3 outline-none" placeholder="Add promo code" />
      <button className="rounded-full bg-roseGold px-4 py-3 text-xs uppercase tracking-[0.25em] text-white">Apply</button>
    </div>
  );
}
