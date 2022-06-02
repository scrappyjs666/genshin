import styles from './HeroPage.module.scss';
import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApiResource } from '../../api/network';
import HeroPageWrap from './HeroPageWrap/HeroPageWrap';
import HeroPageCard from './HeroPageCard/HeroPageCard';
import HeroPageDescr from './HeroPageDescr/HeroPageDescr';
import startimg from './img/star.svg';
import { stringify } from 'querystring';

const  HeroPage: React.FC = () => {
  interface IHero {
    affiliation: string;
    birthday: string;
    constellation: string;
    description: string;
    name: string;
    nation: string;
    rarity: number;
    vision: string;
    weapon: string;
    weapon_type: string;
  }

  const [HeroInfo, setHeroInfo] = useState<IHero>();
  const {id} = useParams();
  const location = useLocation();
  const urlParams = location.pathname.split('/');
  const urlCategory = urlParams[2];
  const url = `https://api.genshin.dev/${urlCategory}/${id}`;
  let b: { [x: string]: unknown; }[] = []

  useEffect(() => {
    getApiResource(url)
      .then((data) => {
        b = Object.entries(data).map(([k, v]) => ({ [k]: v }))
        console.log(b.flat(Infinity))
      });
  }, []);
  return(
    <>
      {b.map((el:any) => <div className='mem'>{el.name}</div>)}
      <HeroPageWrap title={String(HeroInfo?.name.toLowerCase())}>
        <HeroPageCard
          img={'1'}
        />
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
          visionImg={'1'}
        />
      </HeroPageWrap> 
    </>
  )
}

export default HeroPage;
// visionImg={`/images/elements/${String(HeroInfo?.vision.toLowerCase())}/icon`}
// img={`/images/characters/${String(HeroInfo?.name.toLowerCase().replace(/ /g, '-'))}/gacha-card`}