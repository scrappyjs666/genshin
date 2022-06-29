import React from 'react'
import styles from './WeaponPageDescr.module.scss'

interface IWeaponPageDescr {
  ascensionMaterial: string | undefined
  baseAttack: number | undefined
  location: string | undefined
  name: string | undefined
  passiveDesc: string | undefined
  passiveName: string | undefined
  rarity: number | undefined
  subStat: string | undefined
  type: string | undefined
  rarityImg: string
}

const WeaponPageDescr: React.FC<IWeaponPageDescr> = ({
  ascensionMaterial,
  baseAttack,
  location,
  name,
  passiveDesc,
  passiveName,
  rarity,
  subStat,
  type,
  rarityImg,
}) => {
  return (
    <>
      <div className={styles.WeaponPageDescr}>
        <div className={ascensionMaterial}>
          <div className={styles.ascensionMaterial}>
            AscensionMaterial: {ascensionMaterial}
          </div>
          <div className={styles.baseAttack}>BaseAttack: {baseAttack}</div>
          <div className={styles.location}>Location: {location}</div>
          <div className={styles.name}>Name: {name}</div>
          <div className={styles.passiveDesc}>PassiveDesc: {passiveDesc}</div>
          <div className={styles.passiveName}>PassiveName: {passiveName}</div>
          <div className={styles.rarity}>
            Rarity: {rarity}
            <img className={styles.rarityImg} src={rarityImg} alt={rarityImg} />
          </div>
          <div className={styles.subStat}>SubStaty: {subStat}</div>
          <div className={styles.type}>Type: {type}</div>
        </div>
      </div>
    </>
  )
}

export default WeaponPageDescr
