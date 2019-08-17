import React from 'react';
import styles from './Card.module.scss';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

function Card({ children }) {
  return (
    <div className={styles.card}>
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