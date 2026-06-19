'use client';
import { useState } from 'react';
import styles from './SizeSelector.module.css';

export default function SizeSelector({ sizes, selected, onChange }) {
  return (
    <div className={styles.wrap}>
      <label className={styles.label}>Size</label>
      <div className={styles.sizes}>
        {sizes.map(size => (
          <button
            key={size}
            className={`${styles.size} ${selected === size ? styles.active : ''}`}
            onClick={() => onChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
