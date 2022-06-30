import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'
import { Loader } from 'components'
import { AddHero } from 'components/AddHero/AddHero'
import { HeroCard } from 'components/HeroCard/HeroCard'
import { getAuth } from 'firebase/auth'
import { Item } from 'pages/HeroPageList/types'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { removeItem } from 'Store/heroList/heroListSlice'
import { EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks'
import styles from './BasketPage.module.scss'
import imgBtn from './img/star.svg'

const SwiperBakset: React.FC = () => {
  const colorBtn = useAppSelector((state) => state.heroList.backColor)
  const dispatch = useAppDispatch()
  const heroes = useAppSelector((state) => state.heroList.items)
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  if (loading) return <Loader />
  if (!user)
    return (
      <Link className={styles.Basket__link} to="/">
        <div className={styles.Basket__auth}>Please login or register!</div>
      </Link>
    )

  const added = 'added to favorites'
  const hvHero = 'You have not been added to favorites yet Characters'

  const isHero = heroes.findIndex((el) => el.id === 'characters')
  const isEnemies = heroes.findIndex((el) => el.id === 'enemies')
  const isWeapons = heroes.findIndex((el) => el.id === 'weapons')

  return (
    <div className={styles.basket__wrapper}>
      <div className={styles.Swiper__title}>Your favorites Heroes</div>
      {isHero !== -1 ? (
        <Swiper
          modules={[EffectCards]}
          effect="cards"
          grabCursor={true}
          className="mySwiper"
          style={{ width: '330px', height: '554px' }}
        >
          {heroes
            .filter((el: { id: string }) => el.id === 'characters')
            .map((el: Item) => (
              <SwiperSlide key={el.item}>
                <HeroCard
                  category={el.id}
                  id={el.item}
                  title={el.item}
                  backColor={colorBtn}
                  btnText={added}
                  imgBtn={imgBtn}
                  deleteItem={() => dispatch(removeItem(el.item))}
                  img={`images/characters/${el.item}/gacha-card`}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Link to="/HeroPageList/characters">
          <AddHero text={hvHero} />
        </Link>
      )}
      <div className={styles.Swiper__title}>Your favorites Enemies</div>
      {isEnemies !== -1 ? (
        <Swiper
          style={{ width: '276px', height: '286px' }}
          modules={[EffectCards]}
          effect="cards"
          grabCursor={true}
          className="mySwiper"
        >
          {heroes
            .filter((el: { id: string }) => el.id === 'enemies')
            .map((el: Item) => (
              <SwiperSlide key={el.item}>
                <HeroCard
                  category={el.id}
                  id={el.item}
                  btnText={added}
                  backColor={colorBtn}
                  title={el.item}
                  imgBtn={imgBtn}
                  deleteItem={() => dispatch(removeItem(el.item))}
                  img={`images/enemies/${el.item}/icon`}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Link to="/HeroPageList/enemies">
          <AddHero text={hvHero} />
        </Link>
      )}
      <div className={styles.Swiper__title}>Your favorites Weapons</div>
      {isWeapons !== -1 ? (
        <Swiper
          style={{ width: '286px', height: 'auto' }}
          modules={[EffectCards]}
          effect="cards"
          grabCursor={true}
          className="mySwiper"
        >
          {heroes
            .filter((el: { id: string }) => el.id === 'weapons')
            .map((el: Item) => (
              <SwiperSlide key={el.item}>
                <HeroCard
                  category={el.id}
                  id={el.item}
                  btnText={added}
                  backColor={colorBtn}
                  title={el.item}
                  imgBtn={imgBtn}
                  deleteItem={() => dispatch(removeItem(el.item))}
                  img={`images/weapons/${el.item}/icon`}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Link to="/HeroPageList/weapons">
          <AddHero text={hvHero} />
        </Link>
      )}
    </div>
  )
}

export default SwiperBakset
