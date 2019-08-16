import React from 'react';
import styles from './Card.module.scss';

function Card({ children }) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

function CardTitle({ children }) {
  return (
    <div className={styles.cardTitle}>
      {children}
    </div>
  );
}

function CardBody({ children }) {
  return (
    <div className={styles.cardBody}>
      {children}
    </div>
  );
}

function CardFooter({ children }) {
  return (
    <div className={styles.cardFooter}>
      {children}
    </div>
  );
}

export default Card;
export {
  CardTitle,
  CardBody,
  CardFooter
}