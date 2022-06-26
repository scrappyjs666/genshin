import { useAppSelector } from "Store/hooks/hooks"

export function useAuth() {
  const { email, id } = useAppSelector((state) => state.userSlice)

  return {
    isAuth: Boolean(email),
    email,
    id,
  }
}
