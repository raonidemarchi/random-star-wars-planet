import React from 'react';
import styles from './CardBody.module.scss';

function CardBody({ children, loading }) {
  return (
    <div className={styles.cardBody}>
      {
        loading ?
          <>
            <div className={styles.placeholder1}>
              <div className={styles.animatedBackground}></div>
            </div>

            <div className={styles.placeholder2}>
              <div className={styles.animatedBackground}></div>
            </div>

            <div className={styles.placeholder3}>
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

export default CardBody;
