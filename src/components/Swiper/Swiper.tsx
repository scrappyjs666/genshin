// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import albedo from '../../../public/images/characters/albedo/gacha-card'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperBakset = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={'images/characters/albedo/gacha-card'}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={'images/characters/aloy/gacha-card'}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={'images/characters/barbara/gacha-card'}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={'images/characters/ayaka/gacha-card'}/>
      </SwiperSlide>
      ...
    </Swiper>
  );
};