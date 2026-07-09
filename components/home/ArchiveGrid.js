import Link from 'next/link';
import { getStatusLabel, getStatusBadgeClass, formatPrice } from '@/lib/formatters';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './ArchiveGrid.module.css';

export default function ArchiveGrid({ drops, title = 'Archive' }) {
  if (!drops || drops.length === 0) return null;

  return (
    <section className={styles.section} id="archive-grid">
      <div className="container">
        <ScrollReveal>
          <h2 className={styles.title}>{title}</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {drops.map((drop, i) => (
            <ScrollReveal key={drop.id} delay={i * 0.1}>
              <Link href={`/drops/${drop.slug}`} className={styles.card}>
                <div className={`${styles.image} ${drop.status === 'soldout' ? styles.soldout : ''}`}>
                  {drop.media?.heroPoster ? (
                    <img src={drop.media.heroPoster} alt={drop.name} />
                  ) : (
                    <div className={styles.placeholder}></div>
                  )}
                  <span className={`badge ${getStatusBadgeClass(drop.status)} ${styles.badge}`}>
                    {getStatusLabel(drop.status)}
                  </span>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{drop.name}</h3>
                  <p className={styles.price}>{formatPrice(drop.price.PLN, 'PLN')}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
