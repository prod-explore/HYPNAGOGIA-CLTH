import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Returns & Refunds — PULSR' };

export default function ReturnsPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="legal-content container">
          <ScrollReveal>
            <h1>Returns & Refunds</h1>
            <span className="legal-date">Last updated: {new Date().toLocaleDateString()}</span>

            <h2>14-Day Right of Withdrawal</h2>
            <p>Under EU consumer rights, you have 14 calendar days from delivery to withdraw from your purchase without giving any reason. The item must be unused, in its original packaging, and with all tags attached.</p>

            <h2>How to Return</h2>
            <p>Please follow these steps to initiate a return:</p>
            <ul>
              <li>Step 1 — Contact us at contact@pulsr.pl</li>
              <li>Step 2 — Fill out the return form provided via email</li>
              <li>Step 3 — Ship the item back via InPost using the generated label</li>
            </ul>

            <h2>Refund Process</h2>
            <p>Refunds will be processed within 14 days of receiving the returned item. The refund will be issued to the original payment method (e.g., Stripe, BLIK).</p>

            <h2>Preorder Cancellations</h2>
            <p>Preorders can be cancelled within 14 days of placing the order, provided the production phase has not yet commenced. Cancelled preorders will be fully refunded.</p>

            <h2>Exchanges</h2>
            <p>Due to the limited nature of our drops, we cannot guarantee size exchanges. If your desired size is out of stock, you will be offered a full refund.</p>

            <h2>Damaged Items</h2>
            <p>If your item arrives damaged, please contact us immediately with photo documentation. We will arrange a replacement or a full refund.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
