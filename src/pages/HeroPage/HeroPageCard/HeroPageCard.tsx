import React from 'react'
import Tilt from 'react-parallax-tilt'
import styles from './HeroPageCard.module.scss'

interface IHeroPageCard {
  img: string
}

const HeroPageCard: React.FC<IHeroPageCard> = ({ img }) => {
  return (
    <>
      <Tilt className={styles.heroPageCard__container}>
        <img className={styles.heroPageCard__image} src={img} alt="card" />
      </Tilt>
    </>
  )
}

export default HeroPageCard
