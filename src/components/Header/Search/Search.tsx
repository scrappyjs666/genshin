import debounce from 'lodash.debounce'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Store/hooks/hooks'
import { inputChangeValue, removeInputField } from '../../../Store/inputSlice'
import closeIcon from './img/close-icon.svg'
import search from './img/search.svg'
import styles from './Search.module.scss'

export const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()
  const changeInputValue = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(inputChangeValue(e.target.value))
    },
    200
  )
  const inputValueRedux = useAppSelector((state) => state.inputSlice.inputValue)
  useEffect(() => {
    setInputValue(inputValueRedux)
  }, [inputValueRedux])

  return (
    <div className={styles.search__wrapp}>
      <input
        value={inputValue}
        onChange={(e) => {
          changeInputValue(e)
          setInputValue(e.target.value)
        }}
        placeholder="Find your favorite character"
        className={styles.search}
      />
      <button className={styles.button__search}>
        <img src={search} alt="search icon" />
      </button>
      <button
        onClick={() => {
          dispatch(removeInputField())
          setInputValue('')
        }}
        className={styles.clearInput}
      >
        <img src={closeIcon} alt="inputClear icon" />
      </button>
    </div>
  )
}
