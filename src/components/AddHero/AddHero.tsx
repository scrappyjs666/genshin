import HeroPageCard from 'pages/HeroPage/HeroPageCard'
import React from 'react'
import styles from './AddHero.module.scss'

interface IAddHero {
  text: string
}

export const AddHero: React.FC<IAddHero> = ({ text }) => {
  return (
    <>
      <div className={styles.AddHero}>
        <HeroPageCard img="../images/characters/yae-miko/gacha-card">
          <div className={styles.AddHero__text}>{text}</div>
        </HeroPageCard>
      </div>
    </>
  )
}
