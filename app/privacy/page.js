import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Privacy Policy — HYPNAGOGIA' };

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="legal-content container">
          <ScrollReveal>
            <h1>Privacy Policy</h1>
            <span className="legal-date">[PLACEHOLDER: Last updated date]</span>

            <h2>1. Data Controller</h2>
            <p>[PLACEHOLDER: Legal entity name, address, NIP, contact email for data protection inquiries.]</p>

            <h2>2. Data We Collect</h2>
            <p>[PLACEHOLDER: Personal data collected — name, email, phone, shipping address, payment info (processed by Stripe), browsing data.]</p>

            <h2>3. Purpose of Processing</h2>
            <p>[PLACEHOLDER: Order fulfillment, shipping (InPost), payment processing (Stripe), newsletter (if subscribed), customer support.]</p>

            <h2>4. Legal Basis (GDPR Art. 6)</h2>
            <p>[PLACEHOLDER: Contract performance, legitimate interest, consent for newsletter.]</p>

            <h2>5. Data Recipients</h2>
            <p>[PLACEHOLDER: Stripe (payments), InPost (shipping), hosting provider, email service provider.]</p>

            <h2>6. Data Retention</h2>
            <p>[PLACEHOLDER: How long data is stored — order data, newsletter subscriptions, etc.]</p>

            <h2>7. Your Rights</h2>
            <p>[PLACEHOLDER: Right to access, rectification, erasure, restriction, data portability, objection. Contact method.]</p>

            <h2>8. Cookies</h2>
            <p>[PLACEHOLDER: Cookie usage — essential (cart), analytics (if used), how to disable.]</p>

            <h2>9. Changes</h2>
            <p>[PLACEHOLDER: How changes to this policy will be communicated.]</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
