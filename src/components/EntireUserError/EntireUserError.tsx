import cn from 'classnames'
import { MouseEventHandler } from 'react'
import { useAppSelector } from 'Store/hooks/hooks'
import styles from './EntireUserError.module.scss'
import sadimage from './img/sad.png'

interface IEntireUser {
  fn?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const EntireUserError: React.FC<IEntireUser> = () => {
  const { status } = useAppSelector((state) => state.userSlice)
  return (
    <>
      <div
        className={
          status === 'error'
            ? cn(styles.EntireUserError__wrap, styles.modal__active)
            : styles.EntireUserError__wrap
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.EntireUserError__container}
        >
          <img src={sadimage} alt="sadimage" />
          <div className={styles.EntireUserError__text}>
            Unfortunately, we could not find such an account please try again
          </div>
          <button className={styles.EntireUserError__button}>Try Again</button>
        </div>
      </div>
    </>
  )
}

export default EntireUserError
