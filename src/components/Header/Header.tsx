import React from 'react'
import { Link } from 'react-router-dom'
import { Account } from './Account/Account'
import styles from './Header.module.scss'
import { Logo } from './Logo/Logo'
import { Search } from './Search/Search'
import { Navigate } from './Navigate/Navigate'

export const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header__wrap}>
        <header className={styles.header}>
          <Link to="/HomePage">
            <Logo />
          </Link>
          <Search />
          <Account />
          <Navigate />
        </header>
      </div>
    </>
  )
}

