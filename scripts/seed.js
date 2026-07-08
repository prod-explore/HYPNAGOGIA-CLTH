import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { query } from '../lib/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seed() {
  console.log('Seeding database...');
  try {
    // Read JSON files
    const dropsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/drops.json'), 'utf8'));
    const shippingData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/shipping.json'), 'utf8'));

    // Insert Drops
    for (const drop of dropsData) {
      await query(`
        INSERT INTO drops (
          id, slug, name, tagline, description, story, price, status, 
          preorder_deadline, estimated_ship_date, category, sizes, colors, media, size_guide, featured
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        ON CONFLICT (id) DO NOTHING
      `, [
        drop.id, drop.slug, drop.name, drop.tagline, drop.description, drop.story,
        JSON.stringify(drop.price), drop.status,
        drop.preorderDeadline || null, drop.estimatedShipDate || null, drop.category,
        JSON.stringify(drop.sizes), JSON.stringify(drop.colors), JSON.stringify(drop.media),
        JSON.stringify(drop.sizeGuide), drop.featured
      ]);
      console.log(`Inserted drop: ${drop.id}`);
    }

    // Insert Shipping Methods
    for (const method of shippingData.methods) {
      await query(`
        INSERT INTO shipping_methods (id, name, description, price, estimated_days)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (id) DO NOTHING
      `, [
        method.id, method.name, method.description, JSON.stringify(method.price), method.estimatedDays
      ]);
      console.log(`Inserted shipping method: ${method.id}`);
    }

    // Insert Shipping Settings
    await query(`
      INSERT INTO shipping_settings (id, free_shipping_threshold)
      VALUES (1, $1)
      ON CONFLICT (id) DO NOTHING
    `, [JSON.stringify(shippingData.freeShippingThreshold)]);
    console.log(`Inserted shipping settings`);

    console.log('Seeding completed successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seed();
