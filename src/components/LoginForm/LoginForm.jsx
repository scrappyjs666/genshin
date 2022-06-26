import EntireUserError from 'components/EntireUserError/EntireUserError'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'Store/hooks/hooks'
import styles from './LoginForm.module.scss'
import BackCard from './LoginBackCard/BackCard'
import FrontCard from './FrontCard'

export const LoginForm = () => {
  const [isFlipped, setFlipped] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const dispatch = useAppDispatch()
  const { status } = useAppSelector((state) => state.userSlice
  )
  // useEffect(() => {
  //   document.body.addEventListener('click', removeModal)
  //   return () => document.body.removeEventListener('click', removeModal)
  // }, [])


  return (
    <>
      {status === 'loading' ? <FrontCard/> : <BackCard/>}
    </>
  )
}
