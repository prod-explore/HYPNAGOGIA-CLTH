const INPOST_API_URL = process.env.INPOST_API_URL || 'https://api-shipx-pl.easypack24.net/v1';
const INPOST_TOKEN = process.env.INPOST_API_TOKEN;
const INPOST_ORG_ID = process.env.INPOST_ORGANIZATION_ID;

async function inpostFetch(endpoint, options = {}) {
  const res = await fetch(`${INPOST_API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${INPOST_TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`InPost API error: ${res.status} ${error}`);
  }

  return res.json();
}

export async function createShipment({ receiverName, receiverEmail, receiverPhone, targetPoint, size = 'A' }) {
  return inpostFetch(`/organizations/${INPOST_ORG_ID}/shipments`, {
    method: 'POST',
    body: JSON.stringify({
      receiver: {
        name: receiverName,
        email: receiverEmail,
        phone: receiverPhone,
      },
      parcels: [{ template: size }],
      service: 'inpost_locker_standard',
      custom_attributes: {
        target_point: targetPoint,
        sending_method: 'dispatch_order',
      },
    }),
  });
}

export async function createCourierShipment({ receiverName, receiverEmail, receiverPhone, address }) {
  return inpostFetch(`/organizations/${INPOST_ORG_ID}/shipments`, {
    method: 'POST',
    body: JSON.stringify({
      receiver: {
        name: receiverName,
        email: receiverEmail,
        phone: receiverPhone,
        address: {
          street: address.street,
          building_number: address.building,
          city: address.city,
          post_code: address.postCode,
          country_code: 'PL',
        },
      },
      parcels: [{ template: 'small' }],
      service: 'inpost_courier_standard',
    }),
  });
}

export async function getShipment(shipmentId) {
  return inpostFetch(`/shipments/${shipmentId}`);
}

export async function getLabel(shipmentId, format = 'pdf') {
  const res = await fetch(`${INPOST_API_URL}/shipments/${shipmentId}/label`, {
    headers: {
      'Authorization': `Bearer ${INPOST_TOKEN}`,
      'Accept': format === 'pdf' ? 'application/pdf' : 'application/zpl',
    },
  });

  if (!res.ok) throw new Error('Failed to get label');
  return res;
}
