/* eslint-disable no-constant-condition */
import styles from './HeroPageList.module.scss';
import React from 'react';
import { getApiResource } from '../../api/network';
import { useState, useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';
import imgBtn from './img/star.svg';
import Container from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Store/slices/searchSlice';
import { RootState } from '../../Store/store';
import { useParams } from 'react-router-dom';


const  HeroPageList: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [isbtnActive, isSetisbtnActive] = useState<number[]>([]);
  const [colorBtn, setColorBtn] = useState('#f23');
  const [arrayLenght, setArrayLenght] = useState(10);

  const count = useSelector((state: RootState) => state.search.value)
  const dispatch = useDispatch()
  
  const {id} = useParams();
  const url = `https://api.genshin.dev/${id}`;

  const indexisbtnActive = (item: string, i:number):void => {
    isSetisbtnActive([...isbtnActive, i]);
    if(isbtnActive.includes(i)) {
      const newisbtnActive = isbtnActive.filter((index) => index !== i);
      isSetisbtnActive(newisbtnActive)
    }
  }

  useEffect(() => {
    getApiResource(url)
      .then((data) => {
        setData(data);
        console.log(data)
      });
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  const sortAZ = ():void => {
    setData(data.reverse());
  }

  const sortZA = ():void => {
    setData(data.sort());
  }


  const scrollHandler = ():void => {
    if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {
      setArrayLenght((prevValue) => {
        return prevValue + 8;
      });
    }
  }

  const excludedData = ['defense-mechanism', 'thoma', 'traveler-geo', 'traveler-electro', 'traveler-anemo','raiden', 'ayaka', 'sara','kokomi','kazuha', 'akuoumaru' , 'calamity-queller', 'cinnabar -spindle', 'eberlasting-moonglow', 'haran-geppaku-futsu', 'kagura\'s-verity', 'mouun\'s-moon', 'oathsworn-eye', 'polar-star', 'prototype-archaic', 'predator', 'redhorn-stonethresher', 'royal-spear', 'wavebreaker\'s-fin', 'alley-hunter'];

  const added = 'added to favorites';
  const selected = `choose your favorite ${id}`;


  const img = id !== 'characters' ? '/icon' : '/gacha-card';

  return(
    <>
      <Container>
        {data
          .filter(val => !excludedData.includes(val))
          .slice(0,arrayLenght)
          .map((item, i) =>
            (<HeroCard
              category={id}
              id={item}
              minHeight={id == 'weapons' ?  '240px' : ''}
              color={isbtnActive.includes(i) === true ? colorBtn : ''}
              key={item}
              title={item}
              img={`../images/${id}/${item}${img}`}
              imgBtn={isbtnActive.includes(i) === true ? imgBtn : ''}
              btnText={isbtnActive.includes(i) === true ? added : selected}
              indexisbtnActive={():void => indexisbtnActive(item, i)}
            />))}
      </Container>
    </>
  )
}

export default HeroPageList;