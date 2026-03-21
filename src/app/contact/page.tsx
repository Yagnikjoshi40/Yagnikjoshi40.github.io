export default function ContactPage() {
  return (
    <main className="section-shell py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-card p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-metallicGold">Contact</p>
          <h1 className="mt-4 font-display text-5xl text-cream">Visit or WhatsApp us</h1>
          <div className="mt-6 space-y-3 text-cream/70">
            <p>Sakhi Collection, Borivali East, Mumbai</p>
            <p>hello@sakhicollection.com</p>
            <p>+91 99999 99999</p>
          </div>
        </div>
        <div className="glass-card p-10 text-sm text-cream/70">
          <p>Premium contact form placeholder for Resend/SendGrid-backed inquiries, WhatsApp concierge handoff, and FAQ routing.</p>
        </div>
      </div>
    </main>
  );
}
