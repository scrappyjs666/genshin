import HeroPageCard from 'pages/HeroPage/HeroPageCard'
import styles from './AddHero.module.scss'

const AddHero = () => {
  return (
    <>
      <div className={styles.AddHero}>
        <div className={styles.AddHero__text}>
          You haven't added your favorite character yet
        </div>
        <HeroPageCard img="../images/characters/yae-miko/gacha-card" />
      </div>
    </>
  )
}

export default AddHero
