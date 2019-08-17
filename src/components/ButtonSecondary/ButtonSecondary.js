import React from 'react';
import styles from './ButtonSecondary.module.scss';

function ButtonSecondary({ children, onClick, disabled }) {
  return (
    <div role="button" className={[styles.button, disabled && styles.disabled].join(' ')} onClick={disabled ? () => {} : onClick}>
      {children}
    </div>
  )
}

export default ButtonSecondary;
