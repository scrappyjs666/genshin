import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroCard.module.scss'

interface ICard {
  img: string
  title?: string
  btnText?: string
  imgBtn?: any
  styleBack?: string | number
  backColor?: string
  id?: string
  minHeight?: string
  category?: string | undefined
  addHero?: Function
  findIndex?: Function
  deleteItem?: Function
}

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
