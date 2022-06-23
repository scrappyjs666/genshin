import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getApiResource } from '../../api/network'
import { Loader } from 'components'
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks'
import EnemyPageDescr from './EnemyPageDescr'
import HeroPageCard from './HeroPageCard'
import HeroPageDescr from './HeroPageDescr'
import HeroPageWrap from './HeroPageWrap'
import startimg from './img/star.svg'
import { IHero } from '../../Store/Interface'
import WeaponPageDescr from './WeaponPageDescr'
import { fetchHeroPage } from 'Store/heroPageSlice'

const HeroPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const {status, heroPageArray} = useAppSelector((state) => state.heroPage)

  const { id } = useParams()
  const location = useLocation()
  const urlParams = location.pathname.split('/')
  const urlCategory = urlParams[2]
  const url = `https://api.genshin.dev/${urlCategory}/${id}`

  useEffect(() => {
    dispatch(fetchHeroPage({url}))
  }, [])

  // const img =
  //   urlCategory === 'characters'
  //     ? `/images/characters/${String(
  //         heroPageArray?.name.toLowerCase().replace(/ /g, '-')
  //       )}/gacha-card`
  //     : `/images/${urlCategory}/${urlParams[3]}/icon`

  return (
    <>
      {/* {status === 'loading' ? (
        <Loader />
      ) : (
        <HeroPageWrap title={urlParams[3]}>
          <HeroPageCard img={img} />
          {urlCategory === 'characters' ? (
            <HeroPageDescr
              affiliation={heroPageArray?.affiliation}
              birthday={heroPageArray?.birthday}
              constellation={heroPageArray?.constellation}
              description={heroPageArray?.description}
              nation={heroPageArray?.nation}
              rarity={heroPageArray?.rarity}
              rarityImg={startimg}
              vision={heroPageArray?.vision}
              weapon={heroPageArray?.weapon}
              weapon_type={heroPageArray?.weapon_type}
              visionImg={`/images/elements/${String(
                heroPageArray?.vision.toLowerCase()
              )}/icon`}
            />
          ) : null}
          {urlCategory === 'enemies' ? (
            <EnemyPageDescr
              id={heroPageArray?.id}
              name={heroPageArray?.name}
              description={heroPageArray?.description}
              region={heroPageArray?.region}
              type={heroPageArray?.type}
              family={heroPageArray?.family}
              Faction={heroPageArray?.faction}
            />
          ) : null}
          {urlCategory === 'weapons' ? (
            <WeaponPageDescr
              ascensionMaterial={heroPageArray?.ascensionMaterial}
              baseAttack={heroPageArray?.baseAttack}
              location={heroPageArray?.location}
              name={heroPageArray?.name}
              passiveDesc={heroPageArray?.passiveDesc}
              passiveName={heroPageArray?.passiveName}
              rarity={heroPageArray?.rarity}
              subStat={heroPageArray?.subStat}
              type={heroPageArray?.type}
              rarityImg={startimg}
            />
          ) : null}
        </HeroPageWrap>
      )} */}
    </>
  )
}

export default HeroPage
