import React, { useEffect, useState } from 'react'
import { IoVolumeMedium, IoVolumeMute } from 'react-icons/io5'
import styles from './Sound.module.scss'

const Sound: React.FC = () => {
  const [sound, setSound] = useState(false)
  const soundToggle = () => {
    setSound((curr) => curr === false)
  }

  return (
    <>
      <button onClick={() => soundToggle()} className={styles.Sound}>
        {sound ? <IoVolumeMedium /> : <IoVolumeMute />}
      </button>
    </>
  )
}

export default Sound
