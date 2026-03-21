import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/Common/Navbar';
import { Footer } from '@/components/Common/Footer';
import { WhatsAppWidget } from '@/components/Common/WhatsAppWidget';
import { CustomCursor } from '@/components/Common/CustomCursor';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Sakhi Collection | Luxury Women\'s Wear & Jewelry in Mumbai',
  description: 'Luxury women\'s wear and jewelry boutique website for Sakhi Collection, Borivali East, Mumbai.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
