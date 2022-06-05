import React from 'react';
import { getApiResource } from '../../api/network';
import { useState, useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';
import imgBtn from './img/star.svg';
import Container from '../../components/Container/Container';
import { decrement, increment } from '../../Store/counterSlice';
import { RootState } from '../../Store/store';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import styles from './HeroPageList.module.scss';

const  HeroPageList: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [isbtnActive, isSetisbtnActive] = useState<number[]>([]);
  const [colorBtn, setColorBtn] = useState('#f23');
  const [arrayLenght, setArrayLenght] = useState(10);


  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  
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
    window.scrollTo(0, 0);
    getApiResource(url)
      .then((data) => {
        setData(data);
      });
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  const sortAZ = ():void => {
    setData([...data].sort());
  }

  const sortZA = ():void => {
    setData([...data].reverse());
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
      <div className={styles.HeroPage__filter}>
        <Filter 
          sortAZ={sortAZ} 
          sortZA={sortZA}/>
      </div>
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