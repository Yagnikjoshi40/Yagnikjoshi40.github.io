const filterGroups = {
  Category: ['Necklaces', 'Rings', 'Sarees', 'Bracelets'],
  Finish: ['Rose Gold', 'Polki', 'Jewel Tone', 'Statement'],
  Occasion: ['Wedding', 'Cocktail', 'Festive', 'Everyday Luxury']
};

export function ProductFilters() {
  return (
    <aside className="glass-card h-fit space-y-6 p-6">
      <div>
        <h3 className="font-display text-2xl text-cream">Refine the edit</h3>
        <p className="mt-2 text-sm text-cream/60">Curated filters with live counts, luxe toggles, and animated states.</p>
      </div>
      {Object.entries(filterGroups).map(([group, options]) => (
        <div key={group}>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-metallicGold">{group}</h4>
          <div className="mt-3 space-y-3 text-sm text-cream/70">
            {options.map((option, index) => (
              <label key={option} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                <span className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px]">✓</span>
                  {option}
                </span>
                <span className="text-cream/50">{12 - index}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-metallicGold">Price</h4>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-roseGold to-metallicGold" />
        </div>
        <div className="mt-3 flex justify-between text-xs text-cream/50"><span>₹1,999</span><span>₹12,999</span></div>
      </div>
    </aside>
  );
}
