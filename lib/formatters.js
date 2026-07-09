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
