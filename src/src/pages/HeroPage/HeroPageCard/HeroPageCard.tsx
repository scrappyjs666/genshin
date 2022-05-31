import styles from './HeroPageCard.module.scss';
import React from 'react';
import Tilt from 'react-parallax-tilt';

interface IHeroPageCard {
  img:string;
}

const  HeroPageCard: React.FC<IHeroPageCard> = ({ img }) => {
  return(
    <>
      <Tilt className={styles.heroPageCard__container}>
        <img 
          className={styles.btn__image}  
          src={img}/>
      </Tilt>
    </>
  )
}

export default HeroPageCard;