import debounce from 'lodash.debounce'
import React, { useEffect, useState } from 'react'
import { inputChangeValue, removeInputField } from 'Store/input/inputSlice'
import { useAppDispatch, useAppSelector } from '../../../Store/hooks/hooks'
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

  const placeholderText = 'Find your favorite.....'

  return (
    <div className={styles.search__wrapp}>
      <input
        value={inputValue}
        onChange={(e) => {
          changeInputValue(e)
          setInputValue(e.target.value)
        }}
        placeholder={placeholderText}
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
