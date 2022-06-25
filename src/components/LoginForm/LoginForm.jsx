import { AutoRegistration } from 'components/AutoRegistration/AutoRegistration'
import EntireUserError from 'components/EntireUserError/EntireUserError'
import { SocialIcons } from 'components/SocialIcons/SocialIcons'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from 'Store/hooks/hooks'
import { setUser } from 'Store/user/userSlice'
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  const [isFlipped, setFlipped] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loginError, setLoginError] = useState(false)
  const dispatch = useAppDispatch()
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const provider = new GoogleAuthProvider()

  const loginGoogle = async () => {
    const auth = getAuth()
    await signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user, user.email)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const removeModal = () => {
    setLoginError(false)
  }

  useEffect(() => {
    document.body.addEventListener('click', removeModal)
    return () => document.body.removeEventListener('click', removeModal)
  }, [])

  const signUp = async (loginEmail, loginPassword) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      })
      .catch((error) => {
        setLoginError(true)
      })
  }

  const createAcc = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      })
      .catch(() => alert('Invalid user!'))
  }

  const flippedToggle = () => {
    setFlipped((curr) => curr === false)
  }

  return (
    <>
      <EntireUserError loginError={loginError} setLoginError={setLoginError} />
      {loginError === false ? (isFlipped ? <frontCard /> : <backCard />) : null}
    </>
  )
}
