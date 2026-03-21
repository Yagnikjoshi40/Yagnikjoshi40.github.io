export function CardInput() {
  return (
    <div className="glass-card space-y-4 p-6">
      <div className="rounded-[28px] bg-gradient-to-br from-roseGold/70 to-metallicGold/50 p-6 text-black">
        <p className="text-sm uppercase tracking-[0.25em]">Sakhi Luxury Card</p>
        <p className="mt-8 text-2xl tracking-[0.25em]">4242 4242 4242 4242</p>
        <div className="mt-8 flex justify-between text-sm"><span>Aditi Sakhi</span><span>09/28</span></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {['Cardholder Name', 'Card Number', 'Expiry', 'CVV'].map((field) => (
          <label key={field} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream/60">
            {field}
          </label>
        ))}
      </div>
    </div>
  );
}
