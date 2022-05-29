import styles from './HeroPageCard.module.scss';
import React from 'react';

interface IHeroPageCard {
  img:string;
}

const  HeroPageCard: React.FC<IHeroPageCard> = ( {img} ) => {
  return(
    <>
      <div className={styles.heroPageCard__container} >
        <img 
          className={styles.btn__image} 
          src={img}/>
      </div>
    </>
  )
}

export default HeroPageCard;