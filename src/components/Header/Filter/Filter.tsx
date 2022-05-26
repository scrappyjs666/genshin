import styles from './Filter.module.scss';
import React from 'react';
import FilterBtn from './FilterBtn/FilterBtn';

type Props = { children: React.ReactNode | string };

const  Filter: React.FC<Props> = () => {
  return(
    <>
      <div className={styles.filter}>
        <FilterBtn name={'name'} />
        <FilterBtn name={'rating'} />
        <FilterBtn name={'birthday'} />
      </div>
    </>
  )
}

export default Filter;