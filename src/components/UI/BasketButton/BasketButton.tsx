import { Link } from 'react-router-dom'
import styles from './BasketButton.module.scss'

export const Basket = () => {
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
