import { useAppSelector } from 'Store/hooks/hooks'
import FrontCard from './FrontCard'
import BackCard from './LoginBackCard/BackCard'

export const LoginForm = () => {
  const { status } = useAppSelector((state) => state.userSlice)

  return <>{status === 'loading' ? <FrontCard /> : <BackCard />}</>
}
