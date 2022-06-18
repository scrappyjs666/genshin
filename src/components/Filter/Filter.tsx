import React from 'react'
import FilterBtn from '../BtnHeader'
import styles from './Filter.module.scss'

interface IFilter {
  sortAZ: () => void
  sortZA: () => void
  favorite: () => void
  allHero: () => void
}

const Filter: React.FC<IFilter> = ({ sortAZ, sortZA, favorite, allHero }) => {
  return (
    <>
      <div className={styles.filter}>
        <FilterBtn fn={() => allHero()} name="all hero" />
        <FilterBtn fn={() => favorite()} name="favorite hero" />
        <FilterBtn fn={() => sortAZ()} name="name A-Z" />
        <FilterBtn fn={() => sortZA()} name="name Z-A" />
      </div>
    </>
  )
}

export default Filter
