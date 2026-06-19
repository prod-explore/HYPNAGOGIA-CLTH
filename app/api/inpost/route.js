import { NextResponse } from 'next/server';
import { createShipment, createCourierShipment } from '@/lib/inpost';

export async function POST(req) {
  try {
    const body = await req.json();
    const { method, receiverName, receiverEmail, receiverPhone, targetPoint, address } = body;

    let shipment;
    if (method === 'paczkomat') {
      shipment = await createShipment({ receiverName, receiverEmail, receiverPhone, targetPoint });
    } else {
      shipment = await createCourierShipment({ receiverName, receiverEmail, receiverPhone, address });
    }

    return NextResponse.json({ success: true, shipment });
  } catch (error) {
    console.error('InPost API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
