'use client';

import Link from 'next/link';
import styles from './MobileMenu.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/archive', label: 'All Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
  { href: '/shipping', label: 'Shipping' },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`${styles.menu} ${open ? styles.open : ''}`} id="mobile-menu">
      <nav className={styles.nav}>
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.link}
            style={{ transitionDelay: open ? `${i * 0.06}s` : '0s' }}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.socials}>
          <a href="[PLACEHOLDER]" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="[PLACEHOLDER]" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
        <p className={styles.email}>{process.env.NEXT_PUBLIC_STORE_EMAIL || 'hello@pulsr.pl'}</p>
      </div>
    </div>
  );
}
