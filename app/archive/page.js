import { getAllDrops } from '@/lib/products';
import ProductCard from '@/components/shop/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'All Products — HYPNAGOGIA',
  description: 'Browse all drops from HYPNAGOGIA. Limited edition experimental clothing.',
};

export default async function ArchivePage() {
  const drops = await getAllDrops();

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h1 className="display-medium mb-16">All Products</h1>
            <p className="body-large text-secondary mb-48">Every drop, past and present.</p>
          </ScrollReveal>

          <div className="grid grid--3">
            {drops.map((drop, i) => (
              <ScrollReveal key={drop.id} delay={i * 0.08}>
                <ProductCard drop={drop} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
