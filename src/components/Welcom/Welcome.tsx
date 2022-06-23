import { useAuth } from 'hooks/use-auth'
import { useAppSelector } from 'Store/hooks/hooks'
import gif from './img/5d55575548a30ca21fcdb50285b9c694_6465808929343059713.gif'
import styles from './Welcome.module.scss'

export const Welcome = () => {
  const { isAuth } = useAuth()
  const email = useAppSelector((state) => state.userSlice.email)
  return (
    <>
      <div className={styles.Welcome__Wrap}>
        <div className={styles.Welcome__text} />
        Welcome {`${email}`}
        <div className={styles.Welcom__descr}>
          Now your personal account is available for you in the upper right
          corner
        </div>
        <img src={gif} alt="paimon" className={styles.Welcome__gif} />
      </div>
    </>
  )
}
