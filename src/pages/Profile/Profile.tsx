import { Button } from 'components'
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from '../../components/UI/Loader/Loader'
import emptyPhoto from './img/emptyPhotoProfile.jpg'
import styles from './Profile.module.scss'

const Profile = () => {
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  if (loading) return <Loader />

  const logOut = () => {
    signOut(auth)
    navigate('/')
  }

  return (
    <div className={styles.Profile__wrap}>
      <img className={styles.EmptyPhoto} src={emptyPhoto} alt={emptyPhoto} />
      <div className={styles.Profile__info}>
        <div className={styles.Profile__text}>
          Account creation: {user?.metadata.creationTime}
        </div>
        <div className={styles.Profile__text}>
          Last session: {user?.metadata.lastSignInTime}
        </div>
        <Link className={styles.Profile__link} to="/BasketPage">
          <Button name="Basket" />
        </Link>
        <Link className={styles.Profile__link} to="/">
          <Button fn={() => logOut()} name="Logout" />
        </Link>
      </div>
    </div>
  )
}

export default Profile
