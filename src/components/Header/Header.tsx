import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Logo from './Logo'
import Search from './Search'
import Sound from './Sound/Sound'

interface Props {
  children: React.ReactNode
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.header__wrap}>
        <header className={styles.header}>
          <Link to="/">
            <Logo />
          </Link>
          <Search />
          <Sound />
          {children}
        </header>
      </div>
    </>
  )
}

export default Header
