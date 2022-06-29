export interface IHero {
  affiliation: string
  birthday: string
  constellation: string
  description: string
  name: string
  nation: string
  rarity: number
  vision: string
  weapon: string
  weapon_type: string
  id: string
  region: string
  type: string
  family: string
  faction: string
  ascensionMaterial: string
  baseAttack: number
  location: string
  passiveDesc: string
  passiveName: string
  subStat: string
}

export interface Idata {
  data: IHero | null
  status: 'loading' | 'success' | 'error'
}
