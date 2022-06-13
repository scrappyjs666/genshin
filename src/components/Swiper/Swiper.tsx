// import Swiper core and required modules
import { EffectCards, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroCard from '../HeroCard';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Swiper.module.scss';
import { useAppSelector, useAppDispatch } from '../../Store/hooks/hooks';
import imgBtn from './img/star.svg';
import { removeItem } from '../../Store/heroListSlice';
import 'swiper/css/effect-cards';

const SwiperBakset: React.FC = () => {
  const colorBtn = useAppSelector((state) => state.heroList.colorBtn);
  const dispatch = useAppDispatch();
  const heroes = useAppSelector((state) => state.heroList.items);

  interface Item {
    id: string,
    item: string,
  }

  const added = 'added to favorites';

  return (
    <div className={styles.basket__wrapper}>
      <div 
        className={styles.Swiper__title}>
        Your favorites Heroes
      </div>
      <Swiper
        modules={[EffectCards]}
        effect={'cards'}
        grabCursor={true}
        className="mySwiper"
        style={{width: '330px', height :'554px'}}
      >
        {heroes
          .filter((el: { id: string; }) => el.id === 'characters')
          .map((el:Item, i:number) => (
            <SwiperSlide>
              <HeroCard
                category={el.id}
                id={el.item}
                key={el.item}
                title={el.item}
                color={colorBtn}
                btnText={added}
                imgBtn={imgBtn}
                deleteItem={() => dispatch(removeItem(el.item))}
                img={`images/characters/${el.item}/gacha-card`} 
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div 
        className={styles.Swiper__title}>
        Your favorites Enemies
      </div>
      <Swiper
        style={{width: '276px', height :'286px'}}
        modules={[EffectCards]}
        effect={'cards'}
        grabCursor={true}
        className="mySwiper"
      >
        {heroes
          .filter((el: { id: string; }) => el.id === 'enemies')
          .map((el:Item) => (
            <SwiperSlide>
              <HeroCard
                category={el.id}
                id={el.item}
                key={el.item}
                btnText={added}
                color={colorBtn}
                title={el.item}
                imgBtn={imgBtn}
                deleteItem={() => dispatch(removeItem(el.item))}
                img={`images/enemies/${el.item}/icon`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div 
        className={styles.Swiper__title}>
        Your favorites Weapons</div>
      <Swiper
        style={{width: '286px', height :'auto'}}
        modules={[EffectCards]}
        effect={'cards'}
        grabCursor={true}
        className="mySwiper"
      >
        {heroes
          .filter((el: { id: string; }) => el.id === 'weapons')
          .map((el:Item) => (
            <SwiperSlide>
              <HeroCard
                category={el.id}
                id={el.item}
                key={el.item}
                btnText={added}
                color={colorBtn}
                title={el.item}
                imgBtn={imgBtn}
                deleteItem={() => dispatch(removeItem(el.item))}
                img={`images/weapons/${el.item}/icon`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div> 
  );
};

export default SwiperBakset;

