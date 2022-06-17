import styles from './LoginForm.module.scss'

const LoginForm = () => {
  return (
    <>
      <form className={styles.LoginForm}>
        <h2 className={styles.LoginForm__text}>Sign Up</h2>
        <input
          placeholder="Login"
          className={styles.LoginForm__input}
          type="text"
        />
        <input
          placeholder="Password"
          className={styles.LoginForm__input}
          type="password"
        />
        <input
          placeholder="E-mail"
          className={styles.LoginForm__input}
          type="e-mail"
        />
        <input
          placeholder="E-mail"
          className={styles.LoginForm__input}
          type="text"
        />
        <button className={styles.LoginForm__sumbit}>Login</button>
      </form>
    </>
  )
}

export default LoginForm
