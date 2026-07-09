'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { getCartCount } from '@/lib/cart';
import CartDrawer from './CartDrawer';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

export default function Header() {
  const cart = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const count = cart ? getCartCount(cart.items) : 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu or cart is open
  useEffect(() => {
    if (menuOpen || cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, cartOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="site-header">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} id="header-logo">
            HYPNAGOGIA
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} id="desktop-nav">
            <Link href="/drops/jaguar-jersey" className={styles.navLink}>Drop</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>

          {/* Right side */}
          <div className={styles.actions}>
            <button
              className={styles.cartBtn}
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              id="cart-toggle"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {count > 0 && <span className={styles.cartCount}>{count}</span>}
            </button>

            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              id="menu-toggle"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
