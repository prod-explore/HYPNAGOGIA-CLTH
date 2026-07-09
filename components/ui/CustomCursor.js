'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      // Instant movement (no delay/lerping)
      cursor.style.transform = `translate(${e.clientX - 24}px, ${e.clientY - 24}px)`;
      // Make sure it's visible when moving inside
      if (cursor.style.opacity === '0') {
        cursor.style.opacity = '1';
      }
    };

    const onLeave = () => {
      cursor.style.opacity = '0';
    };

    const onEnter = () => {
      cursor.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <div ref={cursorRef} style={{
      position: 'fixed', top: 0, left: 0, width: 48, height: 48,
      pointerEvents: 'none', zIndex: 'var(--z-cursor)',
      mixBlendMode: 'difference',
      opacity: 0, // Hidden initially until first movement
      transition: 'opacity 0.2s ease-out', // Smooth fade when entering/leaving window
    }}>
      <video
        src="/media/pulsr-cursor.webm"
        autoPlay loop muted playsInline
        style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
      />
    </div>
  );
}
