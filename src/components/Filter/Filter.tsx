import React from 'react'
import { allHero, favoriteHero, sortAZ, sortZA } from 'Store/heroListSlice'
import { useAppDispatch } from 'Store/hooks/hooks'
import FilterBtn from '../BtnHeader'
import styles from './Filter.module.scss'

const Filter: React.FC = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <div className={styles.filter}>
        <FilterBtn fn={dispatch(allHero)} name="all hero" />
        <FilterBtn fn={dispatch(favoriteHero)} name="favorite hero" />
        <FilterBtn fn={dispatch(sortAZ)} name="name A-Z" />
        <FilterBtn fn={dispatch(sortZA)} name="name Z-A" />
      </div>
    </>
  )
}

export default Filter
