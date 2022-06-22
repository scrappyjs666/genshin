import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useAppDispatch, useAppSelector } from 'Store/hooks/hooks'
import { setUser } from 'Store/userSlice'

export function useAuth() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getUser = () => {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: null,
            })
          )
        } else {
          console.log(user, 'no user')
        }
      })
    }
    getUser()
  }, [])
  const { email, token, id } = useAppSelector((state) => state.userSlice)

  return {
    isAuth: Boolean(email),
    email,
    token,
    id,
  }
}
