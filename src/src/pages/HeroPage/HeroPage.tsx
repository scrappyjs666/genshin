import styles from './HeroPage.module.scss';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApiResource } from '../../api/network';
import HeroPageWrap from './HeroPageWrap/HeroPageWrap';
import HeroPageCard from './HeroPageCard/HeroPageCard';
import HeroPageDescr from './HeroPageDescr/HeroPageDescr';
import startimg from './img/star.svg';

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
  const url = `https://api.genshin.dev/characters/${id}`;

  useEffect(() => {
    getApiResource(url)
      .then((data) => {
        setHeroInfo(data);
        console.log(data)
      });
  }, []);
  return(
    <>
      <HeroPageWrap title={String(HeroInfo?.name.toLowerCase())}>
        <HeroPageCard
          img={`/images/characters/${String(HeroInfo?.name.toLowerCase().replace(/ /g, '-'))}/gacha-card`}
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
          visionImg={`/images/elements/${String(HeroInfo?.vision.toLowerCase())}/icon`}
        />
      </HeroPageWrap> 
    </>
  )
}

export default HeroPage;