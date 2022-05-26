import styles from './Header.module.scss';
import React from 'react';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Filter from './Filter/Filter';

type Props = { children: React.ReactNode };

const  Header: React.FC<Props> = ({ children }) => {
  return(
    <>
      <div className={styles.header__wrap}>
        <header className={styles.header}>
          <Logo/>
          <Search children={undefined}/>
          <Filter children={undefined}/>
          {children}
        </header>
      </div>
    </>
  )
}

export default Header;