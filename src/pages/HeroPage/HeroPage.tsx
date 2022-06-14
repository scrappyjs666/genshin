import styles from './HeroPage.module.scss'
import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getApiResource } from '../../api/network'
import HeroPageWrap from './HeroPageWrap'
import HeroPageCard from './HeroPageCard'
import HeroPageDescr from './HeroPageDescr'
import startimg from './img/star.svg'
import EnemyPageDescr from './EnemyPageDescr'
import WeaponPageDescr from './WeaponPageDescr'
import { IHero } from './Interface'
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks'
import Loader from '../../components/UI/Loader'

const HeroPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const [HeroInfo, setHeroInfo] = useState<IHero>()
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()
  const location = useLocation()
  const urlParams = location.pathname.split('/')
  const urlCategory = urlParams[2]
  const url = `https://api.genshin.dev/${urlCategory}/${id}`

  useEffect(() => {
    setIsLoading(true)
    window.scrollTo(0, 0)
    getApiResource(url).then((data) => {
      setHeroInfo(data)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    })
  }, [])

  const img =
    urlCategory === 'characters'
      ? `/images/characters/${String(HeroInfo?.name.toLowerCase().replace(/ /g, '-'))}/gacha-card`
      : `/images/${urlCategory}/${urlParams[3]}/icon`

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <HeroPageWrap title={urlParams[3]}>
          <HeroPageCard img={img} />
          {urlCategory === 'characters' ? (
            <HeroPageDescr
              affiliation={HeroInfo?.affiliation}
              birthday={HeroInfo?.birthday}
              constellation={HeroInfo?.constellation}
              description={HeroInfo?.description}
              nation={HeroInfo?.nation}
              rarity={HeroInfo?.rarity}
              rarityImg={startimg}
              vision={HeroInfo?.vision}
              weapon={HeroInfo?.weapon}
              weapon_type={HeroInfo?.weapon_type}
              visionImg={`/images/elements/${String(HeroInfo?.vision.toLowerCase())}/icon`}
            />
          ) : null}
          {urlCategory === 'enemies' ? (
            <EnemyPageDescr
              id={HeroInfo?.id}
              name={HeroInfo?.name}
              description={HeroInfo?.description}
              region={HeroInfo?.region}
              type={HeroInfo?.type}
              family={HeroInfo?.family}
              Faction={HeroInfo?.faction}
            />
          ) : null}
          {urlCategory === 'weapons' ? (
            <WeaponPageDescr
              ascensionMaterial={HeroInfo?.ascensionMaterial}
              baseAttack={HeroInfo?.baseAttack}
              location={HeroInfo?.location}
              name={HeroInfo?.name}
              passiveDesc={HeroInfo?.passiveDesc}
              passiveName={HeroInfo?.passiveName}
              rarity={HeroInfo?.rarity}
              subStat={HeroInfo?.subStat}
              type={HeroInfo?.type}
              rarityImg={startimg}
            />
          ) : null}
        </HeroPageWrap>
      )}
    </>
  )
}

export default HeroPage
