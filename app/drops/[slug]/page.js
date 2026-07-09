import { getDropBySlug, getAllDrops, getAllSlugs } from '@/lib/products';
import { notFound } from 'next/navigation';
import DropPageClient from './DropPageClient';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const drop = await getDropBySlug(slug);
  if (!drop) return { title: 'Not Found — PULSR' };
  return {
    title: `${drop.name} — PULSR`,
    description: drop.description,
  };
}

export default async function DropPage({ params }) {
  const { slug } = await params;
  const drop = await getDropBySlug(slug);
  if (!drop) notFound();

  const allDrops = await getAllDrops();
  const otherDrops = allDrops.filter(d => d.id !== drop.id);

  return <DropPageClient drop={drop} otherDrops={otherDrops} />;
}
