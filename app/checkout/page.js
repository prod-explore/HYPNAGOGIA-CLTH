'use client';

import { useCart, getCartTotal, getCartCount } from '@/lib/cart';
import { formatPrice } from '@/lib/products';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useState } from 'react';

export default function CheckoutPage() {
  const cart = useCart();
  const items = cart?.items || [];
  const total = getCartTotal(items, 'PLN');
  const [step, setStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState('paczkomat');

  if (items.length === 0) {
    return (
      <div style={{ paddingTop: 'calc(var(--header-height) + 80px)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <h1 className="heading-2 mb-16">Your cart is empty</h1>
          <a href="/archive" className="btn btn--outline">Browse Products</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <ScrollReveal>
            <h1 className="display-medium mb-48">Checkout</h1>
          </ScrollReveal>

          {/* Order summary */}
          <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: 32, marginBottom: 40 }}>
            <h2 className="caption mb-24">Order Summary</h2>
            {items.map(item => (
              <div key={item.key} className="flex justify-between mb-16">
                <span>{item.name} ({item.size}) × {item.quantity}</span>
                <span>{formatPrice(item.price.PLN * item.quantity, 'PLN')}</span>
              </div>
            ))}
            <div className="divider mb-16" />
            <div className="flex justify-between" style={{ fontWeight: 600 }}>
              <span>Total</span>
              <span>{formatPrice(total, 'PLN')}</span>
            </div>
          </div>

          {/* Contact */}
          <div style={{ marginBottom: 40 }}>
            <h2 className="caption mb-24">Contact Information</h2>
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input type="text" className="input" placeholder="[YOUR NAME]" id="checkout-name" />
            </div>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input type="email" className="input" placeholder="your@email.com" id="checkout-email" />
            </div>
            <div className="input-group">
              <label className="input-label">Phone</label>
              <input type="tel" className="input" placeholder="+48..." id="checkout-phone" />
            </div>
          </div>

          {/* Shipping */}
          <div style={{ marginBottom: 40 }}>
            <h2 className="caption mb-24">Shipping Method</h2>
            <div style={{ display: 'flex', gap: 16 }}>
              <button
                className={`btn ${shippingMethod === 'paczkomat' ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => setShippingMethod('paczkomat')}
              >
                InPost Paczkomat — 12,99 zł
              </button>
              <button
                className={`btn ${shippingMethod === 'courier' ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => setShippingMethod('courier')}
              >
                InPost Kurier — 18,99 zł
              </button>
            </div>

            {shippingMethod === 'paczkomat' && (
              <div style={{ marginTop: 24, padding: 40, border: '1px solid var(--border-subtle)', background: 'var(--black-card)', textAlign: 'center' }}>
                <p className="caption mb-8">[INPOST GEOWIDGET PLACEHOLDER]</p>
                <p className="text-secondary body-small">InPost parcel locker map will load here when API token is configured.</p>
              </div>
            )}

            {shippingMethod === 'courier' && (
              <div style={{ marginTop: 24 }}>
                <div className="input-group">
                  <label className="input-label">Street & Number</label>
                  <input type="text" className="input" placeholder="[STREET]" id="checkout-street" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="input-group">
                    <label className="input-label">City</label>
                    <input type="text" className="input" placeholder="[CITY]" id="checkout-city" />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Post Code</label>
                    <input type="text" className="input" placeholder="00-000" id="checkout-postcode" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Payment CTA */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 32 }}>
            <p className="text-secondary body-small mb-24">
              [STRIPE EMBEDDED CHECKOUT PLACEHOLDER] — Payment form will appear here when Stripe keys are configured.
            </p>
            <button className="btn btn--primary btn--full btn--lg" id="pay-btn">
              PAY {formatPrice(total + (shippingMethod === 'paczkomat' ? 12.99 : 18.99), 'PLN')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
