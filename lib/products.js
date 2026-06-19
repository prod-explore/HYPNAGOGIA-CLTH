import drops from '@/data/drops.json';

export function getAllDrops() {
  return drops;
}

export function getFeaturedDrop() {
  return drops.find(d => d.featured && d.status !== 'soldout') || drops[0];
}

export function getDropBySlug(slug) {
  return drops.find(d => d.slug === slug) || null;
}

export function getDropsByStatus(status) {
  return drops.filter(d => d.status === status);
}

export function getAvailableDrops() {
  return drops.filter(d => d.status === 'preorder' || d.status === 'available');
}

export function getArchiveDrops() {
  return drops.filter(d => d.status === 'soldout');
}

export function getAllSlugs() {
  return drops.map(d => d.slug);
}

export function getPrice(drop, currency = 'PLN') {
  return drop.price[currency] || drop.price.PLN;
}

export function formatPrice(amount, currency = 'PLN') {
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
  return labels[status] || status.toUpperCase();
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
