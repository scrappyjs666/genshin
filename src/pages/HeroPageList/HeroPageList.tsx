import React from 'react';
import { getApiResource } from '../../api/network';
import { useState, useEffect } from 'react';
import HeroCard from '../../components/HeroCard';
import imgBtn from './img/star.svg';
import Container from '../../components/Container';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/hooks';
import Filter from '../../components/Filter';
import styles from './HeroPageList.module.scss';
import debounce from 'lodash.debounce';
import { addItem } from '../../Store/heroListSlice';
import Loader from '../../components/UI/Loader';

const  HeroPageList: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [colorBtn, setColorBtn] = useState('#f23');
  const [arrayLenght, setArrayLenght] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  // const testDebounce = (() => {
  //   console.log('Hello')
  // }, 250)

  // if (localStorage.getItem('items')) {
  //   const item = JSON.parse(localStorage.getItem('items')!);
  //   console.log(item)
  // }
  const heroArray = useAppSelector((state) => state.heroList.items)
  const dispatch = useAppDispatch()
  
  const {id} = useParams();
  const url = `https://api.genshin.dev/${id}`;
  

  const addHero = (item:string, index:number):void => {
    const elements = {
      id,
      item
    }
    dispatch(addItem(elements))
    console.log(heroArray)
    const b = heroArray.find(el => el.item === 'aloy')
    console.log(b)
  } 
  
  useEffect(() => {
    setIsLoading(true)
    window.scrollTo(0, 0);
    getApiResource(url)
      .then((data) => {
        setData(data);
        setTimeout(() => {setIsLoading(false)}, 1500);
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
      {isLoading ? <Loader/>: 
        <>
          <div className={styles.HeroPage__filter}>
            <Filter
              sortAZ={sortAZ}
              sortZA={sortZA} />
          </div>
          <Container>
            {data
              .filter(val => !excludedData.includes(val))
              .slice(0, arrayLenght)
              .map((item, i) => (
                <HeroCard
                  category={id}
                  id={item}
                  minHeight={id == 'weapons' ? '240px' : ''}
                  color={data.includes(item) === true ? colorBtn : ''}
                  key={item}
                  title={item}
                  img={`../images/${id}/${item}${img}`}
                  imgBtn={data.includes(item) === true ? imgBtn : ''}
                  btnText={data.includes(item) === true ? added : selected}
                  addHero={(): void => addHero(item, i)} />))}
          </Container>
        </>
      }
    </>
  )
}

export default HeroPageList;


