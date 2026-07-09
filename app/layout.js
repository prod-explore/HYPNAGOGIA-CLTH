import './globals.css';
import { CartProvider } from '@/lib/cart';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata = {
  title: 'PULSR — Experimental Clothing',
  description: '[PLACEHOLDER: Brand description for SEO — Experimental clothing brand. Limited drops. Art you wear.]',
  keywords: ['clothing', 'fashion', 'streetwear', 'drops', 'preorder', 'PULSR'],
  openGraph: {
    title: 'PULSR',
    description: '[PLACEHOLDER: OG description]',
    url: 'https://explore.pulsr.pl',
    siteName: 'PULSR',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CartProvider>
          <CustomCursor />
          <Header />
          <main className="page-enter">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
