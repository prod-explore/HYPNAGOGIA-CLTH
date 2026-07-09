import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Returns & Refunds — PULSR' };

export default function ReturnsPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="legal-content container">
          <ScrollReveal>
            <h1>Returns & Refunds</h1>
            <span className="legal-date">[PLACEHOLDER: Last updated date]</span>

            <h2>14-Day Right of Withdrawal</h2>
            <p>[PLACEHOLDER: EU consumer right — 14 calendar days from delivery to withdraw without giving a reason. Conditions: item must be unused, in original packaging, with tags attached.]</p>

            <h2>How to Return</h2>
            <p>[PLACEHOLDER: Step-by-step return process — contact email, return form, shipping instructions.]</p>
            <ul>
              <li>[PLACEHOLDER: Step 1 — Contact us at [EMAIL]]</li>
              <li>[PLACEHOLDER: Step 2 — Fill out the return form]</li>
              <li>[PLACEHOLDER: Step 3 — Ship the item back via InPost]</li>
            </ul>

            <h2>Refund Process</h2>
            <p>[PLACEHOLDER: Refund timeline, method (original payment method via Stripe), shipping cost refund policy.]</p>

            <h2>Preorder Cancellations</h2>
            <p>[PLACEHOLDER: Can preorders be cancelled? Timeline, conditions, refund for cancelled preorders.]</p>

            <h2>Exchanges</h2>
            <p>[PLACEHOLDER: Exchange policy — size exchanges, availability, process.]</p>

            <h2>Damaged Items</h2>
            <p>[PLACEHOLDER: What to do if item arrives damaged — photo documentation, contact, replacement/refund.]</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
