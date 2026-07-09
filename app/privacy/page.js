import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Privacy Policy — PULSR' };

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="legal-content container">
          <ScrollReveal>
            <h1>Privacy Policy</h1>
            <span className="legal-date">Last updated: {new Date().toLocaleDateString()}</span>

            <h2>1. Data Controller</h2>
            <p>The data controller is PULSR sp. z o.o., registered in Warsaw, Poland. Contact: privacy@pulsr.pl</p>

            <h2>2. Data We Collect</h2>
            <p>We collect personal data including your name, email, phone number, and shipping address necessary to process your order.</p>

            <h2>3. Purpose of Processing</h2>
            <p>Your data is processed strictly for order fulfillment, shipping via InPost, payment processing via Stripe, and customer support.</p>

            <h2>4. Legal Basis (GDPR Art. 6)</h2>
            <p>Processing is necessary for the performance of a contract (your order) and our legitimate business interests.</p>

            <h2>5. Data Recipients</h2>
            <p>We share your data with trusted third parties: Stripe (payments), InPost (shipping), and our secure hosting providers.</p>

            <h2>6. Data Retention</h2>
            <p>Order data is retained for 5 years as required by Polish tax law. Newsletter subscriptions are kept until you opt-out.</p>

            <h2>7. Your Rights</h2>
            <p>You have the right to access, rectify, erase, or restrict the processing of your data. Contact us to exercise these rights.</p>

            <h2>8. Cookies</h2>
            <p>We use essential cookies for cart functionality and anonymous analytics to improve our store.</p>

            <h2>9. Changes</h2>
            <p>Any changes to this policy will be communicated via our website or email.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
