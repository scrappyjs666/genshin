import styles from './Filter.module.scss';
import React from 'react';
import FilterBtn from './FilterBtn/FilterBtn';

interface IFilter {
  sortAZ: Function,
  sortZA: Function,
}

const  Filter: React.FC<IFilter> = ( {sortAZ, sortZA} ) => {
  return(
    <>
      <div className={styles.filter}>
        <FilterBtn 
          fn={():void => sortAZ()}
          name={'name A-Z'} />
        <FilterBtn 
          fn={():void => sortZA()}
          name={'name Z-A'} />
      </div>
    </>
  )
}

export default Filter;