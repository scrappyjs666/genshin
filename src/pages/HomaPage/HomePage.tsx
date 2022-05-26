import styles from './HomePage.module.scss';
import React from 'react';
import { getApiResource } from '../../api/network';
import { useState, useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';

const  HomePage: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  const url = 'https://api.genshin.dev/weapons/akuoumaru';

  useEffect(() => {
    getApiResource(url)
      .then((data) => {
        setCharacters(data);
        console.log(data)
      });
  }, []);

  return(
    <>
      <HeroCard img = {img}/>
      <div>HomePage</div>
    </>
  )
}

export default HomePage;