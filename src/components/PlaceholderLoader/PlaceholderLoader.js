import React from 'react';
import styles from './PlaceholderLoader.module.scss';

function PlaceholderLoader({ height = '14px', maxWidth = '100%', marginBottom = '0' }) {
  return (
    <div className={styles.placeholder} style={{ minHeight: height, maxWidth, marginBottom }}>
      <div className={styles.animatedBackground} style={{ height }}></div>
    </div>
  );
}

export default PlaceholderLoader;
