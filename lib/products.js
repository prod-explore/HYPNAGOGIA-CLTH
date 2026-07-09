import { query } from './db.js';
// Importujemy JSON jako fallback na wypadek braku połączenia z bazą (np. podczas lokalnego dewelopmentu)
import dropsFallback from '../data/drops.json' with { type: "json" };

export async function getAllDrops() {
  try {
    const { rows } = await query('SELECT * FROM drops ORDER BY created_at DESC');
    return rows;
  } catch (err) {
    console.warn('DB Error - using JSON fallback for getAllDrops');
    return dropsFallback;
  }
}

export async function getFeaturedDrop() {
  try {
    const { rows } = await query("SELECT * FROM drops WHERE featured = true AND status != 'soldout' LIMIT 1");
    if (rows.length > 0) return rows[0];
    
    const { rows: all } = await query('SELECT * FROM drops ORDER BY created_at DESC LIMIT 1');
    return all[0] || null;
  } catch (err) {
    console.warn('DB Error - using JSON fallback for getFeaturedDrop');
    return dropsFallback.find(d => d.featured && d.status !== 'soldout') || dropsFallback[0];
  }
}

export async function getDropBySlug(slug) {
  try {
    const { rows } = await query('SELECT * FROM drops WHERE slug = $1 LIMIT 1', [slug]);
    return rows[0] || null;
  } catch (err) {
    console.warn(`DB Error - using JSON fallback for getDropBySlug (${slug})`);
    return dropsFallback.find(d => d.slug === slug) || null;
  }
}

export async function getDropsByStatus(status) {
  try {
    const { rows } = await query('SELECT * FROM drops WHERE status = $1', [status]);
    return rows;
  } catch (err) {
    console.warn('DB Error - using JSON fallback for getDropsByStatus');
    return dropsFallback.filter(d => d.status === status);
  }
}

export async function getAvailableDrops() {
  try {
    const { rows } = await query("SELECT * FROM drops WHERE status IN ('preorder', 'available')");
    return rows;
  } catch (err) {
    console.warn('DB Error - using JSON fallback for getAvailableDrops');
    return dropsFallback.filter(d => d.status === 'preorder' || d.status === 'available');
  }
}

export async function getArchiveDrops() {
  try {
    const { rows } = await query("SELECT * FROM drops WHERE status = 'soldout'");
    return rows;
  } catch (err) {
    console.warn('DB Error - using JSON fallback for getArchiveDrops');
    return dropsFallback.filter(d => d.status === 'soldout');
  }
}

export async function getAllSlugs() {
  try {
    const { rows } = await query('SELECT slug FROM drops');
    return rows.map(r => r.slug);
  } catch (err) {
    console.warn('DB Error - using JSON fallback for getAllSlugs');
    return dropsFallback.map(d => d.slug);
  }
}


