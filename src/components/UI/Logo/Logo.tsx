import React from 'react'
import logo from './img/logo.png'
import styles from './Logo.module.scss'

export const Logo: React.FC = React.memo(() => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
    </>
  )
})
