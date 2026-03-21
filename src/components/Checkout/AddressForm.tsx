export function AddressForm() {
  return (
    <div className="glass-card space-y-4 p-6">
      <h3 className="font-display text-2xl text-cream">Shipping Address</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {['Full Name', 'Phone Number', 'Address Line 1', 'Address Line 2', 'City', 'Pincode'].map((field) => (
          <label key={field} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream/60">
            {field}
          </label>
        ))}
      </div>
      <button className="rounded-full border border-white/10 px-4 py-3 text-sm text-cream/70">Use current location</button>
    </div>
  );
}
