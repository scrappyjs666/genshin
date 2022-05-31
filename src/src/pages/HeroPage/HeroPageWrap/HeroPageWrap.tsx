import styles from './HeroPageWrap.module.scss';
import React from 'react';

type Props = { 
  children: React.ReactNode
  title: string;
};

const  HeroPageWrap: React.FC<Props> = ({ children, title }) => {
  return(
    <>
      <main className={styles.HeroPage__main}>
        <h2 className={styles.HeroPage__title}>
          HeroInfo: {title}
        </h2>
        {children}
      </main>
    </>
  )
}

export default HeroPageWrap;