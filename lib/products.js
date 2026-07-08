import { query } from './db.js';

export async function getAllDrops() {
  try {
    const { rows } = await query('SELECT * FROM drops ORDER BY created_at DESC');
    return rows;
  } catch (err) {
    console.error('Database query error:', err);
    return [];
  }
}

export async function getFeaturedDrop() {
  try {
    const { rows } = await query("SELECT * FROM drops WHERE featured = true AND status != 'soldout' LIMIT 1");
    if (rows.length > 0) return rows[0];
    
    // Fallback
    const { rows: all } = await query('SELECT * FROM drops ORDER BY created_at DESC LIMIT 1');
    return all[0] || null;
  } catch (err) {
    console.error('Database query error:', err);
    return null;
  }
}

export async function getDropBySlug(slug) {
  try {
    const { rows } = await query('SELECT * FROM drops WHERE slug = $1 LIMIT 1', [slug]);
    return rows[0] || null;
  } catch (err) {
    console.error('Database query error:', err);
    return null;
  }
}

export async function getDropsByStatus(status) {
  try {
    const { rows } = await query('SELECT * FROM drops WHERE status = $1', [status]);
    return rows;
  } catch (err) {
    console.error('Database query error:', err);
    return [];
  }
}

export async function getAvailableDrops() {
  try {
    const { rows } = await query("SELECT * FROM drops WHERE status IN ('preorder', 'available')");
    return rows;
  } catch (err) {
    console.error('Database query error:', err);
    return [];
  }
}

export async function getArchiveDrops() {
  try {
    const { rows } = await query("SELECT * FROM drops WHERE status = 'soldout'");
    return rows;
  } catch (err) {
    console.error('Database query error:', err);
    return [];
  }
}

export async function getAllSlugs() {
  try {
    const { rows } = await query('SELECT slug FROM drops');
    return rows.map(r => r.slug);
  } catch (err) {
    console.error('Database query error:', err);
    return [];
  }
}

// Client-safe formatters and helpers
export function getPrice(drop, currency = 'PLN') {
  if (!drop || !drop.price) return 0;
  return drop.price[currency] || drop.price.PLN;
}

export function formatPrice(amount, currency = 'PLN') {
  if (amount === undefined || amount === null) return '';
  const formatters = {
    PLN: new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }),
    EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
    USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
  };
  return (formatters[currency] || formatters.PLN).format(amount);
}

export function getStatusLabel(status) {
  const labels = {
    preorder: 'PREORDER',
    available: 'AVAILABLE',
    soldout: 'SOLD OUT',
    coming: 'COMING SOON',
  };
  return labels[status] || (status ? status.toUpperCase() : '');
}

export function getStatusBadgeClass(status) {
  const classes = {
    preorder: 'badge--preorder',
    available: 'badge--available',
    soldout: 'badge--soldout',
    coming: 'badge--preorder',
  };
  return classes[status] || 'badge--preorder';
}
