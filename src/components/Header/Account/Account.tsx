import { useAuth } from 'hooks/use-auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'Store/hooks/hooks'
import styles from './Account.module.scss'

export const Account: React.FC = () => {
  const { isAuth } = useAuth()
  const email = useAppSelector((state) => state.userSlice.email)
  const isLogin = (
    <Link className={styles.Account__link} to="/">
      Sign in profile
    </Link>
  )
  const isSignUp = `Welcome  ${email}`
  return (
    <>
      <div className={styles.Account__text}>{isAuth ? isSignUp : isLogin}</div>
    </>
  )
}
