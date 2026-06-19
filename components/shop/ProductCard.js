import Link from 'next/link';
import { getStatusLabel, getStatusBadgeClass, formatPrice } from '@/lib/products';
import styles from './ProductCard.module.css';

export default function ProductCard({ drop }) {
  return (
    <Link href={`/drops/${drop.slug}`} className={styles.card} id={`product-${drop.id}`}>
      <div className={`${styles.image} ${drop.status === 'soldout' ? styles.soldout : ''}`}>
        {drop.media?.heroPoster ? (
          <img src={drop.media.heroPoster} alt={drop.name} />
        ) : (
          <div className={styles.placeholder}>[IMAGE]</div>
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
  );
}
