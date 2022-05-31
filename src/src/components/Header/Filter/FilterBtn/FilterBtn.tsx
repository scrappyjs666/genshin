import styles from './FilterBtn.module.scss';
import React from 'react';
import { IoIosFunnel } from 'react-icons/io';

const  FilterBtn: React.FC<{name:string}> = ({ name }) => {
  return(
    <>
      <button 
        className={styles.filterBtn} 
        type='button'>
        <IoIosFunnel/>
        {name}
      </button>
    </>
  )
}

export default FilterBtn;