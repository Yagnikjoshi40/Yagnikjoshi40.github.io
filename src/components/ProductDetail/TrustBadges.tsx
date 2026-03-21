import { Lock, RefreshCcw, Truck, Users } from 'lucide-react';

const badges = [
  { icon: RefreshCcw, label: '7-day returns' },
  { icon: Truck, label: 'Free shipping' },
  { icon: Lock, label: 'Secure payment' },
  { icon: Users, label: '1000+ Happy Customers' }
];

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="glass-card flex items-center gap-3 px-4 py-3 text-sm text-cream/75">
          <Icon className="h-4 w-4 text-metallicGold" /> {label}
        </div>
      ))}
    </div>
  );
}
