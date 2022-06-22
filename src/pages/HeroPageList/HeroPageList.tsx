import AddHero from 'components/AddHero'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {
  addItem,
  fetchHeroList,
} from 'Store/heroListSlice'
import { inputChangeValue } from 'Store/inputSlice'
import Container from '../../components/Container'
import Filter from '../../components/Filter'
import HeroCard from '../../components/HeroCard'
import Loader from '../../components/UI/Loader'
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks'
import { excludedData } from './excludedData'
import styles from './HeroPageList.module.scss'
import imgBtnAdd from './img/add.svg'
import imgBtn from './img/star.svg'

const HeroPageList: React.FC = () => {
  const [arrayLenght, setArrayLenght] = useState(10)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const { backColor, status, data } = useAppSelector((state) => state.heroList)
  let heroArray = useAppSelector((state) => state.heroList.items)
  const inputVal = useAppSelector((state) => state.inputSlice.inputValue)
  if (localStorage.getItem('items')) {
    heroArray = JSON.parse(localStorage.getItem('items')!)
  }

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

  const scrollHandler = (): void => {
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
          <div className={styles.HeroPage__filter}>
            <Filter />
          </div>
          {data.length === 0 && status === 'success' && (
            <AddHero text={AddHeroFCText} />
          )}
          <Container>
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
                    heroArray.find((el) => el.item === item) ? backColor : ''
                  }
                  title={item}
                  img={`../images/${id}/${item}${img}`}
                  imgBtn={
                    heroArray.find((el) => el.item === item)
                      ? imgBtn
                      : imgBtnAdd
                  }
                  btnText={
                    heroArray.find((el) => el.item === item) ? added : selected
                  }
                  addHero={(): void => addHero(item)}
                />
              ))}
          </Container>
        </>
      )}
    </>
  )
}

export default HeroPageList
