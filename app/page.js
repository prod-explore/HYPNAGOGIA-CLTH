import { getFeaturedDrop, getAllDrops } from '@/lib/products';
import CurrentDrop from '@/components/home/CurrentDrop';
import Marquee from '@/components/home/Marquee';
import ArchiveGrid from '@/components/home/ArchiveGrid';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function Home() {
  const featured = await getFeaturedDrop();
  const allDrops = await getAllDrops();
  const availableDrops = allDrops.filter(d => d.status === 'preorder' || d.status === 'available');

  return (
    <>
      {/* Hero — Current Drop */}
      <CurrentDrop drop={featured} />

      {/* Marquee */}
      <Marquee text={`PULSR • ${featured?.name || 'DROP 001'} • ${featured?.status === 'preorder' ? 'PREORDER OPEN' : 'EXPLORE'} • LIMITED EDITION • `} />

      {/* Archive Grid */}
      <ArchiveGrid drops={allDrops} title="All Drops" />

      {/* Newsletter */}
      <section className="section" id="newsletter-section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="heading-2 mb-16">Stay in the loop</h2>
            <p className="body-large text-secondary mb-32">
              Get notified about new drops, restocks, and exclusive content.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <form
              style={{ display: 'flex', maxWidth: 440, margin: '0 auto', borderBottom: '1px solid var(--border-prominent)' }}
              action="#"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="input"
                style={{ borderBottom: 'none' }}
                id="homepage-newsletter-email"
              />
              <button type="submit" className="btn btn--ghost" style={{ whiteSpace: 'nowrap' }} id="homepage-newsletter-submit">
                Subscribe →
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
