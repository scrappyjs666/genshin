import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import styles from './Account.module.scss'

export const Account = () => {
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)

  const isLogin = (
    <Link className={styles.Account__link} to="/">
      Sign in profile
    </Link>
  )

  const isSignUp = (
    <Link className={styles.Account__link} to="/Profile">
      Welcome {user?.email}
    </Link>
  )

  return (
    <>
      {loading ? (
        <div className={styles.Account__Loading}>
          Loading....
          <div className={styles['lds-dual-ring']} />
        </div>
      ) : (
        <div className={styles.Account__text}>{user ? isSignUp : isLogin}</div>
      )}
    </>
  )
}
