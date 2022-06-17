import React, { Children } from 'react'
import Tilt from 'react-parallax-tilt'
import styles from './HeroPageCard.module.scss'

interface IHeroPageCard {
  img: string
  children?: JSX.Element
}

const HeroPageCard: React.FC<IHeroPageCard> = ({ img, children }) => {
  return (
    <>
      <Tilt className={styles.heroPageCard__container}>
        <img className={styles.heroPageCard__image} src={img} alt="card" />
        {children}
      </Tilt>
    </>
  )
}

export default HeroPageCard
