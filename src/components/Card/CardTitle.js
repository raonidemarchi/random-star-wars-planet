import React from 'react';
import styles from './CardTitle.module.scss';
import PlaceholderLoader from '../PlaceholderLoader/PlaceholderLoader';

function CardTitle({ children, loading }) {
  return (
    <div className={styles.cardTitle}>
      {
        loading ?
          <>
            <PlaceholderLoader height="50px" maxWidth="90%" />
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
