import styles from './Header.module.scss';
import React from 'react';
import Logo from './Logo';
import Search from './Search';
import { Link } from 'react-router-dom';

type Props = { children: React.ReactNode };

const  Header: React.FC<Props> = ({ children }) => {
  return(
    <>
      <div className={styles.header__wrap}>
        <header className={styles.header}>
          <Link to='/'>
            <Logo/>
          </Link>
          <Search />
          {children}
        </header>
      </div>
    </>
  )
}

export default Header;