import Welcome from 'components/Welcom'
import { useAuth } from 'hooks/use-auth'
import { Navigate } from 'react-router'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.scss'

const Login = () => {
  const { isAuth, email } = useAuth()
  return isAuth ? (
    <Welcome />
  ) : (
    <>
      <LoginForm />
    </>
  )
}

export default Login
