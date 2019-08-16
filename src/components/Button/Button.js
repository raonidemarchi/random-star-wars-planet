import React from 'react';
import styles from './Button.module.scss';

function Button({ children, onClick }) {
  return (
    <div role="button" className={styles.button} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button;
