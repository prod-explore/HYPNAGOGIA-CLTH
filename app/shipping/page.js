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
            <span className="legal-date">Last updated: {new Date().toLocaleDateString()}</span>

            <h2>Free Shipping Threshold</h2>
            <p>We offer free domestic shipping via InPost on all orders over 300 PLN.</p>

            <h2>Preorder Shipping</h2>
            <p>Preorder items ship on the estimated date shown on the product page. You will receive tracking information via email once shipped.</p>

            <h2>International Shipping</h2>
            <p>Currently, we only ship within Poland. International shipping is coming soon. Please note that for future international orders, customs duties may apply.</p>

            <h2>Tracking Your Order</h2>
            <p>A tracking number will be provided via email once your order is dispatched. You can track your package directly through the InPost portal or app.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
