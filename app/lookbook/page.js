import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Lookbook — PULSR' };

export default function LookbookPage() {
  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h1 className="display-medium mb-48">Lookbook</h1>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {placeholders.map((n, i) => (
              <ScrollReveal key={n} delay={i * 0.08}>
                <div style={{
                  aspectRatio: i % 3 === 0 ? '16/9' : '3/4',
                  background: 'var(--black-card)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gridColumn: i === 0 ? '1 / -1' : 'auto',
                }}>
                  <p className="caption"></p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
