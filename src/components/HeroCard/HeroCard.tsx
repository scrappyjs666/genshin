import styles from './HeroCard.module.scss';
import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface card {
  img: string,
  title: string,
  btnText: string,
  imgBtn: string;
  styleBack?: string | number;
  color: string;
  id: string;
  minHeight: string;
  category: string | undefined;
  addHero: Function;
}

const  HeroCard: React.FC<card> = ({  title, img, btnText, imgBtn, color, id, minHeight,category, addHero }) => {
  return(
    <Link to={`/HeroPage/${category}/${id}`} target="_blank">
      <>
        <div
          style={{height: `${minHeight}`}} 
          className={styles.heroCard__container }>
          <h2 
            className={styles.heroCard__title}>{title}</h2>
          <img 
            className={styles.heroCard__img}
            src={img}
          />
          <button
            style={{backgroundColor: `${color}`}}
            onClick={(e):void => { 
              e.preventDefault(); 
              addHero() } 
            }
            className={styles.hero__add}>
            <img 
              src={imgBtn}
            />
            {btnText}
          </button>
        </div>
      </>
    </Link>
  )
}

export default HeroCard;
