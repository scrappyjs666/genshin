import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BasketButton.module.scss'

export const Basket: React.FC = () => {
  return (
    <>
      <Link className={styles.basket} to="/BasketPage">
        GO
        <br />
        favorites
      </Link>
    </>
  )
}
