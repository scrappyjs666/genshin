import styles from './HeroPageDescr.module.scss';
import React from 'react';

interface IHeroPageDescr {
  affiliation: string | undefined;
  birthday: string | undefined;
  constellation: string | undefined;
  description: string | undefined;
  nation: string | undefined;
  rarity: number | undefined;
  vision: string | undefined;
  weapon: string | undefined;
  weapon_type: string | undefined;
  visionImg: string | undefined;
  rarityImg: string | undefined;
}


const  HeroPageDescr: React.FC<IHeroPageDescr> = ({ affiliation,birthday,constellation,description,nation,rarity,vision,weapon,weapon_type,visionImg,rarityImg }) => {

  return(
    <>
      <div className={styles.descr}>
        <div className={styles.affiliation}>
          Affiliation: {affiliation}
        </div>
        <div className={styles.birthday}>
          Birthday: {birthday}
        </div>
        <div className={styles.constellation}>
          Constellation: {constellation}
        </div>
        <div className={styles.description}>
          Description: {description}
        </div>
        <div className={styles.nation}>
          Nation: {nation}
        </div>
        <div 
          className={styles.rarity}>
          Rarity: {rarity}
          <img className={styles.rarityImg} src={rarityImg}/>
        </div>
        <div className={styles.vision}>
          Vision: {vision}
          <img 
            className={styles.visionImg} 
            src={visionImg}/>
        </div>
        <div className={styles.weapon}>
          Weapon: {weapon}
        </div>
        <div className={styles.weapon_type}>
          Weapon_type: {weapon_type}
        </div>
      </div>
    </>
  )
}

export default HeroPageDescr;