import styles from './Container.module.scss';
import React from 'react';

type Props = { children: React.ReactNode };

const  Container: React.FC<Props> = ({ children }) => {
  return(
    <>
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}

export default Container;