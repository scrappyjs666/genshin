import styles from './Search.module.scss'
import React from 'react'
import search from './img/search.svg'
import { useAppDispatch } from '../../../Store/hooks/hooks'
import { inputChangeValue } from '../../../Store/inputSlice'
import { useState } from 'react'
import debounce from 'lodash.debounce'

const Search: React.FC = () => {
  const dispatch = useAppDispatch()
  // const testDebounce = (() => {
  //   console.log('Hello')
  // }, 250)
  // const a = () => {
  //   console.log('a')
  // }

  return (
    <div className={styles.search__wrapp}>
      <input
        onChange={(event) => dispatch(inputChangeValue(event.target.value))}
        placeholder="Find your favorite character"
        className={styles.search}
      ></input>
      <button className={styles.button__search}>
        <img src={search} alt="search icon" />
      </button>
    </div>
  )
}

export default Search
