import React from 'react';
import styles from './CardTitle.module.scss';

function CardTitle({ children, loading }) {
  return (
    <div className={styles.cardTitle}>
      {
        loading ?
          <>
            <div className={styles.placeholder}>
              <div className={styles.animatedBackground}></div>
            </div>
          </>
        :
          <>
            {children}
          </>
      }
    </div>
  );
}

export default CardTitle;
