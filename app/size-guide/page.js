import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Size Guide — PULSR' };

export default function SizeGuidePage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <h1 className="display-medium mb-16">Size Guide</h1>
            <p className="text-secondary mb-48">All measurements in centimeters. Measured flat.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-prominent)' }}>
                    <th style={{ padding: '16px 12px', textAlign: 'left', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Size</th>
                    <th style={{ padding: '16px 12px', textAlign: 'center', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Chest (cm)</th>
                    <th style={{ padding: '16px 12px', textAlign: 'center', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Length (cm)</th>
                    <th style={{ padding: '16px 12px', textAlign: 'center', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Sleeve (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <tr key={size} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '16px 12px', fontWeight: 600 }}>{size}</td>
                      <td style={{ padding: '16px 12px', textAlign: 'center', color: 'var(--text-secondary)' }}>?</td>
                      <td style={{ padding: '16px 12px', textAlign: 'center', color: 'var(--text-secondary)' }}>?</td>
                      <td style={{ padding: '16px 12px', textAlign: 'center', color: 'var(--text-secondary)' }}>?</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-secondary body-small" style={{ marginTop: 32 }}>
              Our garments typically feature a boxy, slightly oversized fit. If you prefer a standard fit, consider sizing down.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
