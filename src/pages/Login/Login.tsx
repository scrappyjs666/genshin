import { Loader, LoginForm, Welcome } from 'components'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth } from 'hooks/use-auth'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router'
import styles from './Login.module.scss'

const Login = () => {
  const { isAuth, email } = useAuth()
  const auth = getAuth()
  const [user, loading, error] = useAuthState(auth)

  const login = () => {
    signInWithEmailAndPassword(auth, 'test@test.com', 'password')
  }
  const logout = () => {
    signOut(auth)
  }
  return (
    <>
      {!isAuth && loading && <Loader />}
      {isAuth && loading ? <Welcome /> : <LoginForm />}
    </>
  )
}

export default Login
