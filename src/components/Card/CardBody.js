import React from 'react';
import styles from './CardBody.module.scss';
import PlaceholderLoader from '../PlaceholderLoader/PlaceholderLoader';

function CardBody({ children, loading }) {
  return (
    <div className={styles.cardBody}>
      {
        loading ?
          <>
            <PlaceholderLoader height="16px" maxWidth="90%" marginBottom="10px" />
            <PlaceholderLoader height="16px" maxWidth="50%" marginBottom="10px" />
            <PlaceholderLoader height="16px" maxWidth="70%" />
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
