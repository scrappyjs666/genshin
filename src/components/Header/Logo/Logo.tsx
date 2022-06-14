import styles from './Logo.module.scss'
import React from 'react'
import logo from './img/logo.png'

const Logo: React.FC = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
    </>
  )
}

export default Logo
