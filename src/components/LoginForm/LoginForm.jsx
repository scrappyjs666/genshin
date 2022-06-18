import SocialIcons from 'components/SocialIcons'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'Store/hooks/hooks'
import { setUser } from 'Store/userSlice'
import styles from './LoginForm.module.scss'

const LoginForm = () => {
  const [isFlipped, setFlipped] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const dispatch = useAppDispatch()

  const handleLogin = (email, password, name) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        console.log(user)
      })
      .catch((error) => {
        alert(error)
      })
  }

  const flippedToggle = () => {
    setFlipped((curr) => curr === false)
  }

  const frontCard = () => {
    return (
      <form className={styles.LoginForm}>
        <h2 className={styles.LoginForm__text}>Sign Up</h2>
        <input
          placeholder="Type your E-mail"
          className={styles.LoginForm__input}
          type="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Type your Name"
          className={styles.LoginForm__input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Type your Password"
          className={styles.LoginForm__input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Repeat your Password"
          className={styles.LoginForm__input}
          type="password"
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            flippedToggle()
            handleLogin(email, password, name)
          }}
          className={styles.LoginForm__submit}
        >
          Login
        </button>
        <button className={styles.LoginForm__descr}>
          Alredy have an account? Login
        </button>
        <Link to="HomePage">
          <button className={styles.LoginForm__skip}>Skip this</button>
        </Link>
        <SocialIcons />
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
        />
        <input
          placeholder="Your Password"
          className={styles.LoginForm__input}
          type="password"
        />
        <button className={styles.LoginForm__submit}>Login</button>
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

  return <>{isFlipped ? frontCard() : backCard()}</>
}

export default LoginForm
