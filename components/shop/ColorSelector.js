'use client';
import styles from './ColorSelector.module.css';

export default function ColorSelector({ colors, selected, onChange }) {
  if (!colors || colors.length <= 1) return null;
  return (
    <div className={styles.wrap}>
      <label className={styles.label}>Color — {selected?.name || ''}</label>
      <div className={styles.colors}>
        {colors.map(c => (
          <button
            key={c.name}
            className={`${styles.swatch} ${selected?.name === c.name ? styles.active : ''}`}
            style={{ backgroundColor: c.hex }}
            onClick={() => onChange(c)}
            title={c.name}
          />
        ))}
      </div>
    </div>
  );
}
