import { AddHero, Filter, HeroCard, Loader } from 'components'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {
  addItem,
  changePageID,
  fetchHeroList,
} from 'Store/heroList/heroListSlice'
import { inputChangeValue } from 'Store/input/inputSlice'
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks'
import { excludedData } from './excludedData'
import styles from './HeroPageList.module.scss'
import imgBtnAdd from './img/add.svg'
import imgBtn from './img/star.svg'

const HeroPageList = () => {
  const [arrayLenght, setArrayLenght] = useState(10)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const { backColor, status, data, items } = useAppSelector(
    (state) => state.heroList
  )
  const inputVal = useAppSelector((state) => state.inputSlice.inputValue)

  const { id } = useParams()
  const url = `https://api.genshin.dev/${id}`

  const addHero = (item: string) => {
    const elements = {
      id,
      item,
    }
    dispatch(addItem(elements))
  }

  useEffect(() => {
    dispatch(changePageID(id))
    dispatch(fetchHeroList({ url }))
  }, [url])

  useEffect(() => {
    setSearchParams({ hero: inputVal })
    if (inputVal.length === 0) {
      setSearchParams('')
    }
  }, [inputVal, searchParams, setSearchParams])

  useEffect(() => {
    const heroQuery = searchParams.get('hero') || ''
    if (heroQuery.length > 1) {
      setSearchParams({ hero: heroQuery })
      dispatch(inputChangeValue(heroQuery))
    }
  }, [searchParams, setSearchParams])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setArrayLenght((prevValue) => {
        return prevValue + 8
      })
    }
  }

  const added = 'added to favorites'
  const selected = `choose your favorite ${id}`
  const img = id !== 'characters' ? '/icon' : '/gacha-card'
  const AddHeroFCText = "You haven't selected anything in this category yet'"

  return (
    <>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <>
          <Filter />
          {data.length === 0 && status === 'success' && (
            <AddHero text={AddHeroFCText} />
          )}
          <div className={styles.Container}>
            {data
              .filter(
                (val) =>
                  !excludedData.includes(val) &&
                  val.toLowerCase().includes(inputVal.toLowerCase())
              )
              .slice(0, arrayLenght)
              .map((item) => (
                <HeroCard
                  key={item}
                  category={id}
                  id={item}
                  minHeight={id === 'weapons' ? '240px' : ''}
                  backColor={
                    items.find((el) => el.item === item) ? backColor : ''
                  }
                  title={item}
                  img={`../images/${id}/${item}${img}`}
                  imgBtn={
                    items.find((el) => el.item === item) ? imgBtn : imgBtnAdd
                  }
                  btnText={
                    items.find((el) => el.item === item) ? added : selected
                  }
                  addHero={(): void => addHero(item)}
                />
              ))}
          </div>
        </>
      )}
    </>
  )
}

export default HeroPageList
