import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Contact — PULSR' };

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <ScrollReveal>
            <h1 className="display-medium mb-16">Contact</h1>
            <p className="text-secondary mb-48">Got a question? Drop us a message.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form action="#">
              <div className="input-group">
                <label className="input-label">Name</label>
                <input type="text" className="input" placeholder="Your name" id="contact-name" />
              </div>
              <div className="input-group">
                <label className="input-label">Email</label>
                <input type="email" className="input" placeholder="your@email.com" id="contact-email" />
              </div>
              <div className="input-group">
                <label className="input-label">Subject</label>
                <input type="text" className="input" placeholder="What is this about?" id="contact-subject" />
              </div>
              <div className="input-group">
                <label className="input-label">Message</label>
                <textarea className="input" rows="5" placeholder="Your message..." id="contact-message" style={{ resize: 'vertical', borderBottom: '1px solid var(--border-prominent)' }} />
              </div>
              <button type="submit" className="btn btn--primary btn--lg" id="contact-submit" style={{ marginTop: 16 }}>
                Send Message
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--border-subtle)' }}>
              <p className="caption mb-16">Direct Contact</p>
              <p className="text-secondary mb-8">{process.env.NEXT_PUBLIC_STORE_EMAIL || 'hello@pulsr.pl'}</p>
              <p className="text-secondary mb-8">[PLACEHOLDER: Phone number]</p>
              <p className="text-secondary">[PLACEHOLDER: Social media handles]</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
