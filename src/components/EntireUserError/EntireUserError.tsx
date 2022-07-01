import cn from 'classnames'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'Store/hooks/hooks'
import { changeErrorStatus } from 'Store/user/userSlice'
import styles from './EntireUserError.module.scss'
import sadimage from './img/sad.png'

export const EntireUserError = () => {
  const dispatch = useAppDispatch()
  const { status, textError } = useAppSelector((state) => state.userSlice)

  const canselError = () => {
    dispatch(changeErrorStatus())
  }

  useEffect(() => {
    window.addEventListener('click', canselError)
    return () => {
      window.removeEventListener('click', canselError)
    }
  })

  return (
    <div
      className={
        status === 'error'
          ? cn(styles.EntireUserError__wrap, styles.modal__active)
          : styles.EntireUserError__wrap
      }
    >
      <button
        onClick={(e) => e.stopPropagation()}
        className={styles.EntireUserError__container}
      >
        <img src={sadimage} alt="sadimage" />
        <div className={styles.EntireUserError__text}>{textError}</div>
        <button
          onClick={() => dispatch(changeErrorStatus())}
          className={styles.EntireUserError__button}
        >
          Try Again
        </button>
      </button>
    </div>
  )
}

export default EntireUserError
