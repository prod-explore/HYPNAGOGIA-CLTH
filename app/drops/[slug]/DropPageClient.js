'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCartDispatch } from '@/lib/cart';
import { formatPrice, getStatusLabel, getStatusBadgeClass } from '@/lib/formatters';
import SizeSelector from '@/components/shop/SizeSelector';
import ColorSelector from '@/components/shop/ColorSelector';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './drop.module.css';

export default function DropPageClient({ drop, otherDrops }) {
  const dispatch = useCartDispatch();
  const [selectedSize, setSelectedSize] = useState(drop.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(drop.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (drop.status === 'soldout' || drop.status === 'coming') return;
    dispatch({
      type: 'ADD_ITEM',
      item: {
        id: drop.id,
        name: drop.name,
        slug: drop.slug,
        size: selectedSize,
        color: selectedColor.name,
        colorName: selectedColor.name,
        price: drop.price,
        quantity,
        image: drop.media?.heroPoster || null,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const statusLabel = getStatusLabel(drop.status);
  const canPurchase = drop.status === 'preorder' || drop.status === 'available';

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          {drop.media?.heroVideo ? (
            <video autoPlay loop muted playsInline poster={drop.media.heroPoster} className={styles.heroMedia}>
              <source src={drop.media.heroVideo} type="video/mp4" />
            </video>
          ) : drop.media?.heroPoster ? (
            <img src={drop.media.heroPoster} alt={drop.name} className={styles.heroMedia} />
          ) : (
            <div className={styles.heroPlaceholder}>
              <p>[HERO MEDIA PLACEHOLDER]</p>
              <p className="caption">/media/drops/{drop.slug}/hero.mp4</p>
            </div>
          )}
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={`badge ${getStatusBadgeClass(drop.status)}`}>{statusLabel}</span>
          <h1 className={styles.heroTitle}>{drop.name}</h1>
          {drop.estimatedShipDate && drop.status === 'preorder' && (
            <p className={styles.heroShip}>Ships {drop.estimatedShipDate}</p>
          )}
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery} id="drop-gallery">
        <div className="container">
          <div className={styles.galleryGrid}>
            {drop.media?.gallery?.length > 0 ? (
              drop.media.gallery.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={styles.galleryItem}>
                    <img src={img} alt={`${drop.name} - ${i + 1}`} />
                  </div>
                </ScrollReveal>
              ))
            ) : (
              [1, 2, 3].map(i => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={styles.galleryPlaceholder}>
                    <p>[GALLERY IMAGE {i}]</p>
                    <p className="caption">/media/drops/{drop.slug}/gallery-{i}.jpg</p>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* STORY */}
      {drop.story && (
        <section className={styles.story} id="drop-story">
          <div className="container container--narrow">
            <ScrollReveal>
              <span className="caption mb-24" style={{ display: 'block' }}>The Story</span>
              <p className={styles.storyText}>{drop.story}</p>
            </ScrollReveal>
            {drop.media?.behindTheScenes?.length > 0 && (
              <div className={styles.btsGrid}>
                {drop.media.behindTheScenes.map((img, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <img src={img} alt="Behind the scenes" className={styles.btsImg} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* PRODUCT DETAILS & PURCHASE */}
      <section className={styles.purchase} id="drop-purchase">
        <div className="container">
          <div className={styles.purchaseGrid}>
            {/* Left — image */}
            <div className={styles.purchaseImage}>
              {drop.media?.heroPoster ? (
                <img src={drop.media.heroPoster} alt={drop.name} />
              ) : (
                <div className={styles.purchaseImgPlaceholder}>[PRODUCT IMAGE]</div>
              )}
            </div>

            {/* Right — details */}
            <div className={styles.purchaseDetails}>
              <ScrollReveal>
                <span className={`badge ${getStatusBadgeClass(drop.status)} mb-16`}>{statusLabel}</span>
                <h2 className={styles.purchaseName}>{drop.name}</h2>
                <p className={styles.purchaseTagline}>{drop.tagline}</p>
                <p className={styles.purchasePrice}>{formatPrice(drop.price.PLN, 'PLN')}</p>

                <div className="divider mb-24" style={{ marginTop: 24 }} />

                <p className={styles.purchaseDesc}>{drop.description}</p>

                <div className="divider mb-24" style={{ marginTop: 24 }} />

                <SizeSelector sizes={drop.sizes} selected={selectedSize} onChange={setSelectedSize} />
                <ColorSelector colors={drop.colors} selected={selectedColor} onChange={setSelectedColor} />

                {/* Quantity */}
                <div className={styles.qtyRow}>
                  <label className="caption">Quantity</label>
                  <div className={styles.qtyControl}>
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)}>+</button>
                  </div>
                </div>

                {canPurchase ? (
                  <button
                    className={`btn btn--primary btn--full btn--lg ${styles.addBtn}`}
                    onClick={handleAdd}
                    id="add-to-cart"
                  >
                    {added ? '✓ ADDED TO CART' : drop.status === 'preorder' ? 'PREORDER' : 'ADD TO CART'}
                  </button>
                ) : (
                  <button className="btn btn--outline btn--full btn--lg" disabled style={{ opacity: 0.4 }}>
                    {statusLabel}
                  </button>
                )}

                {drop.estimatedShipDate && drop.status === 'preorder' && (
                  <p className={styles.shipNote}>Estimated shipping: {drop.estimatedShipDate}</p>
                )}

                <Link href="/size-guide" className={styles.sizeGuideLink}>Size Guide →</Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED DROPS */}
      {otherDrops.length > 0 && (
        <section className="section" id="related-drops">
          <div className="container">
            <ScrollReveal>
              <h2 className="heading-2 mb-48">More Drops</h2>
            </ScrollReveal>
            <div className={styles.relatedGrid}>
              {otherDrops.slice(0, 3).map((d, i) => (
                <ScrollReveal key={d.id} delay={i * 0.1}>
                  <Link href={`/drops/${d.slug}`} className={styles.relatedCard}>
                    <div className={styles.relatedImage}>
                      {d.media?.heroPoster ? (
                        <img src={d.media.heroPoster} alt={d.name} />
                      ) : (
                        <div className={styles.heroPlaceholder} style={{ aspectRatio: '3/4' }}>[IMAGE]</div>
                      )}
                    </div>
                    <p className={styles.relatedName}>{d.name}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
