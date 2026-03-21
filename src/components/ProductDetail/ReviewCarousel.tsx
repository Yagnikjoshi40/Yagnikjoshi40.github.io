const reviews = [
  {
    name: 'Aditi S.',
    text: 'The finish looks couture in person. I ordered over WhatsApp and the styling support felt incredibly premium.'
  },
  {
    name: 'Rhea M.',
    text: 'Fast Mumbai delivery, gorgeous packaging, and the saree drape looks like a designer edit.'
  }
];

export function ReviewCarousel() {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-2xl text-cream">Verified Reviews</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {reviews.map((review) => (
          <article key={review.name} className="glass-card min-w-[280px] p-5">
            <div className="text-metallicGold">★★★★★</div>
            <p className="mt-3 text-sm leading-7 text-cream/75">{review.text}</p>
            <div className="mt-4 text-sm font-semibold text-cream">{review.name} <span className="text-emerald-400">• Verified Purchase</span></div>
          </article>
        ))}
      </div>
    </div>
  );
}
