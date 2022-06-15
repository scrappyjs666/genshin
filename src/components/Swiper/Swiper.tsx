import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'
import React from 'react'
import { EffectCards, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { removeItem } from '../../Store/heroListSlice'
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks'
import HeroCard from '../HeroCard'
import imgBtn from './img/star.svg'
import styles from './Swiper.module.scss'

const SwiperBakset: React.FC = () => {
  const colorBtn = useAppSelector((state) => state.heroList.backColor)
  const dispatch = useAppDispatch()
  const heroes = useAppSelector((state) => state.heroList.items)

  interface Item {
    id: string
    item: string
  }

  const added = 'added to favorites'

  return (
    <div className={styles.basket__wrapper}>
      <div className={styles.Swiper__title}>Your favorites Heroes</div>
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
      <div className={styles.Swiper__title}>Your favorites Enemies</div>
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
      <div className={styles.Swiper__title}>Your favorites Weapons</div>
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
    </div>
  )
}

export default SwiperBakset
