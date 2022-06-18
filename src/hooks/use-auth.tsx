import { useAppSelector } from 'Store/hooks/hooks'

export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.userSlice)

  return {
    isAuth: Boolean(email),
    email,
    token,
    id,
  }
}
