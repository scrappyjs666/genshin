import React from 'react'
import styles from './AutoRegistration.module.scss'
import google from './img/google.svg'

interface IAutoRegistration {
  loginGoogle: () => void
}

export const AutoRegistration: React.FC<IAutoRegistration> = ({ loginGoogle }) => {
  const arrInfo = [{ name: google }]

  return (
    <>
      <div className={styles.AutoRegistration__wrap}>
        {arrInfo.map((el) => (
          <button
            key={el.name}
            type="button"
            onClick={() => loginGoogle()}
            className={styles.AutoRegistration__link}
          >
            <img src={el.name} alt={el.name} />
          </button>
        ))}
      </div>
    </>
  )
}

