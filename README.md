# Sakhi Collection Luxury E-Commerce Blueprint

A GitHub-ready Next.js luxury storefront for **Sakhi Collection**, a women’s wear and jewelry boutique based in **Borivali East, Mumbai**. The experience is designed around HNI-oriented shoppers, WhatsApp conversion, luxury storytelling, and premium interaction design.

## Features Included

- **Next.js App Router + TypeScript** architecture.
- **Luxury design system** with rose-gold, cream, black, and metallic gold palettes.
- **Hero section** with morphing typography, particle background, floating gems, layered CTAs, and WhatsApp conversion.
- **Collections experience** with premium filters, search shell, animated cards, urgency messaging, and pricing highlights.
- **Product detail page** with React Three Fiber viewer, AR try-on blueprint panel, reviews, urgency blocks, trust badges, and WhatsApp buying CTA.
- **Cart + checkout flow** with sticky order summary, promo code module, multi-step inspired checkout, and confirmation state.
- **API route examples** for Razorpay, transactional email, and WhatsApp messaging.
- **Testing setup** using Vitest and Playwright.
- **Deployment workflow** for GitHub Actions + Vercel.
- **Environment template** for Firebase, analytics, payments, email, and WhatsApp integrations.

## Tech Stack

- Next.js 15 App Router
- TypeScript 5
- Tailwind CSS 3.4
- SCSS/CSS modules via global CSS + animation sheets
- Framer Motion
- GSAP + ScrollTrigger
- Three.js + @react-three/fiber + drei
- Zustand-ready architecture (dependency included)
- React Hook Form + Zod ready setup
- Firebase Firestore setup scaffold
- Razorpay / Resend / Twilio integration examples
- Vitest + React Testing Library + Playwright

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── api/
│   │   ├── email/
│   │   ├── payment/
│   │   └── whatsapp/
│   ├── cart/
│   ├── checkout/
│   ├── contact/
│   ├── products/
│   │   └── [id]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Animations/
│   ├── Cart/
│   ├── Checkout/
│   ├── Common/
│   ├── Hero/
│   ├── ProductDetail/
│   └── Products/
├── data/
├── hooks/
├── lib/
├── styles/
├── utils/
└── __tests__/
```

## Setup Guide

1. Install **Node.js 20+**.
2. Clone the repository.
3. Copy `.env.example` to `.env.local`.
4. Fill Firebase public config values.
5. Add `NEXT_PUBLIC_WHATSAPP_NUMBER`.
6. Add Razorpay sandbox keys.
7. Add Resend or SendGrid API key.
8. Add Twilio WhatsApp credentials if using Twilio.
9. Add PostHog / GA4 / Sentry / LogRocket identifiers.
10. Run `npm install`.
11. Start local development with `npm run dev`.
12. Open `http://localhost:3000`.
13. Validate API routes with local POST requests.
14. Run `npm run typecheck`.
15. Run `npm run test`.
16. Run `npm run build`.
17. Optionally run `npm run test:e2e` once the dev server is running.
18. Connect repository to Vercel.
19. Add the environment variables in Vercel project settings.
20. Trigger a deployment.

## Firebase / Firestore Schema Blueprint

### Collections

- `products`
  - `name`
  - `slug`
  - `category`
  - `price`
  - `originalPrice`
  - `description`
  - `images[]`
  - `colors[]`
  - `sizes[]`
  - `inventory`
  - `rating`
  - `reviewsCount`
  - `tags[]`
- `orders`
  - `orderNumber`
  - `customer`
  - `items[]`
  - `paymentStatus`
  - `shippingStatus`
  - `whatsAppNotifications`
- `wishlists`
  - `userId`
  - `items[]`
  - `shareToken`
- `analyticsEvents`
  - `eventName`
  - `userId`
  - `metadata`
  - `timestamp`

## API Route Examples

- `POST /api/payment` — creates a sandbox checkout payload for Razorpay.
- `POST /api/email` — queues a transactional email template response.
- `POST /api/whatsapp` — simulates WhatsApp notification dispatch.

## Email Automation Blueprint

Implement these templates in Resend/SendGrid + Firebase Functions:

1. Welcome email with first-order code.
2. Cart abandonment email after 24 hours.
3. Order confirmation email.
4. Shipping notification email.
5. Post-purchase review request.
6. Weekly newsletter.

## Analytics Events to Track

- Product viewed
- Product added to cart
- Cart abandoned
- Checkout started
- Purchase completed
- WhatsApp chat opened
- Review submitted
- Wishlist item saved
- Filter applied
- Search performed

## Vercel Deployment Guide

1. Push repository to GitHub.
2. Import the project into Vercel.
3. Select the `Next.js` framework preset.
4. Add all `.env.example` variables to the Vercel dashboard.
5. Set production domain.
6. Add GitHub secrets for CI/CD workflow: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.
7. Merge to `main` to trigger production deployment.

## Troubleshooting

- If Three.js canvas fails in SSR-sensitive components, keep viewers in client components only.
- If fonts fail to load, verify Google Fonts access or self-host them in `public/fonts`.
- If `npm run test:e2e` fails, ensure a local server is running on port `3000`.
- If WhatsApp links do not open correctly, verify the country code in `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- If Firebase initialization errors occur, make sure all required public environment variables exist.

## Phase 2 Ideas

- Admin dashboard for inventory and fulfillment.
- Loyalty and influencer campaign tooling.
- AI-based photo styling recommendations.
- Shared wishlists and live shopping.
- Native mobile app with React Native.
