import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'About — PULSR' };

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      {/* Hero */}
      <section className="section--hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--black-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p className="caption">/media/about-hero.jpg</p>
        </div>
        <div className="overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 var(--container-padding)' }}>
          <ScrollReveal>
            <h1 className="display-large">PULSR</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <span className="caption mb-24" style={{ display: 'block' }}>The Brand</span>
            <p className="body-large text-secondary" style={{ lineHeight: 2 }}>
              PULSR was born out of a desire to bridge the gap between high-fashion aesthetics and raw, unapologetic streetwear. Every piece is designed with an experimental ethos, pushing the boundaries of what clothing can represent.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div style={{ margin: '60px 0', padding: 60, border: '1px solid var(--border-subtle)', background: 'var(--black-card)', textAlign: 'center' }}>
              <p className="caption"></p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="body-large text-secondary" style={{ lineHeight: 2 }}>
              The name "PULSR" reflects the state between waking and sleep—a liminal space where creativity flows without restriction. Our materials are carefully sourced to ensure both durability and a premium feel, reflecting the duality of our designs.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
