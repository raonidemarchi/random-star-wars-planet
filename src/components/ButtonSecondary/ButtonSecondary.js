import React from 'react';
import styles from './ButtonSecondary.module.scss';

function ButtonSecondary({ children, onClick }) {
  return (
    <div role="button" className={styles.button} onClick={onClick}>
      {children}
    </div>
  )
}

export default ButtonSecondary;
