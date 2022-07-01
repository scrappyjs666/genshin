import { useAppDispatch } from 'Store/hooks/hooks'
import { googleSignIn } from 'Store/user/userSlice'
import styles from './GoogleAuth.module.scss'
import google from './img/google.svg'

export const GoogleAuth = () => {
  const arrInfo = [{ name: google }]
  const dispatch = useAppDispatch()

  const googleAuth = () => {
    dispatch(googleSignIn())
  }

  return (
    <div className={styles.GoogleAuth__wrap}>
      {arrInfo.map((el) => (
        <button
          key={el.name}
          type="button"
          onClick={googleAuth}
          className={styles.GoogleAuth__link}
        >
          <img src={el.name} alt={el.name} />
        </button>
      ))}
    </div>
  )
}
