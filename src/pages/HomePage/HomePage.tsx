import React from 'react'
import { Link } from 'react-router-dom'
import HeroPageCard from '../HeroPage/HeroPageCard'
import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  const arrInfo = [
    { name: `./images/characters/${'albedo'}/gacha-card`, link: 'characters' },
    { name: `./images/enemies/${'abyss-mage'}/portrait`, link: 'enemies' },
    {
      name: `./images/weapons/${'blackcliff-longsword'}/icon`,
      link: 'weapons',
    },
  ]

  return (
    <>
      <div className={styles.HomePage__Wrapper}>
        {arrInfo.map((el) => (
          <Link to={`/HeroPageList/${el.link}`}>
            <HeroPageCard key={el.name} img={el.name!} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default HomePage
