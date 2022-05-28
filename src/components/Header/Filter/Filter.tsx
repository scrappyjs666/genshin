import styles from './Filter.module.scss';
import React from 'react';
import FilterBtn from './FilterBtn/FilterBtn';

type Props = { children: React.ReactNode | string };

const  Filter: React.FC<Props> = () => {
  return(
    <>
      <div className={styles.filter}>
        <FilterBtn name={'name A-Z'} />
        <FilterBtn name={'name Z-A'} />
      </div>
    </>
  )
}

export default Filter;