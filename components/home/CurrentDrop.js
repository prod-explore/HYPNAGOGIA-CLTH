'use client';
import Link from 'next/link';
import { getStatusLabel, getStatusBadgeClass, formatPrice } from '@/lib/products';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './CurrentDrop.module.css';

export default function CurrentDrop({ drop }) {
  if (!drop) return null;
  const statusLabel = getStatusLabel(drop.status);
  const badgeClass = getStatusBadgeClass(drop.status);

  return (
    <section className={styles.hero} id="current-drop">
      {/* Background media */}
      <div className={styles.bg}>
        {drop.media?.heroVideo ? (
          <video autoPlay loop muted playsInline poster={drop.media.heroPoster} className={styles.bgMedia}>
            <source src={drop.media.heroVideo} type="video/mp4" />
          </video>
        ) : drop.media?.heroPoster ? (
          <img src={drop.media.heroPoster} alt={drop.name} className={styles.bgMedia} />
        ) : (
          <div className={styles.bgPlaceholder}>
            <p>[HERO VIDEO / IMAGE PLACEHOLDER]</p>
            <p className="caption">Place your media at: /media/drops/{drop.slug}/hero.mp4</p>
          </div>
        )}
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <ScrollReveal>
          <span className={`badge ${badgeClass}`}>{statusLabel}</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className={styles.title}>{drop.name}</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className={styles.tagline}>{drop.tagline}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className={styles.actions}>
            <Link href={`/drops/${drop.slug}`} className="btn btn--primary btn--lg" id="hero-cta">
              {drop.status === 'preorder' ? 'PREORDER NOW' : 'VIEW DROP'}
            </Link>
            <span className={styles.price}>{formatPrice(drop.price.PLN, 'PLN')}</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollDown}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
