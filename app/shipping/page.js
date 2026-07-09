import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Shipping — PULSR' };

export default function ShippingPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="legal-content container">
          <ScrollReveal>
            <h1>Shipping</h1>
            <span className="legal-date">Delivery information</span>

            <h2>Shipping Methods</h2>
            <p>We ship all orders via InPost — Poland&apos;s leading delivery network.</p>

            <h2>InPost Paczkomat (Parcel Locker)</h2>
            <p>Delivery: 2–3 business days — 12,99 zł</p>
            <p>Choose a convenient parcel locker during checkout. Pick up your order 24/7.</p>

            <h2>InPost Courier</h2>
            <p>Delivery: 1–2 business days — 18,99 zł</p>
            <p>Delivered directly to your door.</p>

            <h2>Free Shipping</h2>
            <p>[PLACEHOLDER: Free shipping threshold — e.g. orders over 300 zł ship free.]</p>

            <h2>Preorder Shipping</h2>
            <p>[PLACEHOLDER: Preorder items ship on the estimated date shown on the product page. You will receive tracking information via email once shipped.]</p>

            <h2>International Shipping</h2>
            <p>[PLACEHOLDER: International shipping availability, costs, customs duties notice.]</p>

            <h2>Tracking</h2>
            <p>[PLACEHOLDER: Tracking number provided via email, InPost tracking portal link.]</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
