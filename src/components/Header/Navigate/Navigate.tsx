import { Link } from 'react-router-dom'
import { Sound } from '../Sound/Sound'
import styles from './Navigate.module.scss'
import { FilterBtn } from 'components/FilterBtn/FilterBtn'

export const Navigate = () => {
  return (
    <>
      <div className={styles.Navigate__wrapp}>
        <Link className={styles.Navigate__link} to="HomePage">
          <FilterBtn name="HomePage" />
        </Link>
        <Sound />
        <Link className={styles.Navigate__link} to="/">
          <FilterBtn name="LoginPage" />
        </Link>
      </div>
    </>
  )
}