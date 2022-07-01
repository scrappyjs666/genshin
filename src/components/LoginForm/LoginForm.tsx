import { useState } from 'react'
import FrontCard from './FrontCard'
import BackCard from './LoginBackCard/BackCard'

export const LoginForm = () => {
  const [isFlipped, setIsFlipper] = useState(false)
  const cardToggle = () => {
    setIsFlipper((curr) => curr === false)
  }

  const MyComponent = isFlipped ? BackCard : FrontCard;

  return <MyComponent flippedCard={cardToggle} />

}
