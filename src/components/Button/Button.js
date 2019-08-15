import React from 'react';
import styles from './Button.module.scss';

function Button(props) {
  return (
    <div role="button" className={styles.button} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button;
