import { SocialIcons } from 'components/UI/SocialIcons/SocialIcons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from 'Store/hooks/hooks'
import { signUp } from 'Store/user/userSlice'
import styles from '../LoginForm.module.scss'

interface IBackCard {
  flippedCard: () => void
}

const BackCard: React.FC<IBackCard> = ({ flippedCard }) => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const dispatch = useAppDispatch()

  return (
    <>
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
            e.preventDefault()
            dispatch(signUp({ loginEmail, loginPassword }))
          }}
          className={styles.LoginForm__submit}
        >
          Login
        </button>
        <button onClick={flippedCard} className={styles.LoginForm__descr}>
          Don't have an Account? Create account
        </button>
        <Link to="HomePage">
          <button className={styles.LoginForm__skip}>Skip this</button>
        </Link>
        <SocialIcons />
      </form>
    </>
  )
}

export default BackCard
