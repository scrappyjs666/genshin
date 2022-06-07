// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroCard from '../HeroCard';
import { useState } from 'react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperBakset: React.FC = () => {
  const localStore  = JSON.parse(localStorage.getItem('items')!);
  console.log(localStore)
  
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {localStore.map((el:string) => (
          <SwiperSlide>
            <HeroCard
              key={el}
              img={`images/characters/${el}/gacha-card`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </> 
  );
};

export default SwiperBakset;