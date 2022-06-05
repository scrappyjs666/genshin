import styles from './FilterBtn.module.scss';
import React, { MouseEventHandler } from 'react';
import { IoIosFunnel } from 'react-icons/io';

interface IFilterBtn {
  name:string,
  fn:MouseEventHandler<HTMLButtonElement> | undefined,
}

const  FilterBtn: React.FC<IFilterBtn> = ({ name,fn,  }) => {
  return(
    <>
      <button 
        onClick={fn}
        className={styles.filterBtn} 
        type='button'>
        <IoIosFunnel/>
        {name}
      </button>
    </>
  )
}

export default FilterBtn;