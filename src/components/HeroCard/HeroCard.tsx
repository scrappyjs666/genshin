import styles from './HeroCard.module.scss';
import React from 'react';


interface card {
  img: string,
  title: string,
  btnText: string,
  imgBtn: string;
  styleBack?: string | number;
  onClick: (item: string, i: number) => void;
  indexBtnActive: Function;
}

const  HeroCard: React.FC<card> = ({  title, img, btnText, imgBtn, indexBtnActive }) => {
  return(
    <>
      <div 
        className={styles.heroCard__container}>
        <h2 className={styles.heroCard__title}>{title}</h2>
        <img src={img}/>
        <button
          onClick={(item: string, i: number)=>  indexBtnActive(item, i)}
          className={styles.hero__add}>
          <img src={imgBtn}/>
          {btnText}
        </button>
      </div>
    </>
  )
}

export default HeroCard;
