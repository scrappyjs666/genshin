/* eslint-disable no-constant-condition */
import styles from './HomePage.module.scss';
import React from 'react';
import { getApiResource } from '../../api/network';
import { useState, useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';
import imgBtn from './img/star.svg'

const  HomePage: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  const [btnActive, setBtnActive] = useState(0);
  const [cls, setCls] = useState('green');

  const indexBtnActive = (item: string, i:number):void => {
    console.log('1')
    setBtnActive(i);
    console.log(i)
  }

  const url = 'https://api.genshin.dev/characters';

  useEffect(() => {
    getApiResource(url)
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  const excludedData = ['thoma', 'traveler-geo', 'traveler-electro', 'traveler-anemo'];

  return(
    <>
      {characters.filter(i => !excludedData.includes(i)).map((item, i) =>
        (<HeroCard
          key={item}
          title={item}
          img={`./images/characters/${item}/gacha-card`}
          imgBtn={btnActive ? imgBtn : ''}
          btnText={btnActive ? 'add to favorites' : 'selected character added'}
          indexBtnActive={indexBtnActive} onClick={function (item: string, i: number): void {
            throw new Error('Function not implemented.');
          } }        />))}
    </>
  )
}

export default HomePage;