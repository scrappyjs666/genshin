import styles from './Search.module.scss';
import React from 'react';  
import search from './img/search.svg'

type Props = { children: React.ReactNode };

const  Search: React.FC<Props> = ({ children }) => {
  return(
    <div className={styles.search__wrapp}>
      <input
        placeholder='Find your favorite character'
        className={styles.search}>
      </input>
      <button 
        className={styles.button__search}>
        <img 
          src={search} 
          alt='search icon'/>
      </button>
      {children}
    </div>
  )
}

export default Search;