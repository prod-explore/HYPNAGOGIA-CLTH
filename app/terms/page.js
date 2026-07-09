import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Terms & Conditions — PULSR' };

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="legal-content container">
          <ScrollReveal>
            <h1>Terms & Conditions</h1>
            <span className="legal-date">[PLACEHOLDER: Last updated date]</span>

            <h2>1. General Provisions</h2>
            <p>[PLACEHOLDER: General terms text. Include your legal entity name, NIP, REGON, registered address, and the scope of these terms.]</p>

            <h2>2. Definitions</h2>
            <p>[PLACEHOLDER: Define key terms — Store, Customer, Product, Order, Drop, Preorder, etc.]</p>

            <h2>3. Orders & Preorders</h2>
            <p>[PLACEHOLDER: How orders work, preorder process, confirmation, production timelines, payment timing.]</p>

            <h2>4. Prices & Payment</h2>
            <p>[PLACEHOLDER: Currency, tax inclusion, accepted payment methods (Stripe, BLIK, card), when payment is charged for preorders.]</p>

            <h2>5. Shipping & Delivery</h2>
            <p>[PLACEHOLDER: Shipping methods (InPost Paczkomat, InPost Courier), delivery times, shipping costs, free shipping threshold.]</p>

            <h2>6. Returns & Refunds</h2>
            <p>[PLACEHOLDER: 14-day right of withdrawal (EU consumer rights), return conditions, refund process. Link to /returns page.]</p>

            <h2>7. Complaints</h2>
            <p>[PLACEHOLDER: How to file a complaint, response timeframes, warranty obligations.]</p>

            <h2>8. Intellectual Property</h2>
            <p>[PLACEHOLDER: All designs, photographs, and content are property of PULSR.]</p>

            <h2>9. Privacy</h2>
            <p>[PLACEHOLDER: Reference to Privacy Policy at /privacy.]</p>

            <h2>10. Final Provisions</h2>
            <p>[PLACEHOLDER: Governing law (Polish law), dispute resolution, contact information.]</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
