import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroCard.module.scss'
import { ICard } from './interface'

const HeroCard: React.FC<ICard> = ({
  title,
  img,
  btnText,
  imgBtn,
  backColor,
  id,
  minHeight,
  category,
  addHero,
  findIndex,
  deleteItem,
}) => {
  return (
    <Link to={`/HeroPage/${category}/${id}`} target="_blank">
      <>
        <div
          style={{ height: `${minHeight}` }}
          className={styles.heroCard__container}
        >
          <h2 className={styles.heroCard__title}>{title}</h2>
          <img className={styles.heroCard__img} src={img} alt="heroCard__img" />
          <button
            style={{ background: `${backColor}` }}
            onClick={(e): void => {
              e.preventDefault()
              addHero?.()
              findIndex?.()
              deleteItem?.()
            }}
            className={styles.hero__add}
          >
            <img src={imgBtn} alt="img btn" />
            {btnText}
          </button>
        </div>
      </>
    </Link>
  )
}

export default HeroCard
