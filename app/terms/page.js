import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Terms & Conditions — PULSR' };

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="legal-content container">
          <ScrollReveal>
            <h1>Terms & Conditions</h1>
            <span className="legal-date">Last updated: {new Date().toLocaleDateString()}</span>

            <h2>1. General Provisions</h2>
            <p>These Terms & Conditions govern the sales of products by PULSR sp. z o.o., NIP: 0000000000, registered in Warsaw, Poland.</p>

            <h2>2. Definitions</h2>
            <p>Store: The online store operated by PULSR. Customer: Any individual purchasing from the Store. Drop: A limited release of products.</p>

            <h2>3. Orders & Preorders</h2>
            <p>Orders are confirmed via email. Preorders represent a reservation for an upcoming production run. Timelines are clearly stated on the product page.</p>

            <h2>4. Prices & Payment</h2>
            <p>All prices are in PLN and include VAT. We accept payments via Stripe, BLIK, and major credit cards. Preorders are charged at the time of purchase.</p>

            <h2>5. Shipping & Delivery</h2>
            <p>We ship via InPost Paczkomat and InPost Courier within Poland. Delivery typically takes 1-3 business days after dispatch.</p>

            <h2>6. Returns & Refunds</h2>
            <p>Customers have a 14-day right of withdrawal according to EU consumer law. Please refer to our Returns page for full details.</p>

            <h2>7. Complaints</h2>
            <p>Complaints regarding defective products must be submitted via email. We aim to resolve all issues within 14 days.</p>

            <h2>8. Intellectual Property</h2>
            <p>All designs, photographs, and content are the exclusive property of PULSR.</p>

            <h2>9. Privacy</h2>
            <p>For information on how we handle your data, please see our Privacy Policy.</p>

            <h2>10. Final Provisions</h2>
            <p>These terms are governed by Polish law. Any disputes will be resolved by the competent Polish courts.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
