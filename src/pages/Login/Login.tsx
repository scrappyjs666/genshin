import { Loader, Welcome, LoginForm } from 'components'
import { useAuth } from 'hooks/use-auth'
import { Navigate } from 'react-router'
import styles from './Login.module.scss'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const Login = () => {
  const { isAuth, email } = useAuth()
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth)
  console.log(user, 'user')
  console.log(loading, 'loading')

  const login = () => {
    signInWithEmailAndPassword(auth, 'test@test.com', 'password');
  };
  const logout = () => {
    signOut(auth);
  };
  return(
    <>
      {!isAuth && loading  && <Loader/>}
      {isAuth && loading ? <Welcome/> : <LoginForm/>}
    </>
  )
}

export default Login
