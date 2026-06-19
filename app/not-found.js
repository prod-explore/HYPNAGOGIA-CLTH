import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="text-center">
        <h1 className="display-massive mb-16" style={{ color: 'var(--text-muted)' }}>404</h1>
        <p className="caption mb-32">Page not found</p>
        <Link href="/" className="btn btn--outline">Back to Home</Link>
      </div>
    </div>
  );
}
