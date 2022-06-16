import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <>
      <div className={styles.NotFoundPage__wrapper}>
        <div className={styles.NotFoundPage__text}>
          404 ERROR Page Not Found
        </div>
        <button
          onClick={() => goBack()}
          className={styles.NotFoundPage__buttonBack}
        >
          go back
        </button>
      </div>
    </>
  )
}

export default NotFoundPage
