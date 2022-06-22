import AutoRegistration from 'components/AutoRegistration'
import EntireUserError from 'components/EntireUserError/EntireUserError'
import SocialIcons from 'components/SocialIcons'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'Store/hooks/hooks'
import { setUser } from 'Store/userSlice'
import styles from './LoginForm.module.scss'

const LoginForm = () => {
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

  const frontCard = () => {
    return (
      <form className={styles.LoginForm}>
        <h2 className={styles.LoginForm__text}>Registration</h2>
        <input
          placeholder="Type your E-mail"
          className={styles.LoginForm__input}
          type="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Type your Password"
          className={styles.LoginForm__input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault(e)
            createAcc(email, password)
          }}
          className={styles.LoginForm__submit}
        >
          create account
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            flippedToggle()
          }}
          className={styles.LoginForm__descr}
        >
          Alredy have an account? Login
        </button>
        <Link to="HomePage">
          <button className={styles.LoginForm__skip}>Skip this</button>
        </Link>
        <AutoRegistration loginGoogle={loginGoogle} />
      </form>
    )
  }

  const backCard = () => {
    return (
      <form className={styles.LoginForm}>
        <h2 className={styles.LoginForm__text}>Login</h2>
        <input
          placeholder="Your E-mail"
          className={styles.LoginForm__input}
          type="e-mail"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          placeholder="Your Password"
          className={styles.LoginForm__input}
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault(e)
            signUp(loginEmail, loginPassword)
          }}
          className={styles.LoginForm__submit}
        >
          Login
        </button>
        <button
          onClick={(e) => {
            e.preventDefault(e)
            flippedToggle()
          }}
          className={styles.LoginForm__descr}
        >
          Don't have an Account? Create account
        </button>
        <Link to="HomePage">
          <button className={styles.LoginForm__skip}>Skip this</button>
        </Link>
        <SocialIcons />
      </form>
    )
  }

  return (
    <>
      <EntireUserError loginError={loginError} setLoginError={setLoginError} />
      {loginError === false ? (isFlipped ? frontCard() : backCard()) : null}
    </>
  )
}

export default LoginForm
