'use client';
import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const faqs = [
  { q: 'What is a preorder?', a: 'A preorder allows you to reserve an item before it is produced. Payment is taken at the time of ordering, and the item ships on the estimated date.' },
  { q: 'When will my preorder ship?', a: 'Each drop page shows the estimated shipping date. You will receive an email with tracking information once shipped.' },
  { q: 'What payment methods do you accept?', a: 'We accept credit/debit cards, BLIK, and Przelewy24 — all processed securely via Stripe.' },
  { q: 'Can I cancel a preorder?', a: 'You can cancel your preorder within 14 days of placing it, as per EU consumer rights, provided production hasn\'t started.' },
  { q: 'Do you ship internationally?', a: 'Currently we ship within Poland via InPost. International shipping coming soon.' },
  { q: 'What sizes do you offer?', a: 'Sizes range from S to XL. Check the size guide on each product page for exact measurements.' },
  { q: 'How do returns work?', a: 'You have 14 days from delivery to return unused items. See our Returns page for full details.' },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <h1 className="display-medium mb-48">FAQ</h1>
          </ScrollReveal>
          <div>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className={`accordion-item ${openIdx === i ? 'open' : ''}`}>
                  <button className="accordion-trigger" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                    <span>{faq.q}</span>
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <div className="accordion-body">{faq.a}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
