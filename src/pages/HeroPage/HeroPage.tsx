import styles from './HeroPage.module.scss';
import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApiResource } from '../../api/network';
import HeroPageWrap from './HeroPageWrap/HeroPageWrap';
import HeroPageCard from './HeroPageCard/HeroPageCard';
import HeroPageDescr from './HeroPageDescr/HeroPageDescr';
import startimg from './img/star.svg';
import EnemyPageDescr from './EnemyPageDescr/EnemyPageDescr';
import WeaponPageDescr from './WeaponPageDescr/WeaponPageDescr';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Store/counterSlice';
import { RootState } from '../../Store/store';
import { IHero } from './Interface';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks';

const  HeroPage: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const [HeroInfo, setHeroInfo] = useState<IHero>();
  const {id} = useParams();
  const location = useLocation();
  const urlParams = location.pathname.split('/');
  const urlCategory = urlParams[2];
  const url = `https://api.genshin.dev/${urlCategory}/${id}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    getApiResource(url)
      .then((data) => {
        setHeroInfo(data);
      });
  }, []);

  const img = urlCategory === 'characters' ? `/images/characters/${String(HeroInfo?.name.toLowerCase().replace(/ /g, '-'))}/gacha-card` :
    `/images/${urlCategory}/${urlParams[3]}/icon`;
  
  return(
    <>
      <HeroPageWrap title={urlParams[3]}>
        <HeroPageCard
          img={img}
        />
        {urlCategory === 'characters' ? 
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
          /> : null}
        {urlCategory === 'enemies' ? 
          <EnemyPageDescr 
            id={HeroInfo?.id} 
            name={HeroInfo?.name} 
            description={HeroInfo?.description} 
            region={HeroInfo?.region} 
            type={HeroInfo?.type} 
            family={HeroInfo?.family} 
            Faction={HeroInfo?.faction}             
          /> : null}
        {urlCategory === 'weapons' ? 
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
          /> : null}
      </HeroPageWrap> 
    </>
  )
}

export default HeroPage;