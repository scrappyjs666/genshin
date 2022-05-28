import styles from './HeroCard.module.scss';
import React from 'react';


interface card {
  img: string,
  title: string,
  btnText: string,
  imgBtn: string;
  styleBack?: string | number;
  indexisbtnActive: Function;
  color: string;
}

const  HeroCard: React.FC<card> = ({  title, img, btnText, imgBtn, indexisbtnActive, color }) => {
  return(
    <>
      <div 
        className={styles.heroCard__container}>
        <h2 className={styles.heroCard__title}>{title}</h2>
        <img src={img}/>
        <button
          style={{backgroundColor: `${color}`}}
          onClick={():void => indexisbtnActive()}
          className={styles.hero__add}>
          <img src={imgBtn}/>
          {btnText}
        </button>
      </div>
    </>
  )
}

export default HeroCard;
