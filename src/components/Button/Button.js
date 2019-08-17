import React from 'react';
import styles from './Button.module.scss';

function Button({ children, onClick, disabled }) {
  return (
    <div role="button" className={[styles.button, disabled && styles.isLoading].join(' ')} onClick={disabled ? () => {} : onClick}>
      {children}
    </div>
  )
}

export default Button;
