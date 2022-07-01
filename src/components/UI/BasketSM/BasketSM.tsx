import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { IoBagCheckOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styles from './BasketSM.module.scss'

const BasketSM = () => {
  const auth = getAuth()
  const [user] = useAuthState(auth)

  return (
    <Link to={user ? '/BasketPage' : '/'}>
      <button className={styles.BasketSM__button}>
        <IoBagCheckOutline />
      </button>
    </Link>
  )
}

export default BasketSM
