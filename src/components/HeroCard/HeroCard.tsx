import styles from './HeroCard.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

interface card {
  img: string,
  title: string,
  btnText: string,
  imgBtn: string;
  styleBack?: string | number;
  indexisbtnActive: Function;
  color: string;
  id: string;
  minHeight: string;
  category: string | undefined;
}

const  HeroCard: React.FC<card> = ({  title, img, btnText, imgBtn, indexisbtnActive, color, id, minHeight,category }) => {
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
            onClick={(e):void => { e.preventDefault(); indexisbtnActive() } }
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
