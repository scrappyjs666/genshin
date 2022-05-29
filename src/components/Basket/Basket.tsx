import styles from './Basket.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const  Basket: React.FC = () => {
  return(
    <>
      <Link className={styles.basket} to="/HeroPage">
        GO<br/>favorites
      </Link>
    </>
  )
}

export default Basket;