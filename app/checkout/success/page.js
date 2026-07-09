import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Order Confirmed — PULSR' };

export default function CheckoutSuccess() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 80px)', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container container--narrow text-center">
        <ScrollReveal>
          <h1 className="display-medium mb-16">Thank you</h1>
          <p className="body-large text-secondary mb-32">
            Your order has been confirmed. You will receive a confirmation email shortly.
          </p>
          <p className="caption mb-48">[PLACEHOLDER: Order number and tracking details will appear here]</p>
          <Link href="/archive" className="btn btn--outline">Continue Browsing</Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
