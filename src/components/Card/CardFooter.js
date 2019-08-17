import React from 'react';
import styles from './CardFooter.module.scss';
import PlaceholderLoader from '../PlaceholderLoader/PlaceholderLoader';

function CardFooter({ children, loading }) {
  return (
    <div className={styles.cardFooter}>
      {
        loading ?
          <>
            <PlaceholderLoader height="14px" maxWidth="50%" />
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
