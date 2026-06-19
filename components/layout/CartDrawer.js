'use client';

import Link from 'next/link';
import { useCart, useCartDispatch, getCartTotal, getCartCount } from '@/lib/cart';
import { formatPrice } from '@/lib/products';
import styles from './CartDrawer.module.css';

export default function CartDrawer({ open, onClose }) {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const items = cart?.items || [];
  const count = getCartCount(items);
  const total = getCartTotal(items, 'PLN');

  return (
    <>
      <div className={`${styles.backdrop} ${open ? styles.open : ''}`} onClick={onClose} />
      <div className={`${styles.drawer} ${open ? styles.open : ''}`} id="cart-drawer">
        <div className={styles.header}>
          <h3 className={styles.title}>Cart ({count})</h3>
          <button className={styles.close} onClick={onClose} aria-label="Close cart" id="cart-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <p>YOUR CART IS EMPTY</p>
              <button className="btn btn--outline btn--sm" onClick={onClose}>Continue Browsing</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.key} className={styles.item}>
                <div className={styles.itemImage}>
                  {/* Placeholder for product thumbnail */}
                  <div className={styles.imagePlaceholder} />
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemMeta}>
                    {item.size} {item.colorName && `/ ${item.colorName}`}
                  </p>
                  <div className={styles.itemActions}>
                    <div className={styles.quantity}>
                      <button
                        onClick={() => dispatch({ type: 'UPDATE_QUANTITY', key: item.key, quantity: item.quantity - 1 })}
                        disabled={item.quantity <= 1}
                      >−</button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch({ type: 'UPDATE_QUANTITY', key: item.key, quantity: item.quantity + 1 })}
                      >+</button>
                    </div>
                    <button
                      className={styles.remove}
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', key: item.key })}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className={styles.itemPrice}>{formatPrice(item.price.PLN, 'PLN')}</p>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <span>{formatPrice(total, 'PLN')}</span>
            </div>
            <Link href="/checkout" className="btn btn--primary btn--full" onClick={onClose} id="checkout-btn">
              CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
