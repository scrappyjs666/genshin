import styles from './HeroCard.module.scss';
import React from 'react';

interface card {
  img: string,
  title: string,
  rating: number;
}

const  HeroCard: React.FC<card> = ({ img, title }) => {
  return(
    <>
      <div 
        className={styles.heroCard__container}>
        {title}
        {img}
      </div>
    </>
  )
}

export default HeroCard;