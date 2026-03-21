import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40">
      <div className="section-shell grid gap-10 py-16 lg:grid-cols-[1.5fr,1fr,1fr,1fr]">
        <div>
          <h3 className="font-display text-2xl text-cream">Sakhi Collection</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/70">
            Sakhi Collection curates accessible luxury for the modern Indian woman—premium jewelry and occasion wear designed for festive calendars, intimate soirées, and elevated everyday elegance.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/70">
            From Borivali East, Mumbai to wardrobes across India, we pair couture-inspired styling, trusted service, and WhatsApp-first concierge support for women who value polish, quality, and ease.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-cream">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            {['Shop', 'About', 'Blog', 'FAQs'].map((item) => (
              <li key={item}><Link href="/products">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-cream">Customer Service</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>WhatsApp Style Expert</li>
            <li>hello@sakhicollection.com</li>
            <li>Borivali East, Mumbai</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-cream">Newsletter</h4>
          <p className="mt-4 text-sm text-cream/70">Get 10% off your first order—sign up for exclusive drops.</p>
          <div className="mt-4 flex rounded-full border border-white/10 bg-white/5 p-1">
            <input className="w-full bg-transparent px-4 py-2 text-sm outline-none" placeholder="Email address" />
            <button className="rounded-full bg-roseGold px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/50">
        © 2026 Sakhi Collection. Secure payments • SSL protected • Luxury delivered.
      </div>
    </footer>
  );
}
