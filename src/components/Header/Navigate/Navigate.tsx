import BtnHeader from 'components/BtnHeader'
import { Link } from 'react-router-dom'
import styles from './Navigate.module.scss'
import Sound from '../Sound'

const Navigate = () => {
  return (
    <>
      <div className={styles.Navigate__wrapp}>
        <Link className={styles.Navigate__link} to="HomePage">
          <BtnHeader name="HomePage" fn={undefined} />
        </Link>
        <Sound />
        <Link className={styles.Navigate__link} to="/">
          <BtnHeader name="LoginPage" fn={undefined} />
        </Link>
      </div>
    </>
  )
}

export default Navigate
