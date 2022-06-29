import { Loader, LoginForm, Welcome } from 'components'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useAppSelector } from 'Store/hooks/hooks'
import EntireUserError from '../../components/EntireUserError/EntireUserError'

const Login = () => {
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const { status } = useAppSelector((state) => state.userSlice)

  const render = () => {
    if (loading) {
      return <Loader />
    }

    if (user) {
      return <Welcome />
    }

    if (status === 'error') {
      return <EntireUserError />
    }

    return <LoginForm />
  }

  return <>{render()}</>
}

export default Login
