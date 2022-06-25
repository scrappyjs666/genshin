import React from 'react'
import { useAppDispatch } from 'Store/hooks/hooks'
import { googleSignIn } from '../../Store/user/userSlice'
import styles from './AutoRegistration.module.scss'
import google from './img/google.svg'

interface IAutoRegistration {
  googleSignIn: () => void
}

export const AutoRegistration: React.FC<IAutoRegistration> = () => {
  const arrInfo = [{ name: google }]
  const dispatch = useAppDispatch()
  return (
    <>
      <div className={styles.AutoRegistration__wrap}>
        {arrInfo.map((el) => (
          <button
            key={el.name}
            type="button"
            onClick={() => dispatch(googleSignIn())}
            className={styles.AutoRegistration__link}
          >
            <img src={el.name} alt={el.name} />
          </button>
        ))}
      </div>
    </>
  )
}
