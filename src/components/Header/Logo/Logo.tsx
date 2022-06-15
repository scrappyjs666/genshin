import React from 'react'
import logo from './img/logo.png'
import styles from './Logo.module.scss'

const Logo: React.FC = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
    </>
  )
}

export default Logo
