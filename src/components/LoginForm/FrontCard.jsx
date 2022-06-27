import { GoogleAuth } from 'components/UI/GoogleAuth/GoogleAuth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from 'Store/hooks/hooks'
import { createAcc } from 'Store/user/userSlice'
import styles from './LoginForm.module.scss'

const FrontCard = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useAppDispatch()
  return (
    <>
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
            dispatch(createAcc({ email, password }))
          }}
          className={styles.LoginForm__submit}
        >
          create account
        </button>
        <button className={styles.LoginForm__descr}>
          Alredy have an account? Login
        </button>
        <Link to="HomePage">
          <button className={styles.LoginForm__skip}>Skip this</button>
        </Link>
        <GoogleAuth />
      </form>
    </>
  )
}

export default FrontCard
