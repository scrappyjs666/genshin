import styles from './BasketPage.module.scss';
import React from 'react';
import SwiperBakset from '../../components/Swiper/Swiper';

const  BasketPage:React.FC = () => {
  return(
    <>
      <SwiperBakset/>
      {/* <div className={styles.BasketPage__wrapper}>
        <div 
          className={styles.BasketPage__goods}>
          Your favorite characters
        </div>
        <div className={styles.Basket__chapter}>Hero</div>
        <div className={styles.Basket__chapter}>Enemies</div>
        <div className={styles.Basket__chapter}>Weapon</div>
      </div> */}
    </>
  )
}

export default BasketPage;