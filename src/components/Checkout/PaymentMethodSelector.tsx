const methods = ['Credit / Debit Card', 'UPI', 'Wallet', 'WhatsApp Pay'];

export function PaymentMethodSelector() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {methods.map((method, index) => (
        <button key={method} className={`glass-card p-6 text-left transition hover:-translate-y-1 ${index === 0 ? 'border border-roseGold/50' : ''}`}>
          <p className="text-lg text-cream">{method}</p>
          <p className="mt-2 text-sm text-cream/60">Interactive tile with animated graphic placeholder.</p>
        </button>
      ))}
    </div>
  );
}
