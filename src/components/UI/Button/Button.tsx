import React from 'react'
import { IoIosFunnel } from 'react-icons/io'
import styles from './Button.module.scss'

interface IButton {
  name: string
  fn?: () => void
}

export const Button: React.FC<IButton> = ({ name, fn }) => {
  return (
    <>
      <button onClick={fn} className={styles.Button} type="button">
        <IoIosFunnel />
        {name}
      </button>
    </>
  )
}
