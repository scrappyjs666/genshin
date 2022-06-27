import { Button } from 'components/UI/Button/Button'
import { Sound } from 'components/UI/Sound/Sound'
import { Link } from 'react-router-dom'
import styles from './Navigate.module.scss'

export const Navigate = () => {
  return (
    <>
      <div className={styles.Navigate__wrapp}>
        <Link className={styles.Navigate__link} to="HomePage">
          <Button name="HomePage" />
        </Link>
        <Sound />
        <Link className={styles.Navigate__link} to="/">
          <Button name="LoginPage" />
        </Link>
      </div>
    </>
  )
}
