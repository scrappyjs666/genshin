import React, { MouseEventHandler } from 'react'
import { IoIosFunnel } from 'react-icons/io'
import styles from './FilterBtn.module.scss'

interface IFilterBtn {
  name: string
  fn?: () => void
}

export const FilterBtn: React.FC<IFilterBtn> = ({ name, fn }) => {
  return (
    <>
      <button onClick={fn} className={styles.filterBtn} type="button">
        <IoIosFunnel />
        {name}
      </button>
    </>
  )
}

