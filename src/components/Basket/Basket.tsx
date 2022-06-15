import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Basket.module.scss'

const Basket: React.FC = () => {
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

export default Basket
