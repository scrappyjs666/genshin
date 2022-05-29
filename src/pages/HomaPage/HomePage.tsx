/* eslint-disable no-constant-condition */
import styles from './HomePage.module.scss';
import React from 'react';
import { getApiResource } from '../../api/network';
import { useState, useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';
import imgBtn from './img/star.svg';
import Basket from '../../components/Basket/Basket';
import Container from '../../components/Container/Container';

const  HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [isbtnActive, isSetisbtnActive] = useState<number[]>([]);
  const [colorBtn, setColorBtn] = useState('#f23');
  const [arrayLenght, setArrayLenght] = useState(40);

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
        console.log(data)
      });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })


  const scrollHandler = ():void => {
    console.log(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight))
  }

  const excludedData = ['thoma', 'traveler-geo', 'traveler-electro', 'traveler-anemo','raiden', 'ayaka', 'sara','kokomi','kazuha'];

  const added = 'added to favorites';
  const selected = 'choose your favorite hero';

  return(
    <>
      <Container>
        <Basket/>
        {characters.filter(val => !excludedData.includes(val)).slice(0,arrayLenght).map((item, i) =>
          (<HeroCard
            id={item}
            color={isbtnActive.includes(i) === true ? colorBtn : ''}
            key={item}
            title={item}
            img={`./images/characters/${item}/gacha-card`}
            imgBtn={isbtnActive.includes(i) === true ? imgBtn : ''}
            btnText={isbtnActive.includes(i) === true ? added : selected}
            indexisbtnActive={():void => indexisbtnActive(item, i)}
          />))}
      </Container>
    </>
  )
}

export default HomePage;