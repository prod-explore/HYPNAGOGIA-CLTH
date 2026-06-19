import styles from './Marquee.module.css';

export default function Marquee({ text = 'HYPNAGOGIA • DROP 001 • PREORDER OPEN • LIMITED EDITION • ' }) {
  const repeated = text.repeat(8);
  return (
    <div className={styles.container}>
      <div className={styles.track}>
        <span className={styles.text}>{repeated}</span>
        <span className={styles.text} aria-hidden="true">{repeated}</span>
      </div>
    </div>
  );
}
