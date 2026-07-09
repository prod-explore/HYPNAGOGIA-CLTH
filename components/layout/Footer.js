import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Shop Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Shop</h4>
            <Link href="/archive" className={styles.link}>All Products</Link>
            <Link href="/shipping" className={styles.link}>Shipping</Link>
            <Link href="/size-guide" className={styles.link}>Size Guide</Link>
            <Link href="/faq" className={styles.link}>FAQ</Link>
          </div>

          {/* Info Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Info</h4>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <Link href="/lookbook" className={styles.link}>Lookbook</Link>
          </div>

          {/* Legal Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <Link href="/terms" className={styles.link}>Terms & Conditions</Link>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/returns" className={styles.link}>Returns & Refunds</Link>
          </div>

          {/* Connect Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Connect</h4>
            <a href="[PLACEHOLDER]" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
            <a href="[PLACEHOLDER]" target="_blank" rel="noopener noreferrer" className={styles.link}>TikTok</a>
            <a href="mailto:hello@pulsr.pl" className={styles.link}>Email</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <p className={styles.newsletterLabel}>Get notified about the next drop</p>
          <form className={styles.newsletterForm} action="#">
            <input
              type="email"
              placeholder="your@email.com"
              className={styles.newsletterInput}
              id="footer-newsletter-email"
            />
            <button type="submit" className={styles.newsletterBtn} id="footer-newsletter-submit">→</button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} PULSR. [PLACEHOLDER: Legal Entity Name]</p>
          <div className={styles.badges}>
            <span className={styles.badge}>Stripe</span>
            <span className={styles.badge}>Visa</span>
            <span className={styles.badge}>Mastercard</span>
            <span className={styles.badge}>BLIK</span>
            <span className={styles.badge}>InPost</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
