import React from 'react';
import styles from './CardFooter.module.scss';

function CardFooter({ children, loading }) {
  return (
    <div className={styles.cardFooter}>
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

export default CardFooter;
