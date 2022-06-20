import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.scss'
import { useAuth } from 'hooks/use-auth'
import Welcome from 'components/Welcom'
import { Navigate } from 'react-router'

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
