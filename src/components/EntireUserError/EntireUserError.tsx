import cn from 'classnames'
import { MouseEventHandler } from 'react'
import styles from './EntireUserError.module.scss'

interface IEntireUser {
  fn?: MouseEventHandler<HTMLButtonElement> | undefined
  loginError: any
  setLoginError: any
}

const EntireUserError: React.FC<IEntireUser> = ({
  loginError,
  setLoginError,
}) => {
  return (
    <>
      <div
        className={
          loginError
            ? cn(styles.EntireUserError__wrap, styles.modal__active)
            : styles.EntireUserError__wrap
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.EntireUserError__container}
        >
          <div className={styles.EntireUserError__text}>
            Unfortunately, we could not find such an account please try again
          </div>
          <button
            onClick={() => setLoginError(false)}
            className={styles.EntireUserError__button}
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  )
}

export default EntireUserError
