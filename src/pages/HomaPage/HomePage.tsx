/* eslint-disable no-constant-condition */
import styles from './HomePage.module.scss';
import React from 'react';
import { getApiResource } from '../../api/network';
import { useState, useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';
import imgBtn from './img/star.svg'

const  HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [isbtnActive, isSetisbtnActive] = useState<number[]>([]);
  const [colorBtn, setColorBtn] = useState('#f23');
  const [arrayLenght, setArrayLenght] = useState(8);

  const indexisbtnActive = (item: string, i:number):void => {
    console.log(isbtnActive)
    isSetisbtnActive([...isbtnActive, i]);
    if(isbtnActive.includes(i)) {
      const newisbtnActive = isbtnActive.filter((index) => index !== i);
      isSetisbtnActive(newisbtnActive)
    }
  }

  const url = 'https://api.genshin.dev/characters';

  useEffect(() => {
    getApiResource(url)
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })


  const scrollHandler = (e: EventTarget | null):void => {
    console.log(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight))
  }

  const excludedData = ['thoma', 'traveler-geo', 'traveler-electro', 'traveler-anemo'];

  const added = 'added to favorites';
  const selected = 'choose your favorite hero';

  return(
    <>
      {characters.filter(val => !excludedData.includes(val)).slice(0,arrayLenght).map((item, i) =>
        (<HeroCard
          color={isbtnActive.includes(i) === true ? colorBtn : ''}
          key={item}
          title={item}
          img={`./images/characters/${item}/gacha-card`}
          imgBtn={isbtnActive.includes(i) === true ? imgBtn : ''}
          btnText={isbtnActive.includes(i) === true ? added : selected}
          indexisbtnActive={():void => indexisbtnActive(item, i)}
        />))}
    </>
  )
}

export default HomePage;