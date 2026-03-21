import { AddressForm } from './AddressForm';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { CardInput } from './CardInput';
import { OrderReview } from './OrderReview';
import { ConfirmationPage } from './ConfirmationPage';
import { AnimatedButton } from '@/components/Common/AnimatedButton';

export function CheckoutFlow() {
  return (
    <section className="section-shell space-y-8 py-16">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-metallicGold">Multi-step checkout</p>
        <h1 className="font-display text-5xl text-cream">Complete Purchase</h1>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {['Shipping Address', 'Payment Method', 'Order Review'].map((step, index) => (
          <div key={step} className="glass-card flex items-center gap-3 p-4 text-sm text-cream/75">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${index === 0 ? 'bg-emerald-500 text-black' : 'bg-white/10'}`}>{index + 1}</span>
            {step}
          </div>
        ))}
      </div>
      <AddressForm />
      <PaymentMethodSelector />
      <CardInput />
      <OrderReview />
      <div className="flex justify-end"><AnimatedButton href="/checkout#confirmation">COMPLETE PURCHASE</AnimatedButton></div>
      <div id="confirmation"><ConfirmationPage /></div>
    </section>
  );
}
