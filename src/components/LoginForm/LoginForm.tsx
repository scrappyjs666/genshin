import { useState } from 'react'
import FrontCard from './FrontCard'
import BackCard from './LoginBackCard/BackCard'

export const LoginForm = () => {
  const [isFlipped, setIsFlipper] = useState(false)
  const cardToggle = () => {
    setIsFlipper((curr) => curr === false)
  }

  return (
    <>
      {isFlipped === true ? (
        <BackCard flippedCard={() => cardToggle()} />
      ) : (
        <FrontCard flippedCard={() => cardToggle()} />
      )}
    </>
  )
}
