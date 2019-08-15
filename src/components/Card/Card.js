import React from 'react';
import styles from './Card.module.scss';

function Card({ children }) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

function Title({ children }) {
  return (
    <div className={styles.cardTitle}>
      {children}
    </div>
  );
}

function Body({ children }) {
  return (
    <div className={styles.cardBody}>
      {children}
    </div>
  );
}

function Footer({ children }) {
  return (
    <div className={styles.cardFooter}>
      {children}
    </div>
  );
}

export default Card;
export {
  Title,
  Body,
  Footer
}