import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import gif from './img/5d55575548a30ca21fcdb50285b9c694_6465808929343059713.gif'
import styles from './Welcome.module.scss'

export const Welcome = () => {
  const auth = getAuth()
  const [user] = useAuthState(auth)

  return (
    <div className={styles.Welcome__Wrap}>
      <div className={styles.Welcome__text} />
      Welcome {`${user?.email}`}
      <div className={styles.Welcom__descr}>
        Now your personal account is available for you
      </div>
      <img src={gif} alt="paimon" className={styles.Welcome__gif} />
    </div>
  )
}
