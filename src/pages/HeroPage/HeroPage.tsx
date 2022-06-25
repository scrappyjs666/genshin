import { Loader } from 'components'
import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { fetchHeroPage } from 'Store/heroPage/heroPageSlice'
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks'
import EnemyPageDescr from './EnemyPageDescr'
import HeroPageCard from './HeroPageCard'
import HeroPageDescr from './HeroPageDescr'
import HeroPageWrap from './HeroPageWrap'
import startimg from './img/star.svg'
import WeaponPageDescr from './WeaponPageDescr'

const HeroPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { status, data } = useAppSelector((state) => state.heroPage)

  const { id } = useParams()
  const location = useLocation()
  const urlParams = location.pathname.split('/')
  const urlCategory = urlParams[2]
  const url = `https://api.genshin.dev/${urlCategory}/${id}`

  useEffect(() => {
    dispatch(fetchHeroPage(url))
  }, [])

  const img =
    urlCategory === 'characters'
      ? `/images/characters/${String(
          data?.name.toLowerCase().replace(/ /g, '-')
        )}/gacha-card`
      : `/images/${urlCategory}/${urlParams[3]}/icon`

  return (
    <>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <HeroPageWrap title={urlParams[3]}>
          <HeroPageCard img={img} />
          {urlCategory === 'characters' ? (
            <HeroPageDescr
              affiliation={data?.affiliation}
              birthday={data?.birthday}
              constellation={data?.constellation}
              description={data?.description}
              nation={data?.nation}
              rarity={data?.rarity}
              rarityImg={startimg}
              vision={data?.vision}
              weapon={data?.weapon}
              weapon_type={data?.weapon_type}
              visionImg={`/images/elements/${String(
                data?.vision.toLowerCase()
              )}/icon`}
            />
          ) : null}
          {urlCategory === 'enemies' ? (
            <EnemyPageDescr
              id={data?.id}
              name={data?.name}
              description={data?.description}
              region={data?.region}
              type={data?.type}
              family={data?.family}
              Faction={data?.faction}
            />
          ) : null}
          {urlCategory === 'weapons' ? (
            <WeaponPageDescr
              ascensionMaterial={data?.ascensionMaterial}
              baseAttack={data?.baseAttack}
              location={data?.location}
              name={data?.name}
              passiveDesc={data?.passiveDesc}
              passiveName={data?.passiveName}
              rarity={data?.rarity}
              subStat={data?.subStat}
              type={data?.type}
              rarityImg={startimg}
            />
          ) : null}
        </HeroPageWrap>
      )}
    </>
  )
}

export default HeroPage
