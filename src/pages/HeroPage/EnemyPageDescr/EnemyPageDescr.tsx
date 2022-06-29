import React from 'react'
import styles from './EnemyPageDescr.module.scss'

interface IEnemyPageDescr {
  id: string | undefined
  name: string | undefined
  description: string | undefined
  region: string | undefined
  type: string | undefined
  family: string | undefined
  Faction: string | undefined
}

const EnemyPageDescr: React.FC<IEnemyPageDescr> = ({
  id,
  name,
  description,
  region,
  type,
  family,
  Faction,
}) => {
  return (
    <>
      <div className={styles.EnemyPageDescr}>
        <div className={id}>
          <div className={styles.name}>Name: {name}</div>
          <div className={styles.description}>Description: {description}</div>
          <div className={styles.id}>Id: {id}</div>
          <div className={styles.region}>Region: {region}</div>
          <div className={styles.type}>Type: {type}</div>
          <div className={styles.family}>Family: {family}</div>
          <div className={styles.faction}>Faction: {Faction}</div>
        </div>
      </div>
    </>
  )
}

export default EnemyPageDescr
